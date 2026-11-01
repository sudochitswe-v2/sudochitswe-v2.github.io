'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/themes/christmas/ui/button';
import { Gift, X, Send, User, Loader2, ArrowUp } from 'lucide-react';
import { sendMessageStream, ChatMessage } from '@/lib/ai-chat';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

export default function ChristmasAIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: "Hello! 🎄 I'm Chit Swe's AI Assistant. Feel free to ask me anything about his technical stack, engineering experience, or portfolio projects!"
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      setMessages((prev) => [...prev, { role: 'model', content: '' }]);

      const apiHistory =
        messages.length > 0 && messages[0].role === 'model'
          ? messages.slice(1)
          : messages;

      const stream = sendMessageStream(apiHistory, userMessage.content);

      for await (const partialResponse of stream) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: 'model',
            content: partialResponse,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: 'model',
          content: 'Communications error! Please send your question again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {showScrollTop && (
          <Button
            size="icon"
            variant="secondary"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="rounded-full shadow-lg h-11 w-11 bg-emerald-950/80 border border-emerald-500/40 text-yellow-300 hover:scale-110 transition-transform"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}

        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full shadow-[0_0_20px_rgba(212,36,38,0.5)] h-13 px-4 py-3 flex items-center gap-2 hover:scale-105 transition-transform bg-[#D42426] text-white font-bold border border-[#F8B229]"
            aria-label="Open AI Assistant"
          >
            <Gift className="h-5 w-5 text-yellow-300 animate-bounce" />
            <span className="font-mono text-xs uppercase tracking-wider hidden sm:inline">
              Chat with AI
            </span>
          </Button>
        )}
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[400px] sm:h-[550px] z-50 flex flex-col bg-[#071E12]/95 backdrop-blur-md border border-emerald-500/40 shadow-[0_12px_40px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0E2818] text-white border-b border-emerald-500/30">
            <div className="flex items-center gap-2.5">
              <Gift className="h-5 w-5 text-yellow-400" />
              <div>
                <h3 className="font-christmas text-2xl tracking-wide text-yellow-400">
                  AI ASSISTANT
                </h3>
                <p className="text-[10px] text-emerald-300/80 font-mono">
                  Online • Technical Questions
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-emerald-950/60 rounded-lg transition-colors text-emerald-300 hover:text-white"
              aria-label="Close Chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex gap-2.5 max-w-[85%]',
                  message.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                )}
              >
                <div
                  className={cn(
                    'w-7 h-7 rounded-full flex items-center justify-center shrink-0 border text-xs',
                    message.role === 'user'
                      ? 'bg-red-600 border-red-500 text-white'
                      : 'bg-emerald-950 border-emerald-500/50 text-yellow-300'
                  )}
                >
                  {message.role === 'user' ? <User className="h-4 w-4" /> : <Gift className="h-4 w-4 text-yellow-300" />}
                </div>
                <div
                  className={cn(
                    'rounded-xl p-3 text-xs leading-relaxed border',
                    message.role === 'user'
                      ? 'bg-red-600/15 border-red-500/40 text-white'
                      : 'bg-[#0E2818] border-emerald-500/30 text-emerald-100 shadow-sm'
                  )}
                >
                  {message.content ? (
                    <div className="prose prose-invert prose-xs max-w-none">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 py-1 text-emerald-300/70">
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-yellow-400" />
                      <span className="font-mono text-[10px]">Thinking...</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-[#0E2818] border-t border-emerald-500/30 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
              className="flex-1 bg-[#04120A] border border-emerald-500/30 rounded-xl px-3 py-2 text-xs text-emerald-100 placeholder:text-emerald-500/50 focus:outline-none focus:border-yellow-400"
            />
            <Button
              type="submit"
              size="sm"
              disabled={isLoading || !input.trim()}
              className="rounded-lg bg-red-600 hover:bg-red-700 text-white border border-yellow-400/50 h-8 px-3"
            >
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
