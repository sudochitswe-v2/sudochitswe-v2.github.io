'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, X, Send, Sparkles, User, Loader2, ArrowUp } from 'lucide-react';
import { sendMessageStream, ChatMessage } from '@/lib/ai-chat';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: "Hi! I'm Chit Swe's AI assistant. Ask me anything about his experience, projects, or skills!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Add a placeholder message for the model's response
      setMessages(prev => [...prev, { role: 'model', content: '' }]);

      // Gemini requires history to start with a user message
      const apiHistory = messages.length > 0 && messages[0].role === 'model'
        ? messages.slice(1)
        : messages;

      const stream = sendMessageStream(apiHistory, userMessage.content);

      for await (const partialResponse of stream) {
        setMessages(prev => {
          const newMessages = [...prev];
          // Update the last message (which is the model's placeholder)
          newMessages[newMessages.length - 1] = {
            role: 'model',
            content: partialResponse
          };
          return newMessages;
        });
      }
    } catch (error) {
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          role: 'model',
          content: "Sorry, I encountered an error. Please try again."
        };
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "What is your tech stack?",
    "Tell me about your experience.",
    "What projects have you worked on?",
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    // Use a small timeout to let the state update before sending
    setTimeout(() => {
      document.getElementById('chat-send-btn')?.click();
    }, 50);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="mb-4 flex h-[400px] w-[350px] sm:w-[400px] flex-col overflow-hidden retro-panel p-1 bg-[#c0c0c0] transition-none pointer-events-auto">
          {/* Header */}
          <div className="bg-[#000080] p-1 flex justify-between items-center border-b-2 border-border-bevel">
            <div className="flex gap-2 items-center">
                <Bot className="h-4 w-4 text-white" />
                <h3 className="font-bold text-white text-sm uppercase">AI_CHAT.EXE</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-5 w-5 bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080] rounded-none hover:bg-[#c0c0c0]">
              <X className="h-3 w-3 text-black font-bold" />
            </Button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black font-body text-neon-cyan retro-scanlines relative border-4 border-black border-r-white border-b-white">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col gap-1 w-full",
                )}
              >
                <div className="text-neon-lime text-xs font-bold uppercase">
                  {msg.role === 'user' ? 'USER >' : 'SYSTEM >'}
                </div>
                <div className="text-sm break-words whitespace-pre-wrap">
                  {msg.role === 'user' ? (
                    msg.content
                  ) : msg.content === '' && isLoading ? (
                    <span className="animate-blink">_</span>
                  ) : (
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-neon-yellow underline" />,
                        p: ({ node, ...props }) => <p {...props} className="mb-2 last:mb-0" />
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t-2 border-[#808080] bg-[#c0c0c0] pt-2 mt-2">
            <div className="flex items-center gap-2">
              <span className="text-black font-bold font-body">&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-white border-2 border-[#808080] border-t-black border-l-black px-2 py-1 text-sm focus:outline-none font-body text-black"
                disabled={isLoading}
              />
              <Button
                id="chat-send-btn"
                className="retro-bevel-btn px-2 py-1 h-auto text-xs"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
              >
                [ENTER]
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <div className="relative flex flex-col items-end gap-3 pointer-events-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="retro-bevel-btn flex h-12 w-12 items-center justify-center rounded-none shadow-none text-black"
          >
            <Bot className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
