'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, X, Send, Sparkles, User, Loader2 } from 'lucide-react';
import { sendMessageStream, ChatMessage } from '@/lib/ai-chat';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: "Hi! I'm Chit Swe's AI assistant. Ask me anything about his experience, projects, or skills!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[350px] sm:w-[400px] flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-background/95 shadow-[0_0_40px_rgba(168,85,247,0.15)] backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-purple-500/10 bg-muted/30 p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 text-white shadow-sm">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask me anything</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex gap-3 max-w-[85%]",
                  msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm",
                  msg.role === 'user' ? "bg-secondary text-secondary-foreground" : "bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 text-white"
                )}>
                  {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className={cn(
                  "rounded-2xl px-4 py-2 text-sm",
                  msg.role === 'user'
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-muted/50 border border-purple-500/10 shadow-sm prose prose-sm dark:prose-invert max-w-none"
                )}>
                  {msg.role === 'user' ? (
                    msg.content
                  ) : msg.content === '' && isLoading ? (
                    <div className="flex items-center h-5">
                      <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                    </div>
                  ) : (
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary underline" />,
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

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 p-4 pt-0">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestedQuestion(q)}
                  className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground hover:bg-muted transition-colors text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-purple-500/10 p-4 bg-background/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 rounded-full border border-purple-500/20 bg-muted/50 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                disabled={isLoading}
              />
              <Button
                id="chat-send-btn"
                size="icon"
                className="h-10 w-10 rounded-full shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 shadow-md transition-all"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
              >
                <Send className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Footer branding */}
          <div className="pb-2 text-center">
            <span className="text-[10px] text-muted-foreground/60">Powered by Gemini AI</span>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <div className="relative flex flex-col items-end gap-3">
          {/* Attention Grabber Popup */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-both rounded-2xl rounded-br-sm bg-background border border-purple-500/20 px-4 py-2 text-sm shadow-lg">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
              ✨ Ask AI about my experience!
            </span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none overflow-hidden"
          >
            {/* Animated glowing background (Gemini/Siri style) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-90 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Spinning light effect */}
            <div className="absolute inset-[-50%] animate-[spin_3s_linear_infinite] bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <Sparkles className="relative z-10 h-6 w-6 text-white drop-shadow-md" />
          </button>
        </div>
      )}
    </div>
  );
}
