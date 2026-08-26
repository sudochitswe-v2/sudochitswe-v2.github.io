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
        <div className="mb-4 flex h-[500px] w-[350px] sm:w-[400px] flex-col overflow-hidden brutal-border-4 bg-card shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-none animate-in slide-in-from-bottom-5 pointer-events-auto">
          {/* Header */}
          <div className="flex items-center justify-between border-b-4 border-foreground bg-accent-yellow p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center brutal-border bg-white text-black">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-mono font-bold uppercase text-black">AI Assistant</h3>
                <p className="text-xs font-mono font-bold text-black">Ask me anything</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-none brutal-border bg-white hover:bg-foreground hover:text-background text-black transition-none">
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
                  "flex h-8 w-8 shrink-0 items-center justify-center brutal-border",
                  msg.role === 'user' ? "bg-foreground text-background" : "bg-accent-blue text-black"
                )}>
                  {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className={cn(
                  "brutal-border px-4 py-2 text-sm font-medium",
                  msg.role === 'user'
                    ? "bg-foreground text-background brutal-shadow-sm"
                    : "bg-white text-black brutal-shadow-sm prose prose-sm max-w-none"
                )}>
                  {msg.role === 'user' ? (
                    msg.content
                  ) : msg.content === '' && isLoading ? (
                    <div className="flex items-center h-5">
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                    </div>
                  ) : (
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:bg-black hover:text-white" />,
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
                  className="brutal-border bg-white px-3 py-1 text-xs font-mono font-bold text-black hover:bg-black hover:text-white transition-none text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="border-t-4 border-foreground p-4 bg-muted">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 brutal-border bg-white px-4 py-2 font-mono text-sm text-black focus:outline-none focus:ring-2 focus:ring-black transition-none"
                disabled={isLoading}
              />
              <Button
                id="chat-send-btn"
                size="icon"
                className="h-10 w-10 shrink-0 bg-accent-pink text-white brutal-shadow-sm brutal-press transition-none"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
              >
                <Send className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Footer branding */}
          <div className="pb-2 text-center bg-muted">
            <span className="text-[10px] font-mono font-bold uppercase text-foreground">Powered by Gemini AI</span>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <div className="relative flex flex-col items-end gap-3 pointer-events-auto">

          {/* Attention Grabber Popup */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-both brutal-border bg-white px-4 py-2 text-sm brutal-shadow">
            <span className="font-mono font-bold uppercase text-black">
              ✨ Ask AI about my experience!
            </span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="group flex h-14 w-14 items-center justify-center brutal-border bg-accent-yellow text-black brutal-shadow brutal-hover focus:outline-none transition-none"
          >
            <Sparkles className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
