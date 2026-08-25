import { GoogleGenerativeAI } from '@google/generative-ai';
import { getDecodedAboutText } from './portfolio-context';
import {
  PROFILE_DATA,
  EXPERIENCE_DATA,
  SKILLS_BY_LEVEL,
  EDUCATION_DATA,
  CERTIFICATES_DATA,
  COMPANY_PROJECTS_DATA,
  PERSONAL_PROJECTS_DATA
} from './data';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export type ChatMessage = {
  role: 'user' | 'model';
  content: string;
};

// Build the system instructions from portfolio data and the about text
async function getSystemInstruction(): Promise<string> {
  const aboutText = await getDecodedAboutText();

  const systemInstruction = `
You are an AI assistant for Chit Swe's portfolio website. 
Your goal is to answer questions about Chit Swe's experience, skills, projects, and background.
You must speak professionally but with a friendly and approachable tone.
Never invent information. If you don't know the answer based on the provided context, politely say so and encourage them to contact Chit Swe directly.
Be concise but informative in your answers.

Here is the core information you know about Chit Swe:



[PROFILE]
Name: ${PROFILE_DATA.name}
Title: ${PROFILE_DATA.title}
Intro: ${PROFILE_DATA.introduction}
Contact Email: ${PROFILE_DATA.contact.email}

[SKILLS]
Expert: ${SKILLS_BY_LEVEL.Expert.join(', ')}
Intermediate: ${SKILLS_BY_LEVEL.Intermediate.join(', ')}
Beginner: ${SKILLS_BY_LEVEL.Beginner.join(', ')}

[EXPERIENCE]
${EXPERIENCE_DATA.map(exp => `- ${exp.role} at ${exp.company} (${exp.years}): ${exp.description}`).join('\n')}

[EDUCATION]
${EDUCATION_DATA.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.years})`).join('\n')}

[CERTIFICATIONS]
${CERTIFICATES_DATA.map(cert => `- ${cert.title} by ${cert.issuer} (${cert.year})`).join('\n')}

[COMPANY PROJECTS]
${COMPANY_PROJECTS_DATA.map(proj => `- ${proj.title}: ${proj.description}. Tech: ${proj.technologies.join(', ')}`).join('\n')}

[PERSONAL PROJECTS]
${PERSONAL_PROJECTS_DATA.map(proj => `- ${proj.title}: ${proj.description}. Tech: ${proj.technologies.join(', ')}`).join('\n')}
`;
  return systemInstruction;
}

export async function* sendMessageStream(history: ChatMessage[], newMessage: string) {
  if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
    yield "I'm sorry, the AI chat feature is currently not configured with an API key.";
    return;
  }

  const modelsToTry = process.env.NEXT_PUBLIC_GEMINI_MODEL
    ? [process.env.NEXT_PUBLIC_GEMINI_MODEL]
    : [
        'gemini-3.6-flash-lite',
        'gemini-3.5-flash-lite',
        'gemini-3.1-flash-lite',
        'gemini-2.5-flash-lite',
        'gemini-2.0-flash-lite'
      ];

  const formattedHistory = history.map(msg => ({
    role: msg.role,
    parts: [{ text: msg.content }],
  }));

  const systemInstruction = await getSystemInstruction();
  let lastError: any = null;

  for (const modelName of modelsToTry) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction
      });

      const chat = model.startChat({
        history: formattedHistory,
      });

      const result = await chat.sendMessageStream(newMessage);
      let fullResponse = '';

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        fullResponse += chunkText;
        yield fullResponse; // Yield the accumulated response so far for typing effect
      }
      
      // If we successfully finished streaming, return to exit the generator
      return;
    } catch (error: any) {
      console.warn(`Failed to generate message stream with model ${modelName}:`, error);
      lastError = error;
      // Continue to the next model in the list
    }
  }

  // If all models failed, handle the error
  if (lastError) {
    console.error('All Gemini Flash-Lite models failed:', lastError);
    if (lastError?.message?.includes('503') || lastError?.status === 503) {
      yield "The AI model is currently experiencing high demand. Please try again in a few moments!";
    } else {
      yield "I'm sorry, I encountered an error while trying to generate a response. Please try again later.";
    }
  }
}
