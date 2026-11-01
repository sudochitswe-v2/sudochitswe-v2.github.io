'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/themes/halloween/ui/button';
import { Ghost, X, Send, User, Loader2, ArrowUp } from 'lucide-react';
import { sendMessageStream, ChatMessage } from '@/lib/ai-chat';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

export default function HalloweenAIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: "Hello! 🎃 I'm Chit Swe's AI Assistant. Ask me anything about his technical stack, engineering achievements, or featured projects!"
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
          content: 'Connection interrupted! Please ask your question again.',
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
            className="stone-btn rounded-full shadow-lg h-11 w-11 hover:scale-110 transition-transform"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}

        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="stone-btn-ember rounded-full h-13 px-4 py-3 flex items-center gap-2 hover:scale-105 transition-transform"
            aria-label="Open AI Assistant"
          >
            <Ghost className="h-5 w-5 animate-pulse text-black" />
            <span className="font-mono text-xs uppercase tracking-wider hidden sm:inline text-black font-bold">
              Chat with AI
            </span>
          </Button>
        )}
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className="stone-slab-texture fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[400px] sm:h-[550px] z-50 flex flex-col border-2 border-[#443D36] shadow-[0_12px_40px_rgba(0,0,0,0.9)] rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1C1916] text-stone-200 border-b border-[#443D36]">
            <div className="flex items-center gap-2.5">
              <Ghost className="h-5 w-5 text-orange-400 animate-pulse" />
              <div>
                <h3 className="font-creepster text-xl tracking-wider text-orange-400">
                  AI ASSISTANT
                </h3>
                <p className="text-[10px] text-stone-400 font-mono">
                  Online • Technical Questions
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-[#26211C] rounded-lg transition-colors text-stone-400 hover:text-stone-100"
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
                      ? 'bg-orange-500 border-orange-600 text-black'
                      : 'bg-[#26211C] border-[#443D36] text-orange-400'
                  )}
                >
                  {message.role === 'user' ? <User className="h-4 w-4" /> : <Ghost className="h-4 w-4 text-orange-400" />}
                </div>
                <div
                  className={cn(
                    'rounded-xl p-3 text-xs leading-relaxed border',
                    message.role === 'user'
                      ? 'bg-orange-500/15 border-orange-500/40 text-stone-100'
                      : 'bg-[#1C1916] border-[#443D36] text-stone-200 shadow-sm'
                  )}
                >
                  {message.content ? (
                    <div className="prose prose-invert prose-xs max-w-none">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 py-1 text-stone-400">
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-orange-400" />
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
            className="p-3 bg-[#1C1916] border-t border-[#443D36] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
              className="flex-1 bg-[#141210] border border-[#443D36] rounded-xl px-3 py-2 text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-orange-500"
            />
            <Button
              type="submit"
              size="sm"
              disabled={isLoading || !input.trim()}
              className="stone-btn-ember h-8 px-3 rounded-lg"
            >
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
