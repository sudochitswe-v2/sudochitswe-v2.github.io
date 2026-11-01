'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/themes/christmas/ui/button';
import { Gift, X, Send, User, Loader2, ArrowUp, Sparkles } from 'lucide-react';
import { sendMessageStream, ChatMessage } from '@/lib/ai-chat';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

export default function ChristmasAIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: "Ho Ho Ho! 🎄 I am Santa's Elven Helper & AI Assistant for Chit Swe, Santa's Lead Architect! Inquire freely about his North Pole toys, distributed systems, or career achievements!"
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
          content: 'A blizzard momentarily disrupted the North Pole communications! Please send your message again.',
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
            aria-label="Fly to Sleigh Top"
            className="rounded-full shadow-lg h-11 w-11 hover:scale-110 transition-transform"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}

        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full shadow-[0_0_20px_rgba(212,36,38,0.5)] h-13 px-4 py-3 flex items-center gap-2 hover:scale-105 transition-transform bg-[#D42426] text-white font-bold border-2 border-[#F8B229]"
            aria-label="Open Santa's AI Elf"
          >
            <Gift className="h-6 w-6 animate-bounce text-[#F8B229]" />
            <span className="font-bold text-xs uppercase tracking-wider hidden sm:inline">
              Ask Santa&apos;s AI Elf
            </span>
          </Button>
        )}
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[400px] sm:h-[550px] z-50 flex flex-col bg-background/95 backdrop-blur-md border-2 border-[#165B33] shadow-[0_0_30px_rgba(212,36,38,0.35)] rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#D42426] text-white border-b-2 border-[#F8B229]">
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-[#F8B229] animate-spin-slow" />
              <div>
                <h3 className="font-christmas text-2xl tracking-wide text-[#F8B229]">
                  SANTA&apos;S WORKSHOP AI
                </h3>
                <p className="text-[10px] text-white/80 font-mono">
                  North Pole Intelligence • Holiday Edition
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-black/20 rounded-md transition-colors"
              aria-label="Close Chat"
            >
              <X className="h-5 w-5 text-white" />
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
                      ? 'bg-[#165B33] border-[#F8B229] text-white'
                      : 'bg-[#D42426] border-[#F8B229] text-white'
                  )}
                >
                  {message.role === 'user' ? <User className="h-4 w-4" /> : <Gift className="h-4 w-4 text-[#F8B229]" />}
                </div>
                <div
                  className={cn(
                    'rounded-xl p-3 text-xs leading-relaxed border',
                    message.role === 'user'
                      ? 'bg-[#165B33]/15 border-[#165B33] text-foreground'
                      : 'bg-card border-[#D42426] text-foreground shadow-[0_0_10px_rgba(212,36,38,0.1)]'
                  )}
                >
                  {message.content ? (
                    <div className="prose prose-invert prose-xs max-w-none">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 py-1 text-muted-foreground">
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-[#D42426]" />
                      <span className="font-mono text-[10px]">Calling North Pole elves...</span>
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
            className="p-3 bg-card border-t-2 border-[#165B33] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Santa's Elven AI..."
              disabled={isLoading}
              className="flex-1 bg-background border border-[#165B33] rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#F8B229]"
            />
            <Button
              type="submit"
              size="sm"
              disabled={isLoading || !input.trim()}
              className="h-8 px-3"
            >
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
