'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/themes/soviet/ui/button';
import { Bot, X, Send, User, Loader2, ArrowUp } from 'lucide-react';
import { sendMessageStream, ChatMessage } from '@/lib/ai-chat';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

export default function SovietAIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: "Greetings, Citizen! I am the automated Commissariat Intelligence for Comrade Chit Swe. Inquire freely regarding his technical capabilities, state projects, or work history!"
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
    } catch (error) {
      console.error(error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'model',
          content: '★ ATTENTION: Communication line interrupted. Please retry your transmission or consult the dossier directly.',
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          variant="secondary"
          className="pointer-events-auto h-10 w-10 border-2 border-[#B81414] shadow-[3px_3px_0px_0px_#7A0000]"
          aria-label="Ascend to peak"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Floating Chat Trigger */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto flex items-center gap-2 h-12 px-4 shadow-[4px_4px_0px_0px_#7A0000]"
          aria-label="Open State Intelligence"
        >
          <span className="text-base">★</span>
          <span>COMRADE AI DISPATCH</span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto flex flex-col w-[350px] sm:w-[400px] h-[500px] border-4 border-[#B81414] bg-background shadow-[8px_8px_0px_0px_#7A0000]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#B81414] text-[#FFC82C] border-b-2 border-[#FFC82C]">
            <div className="flex items-center gap-2">
              <span className="text-lg">★</span>
              <div>
                <h3 className="font-headline text-xs font-bold uppercase tracking-wider">
                  STATE AI COMMISSARIAT
                </h3>
                <p className="text-[10px] font-mono opacity-80">ACTIVE DISPATCH NODE</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-[#FFC82C] hover:text-[#7A0000] transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  'flex gap-2 max-w-[85%]',
                  msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                )}
              >
                <div
                  className={cn(
                    'p-1.5 shrink-0 self-start',
                    msg.role === 'user'
                      ? 'bg-[#FFC82C] text-[#7A0000] border border-[#B81414]'
                      : 'bg-[#B81414] text-[#FFC82C] border border-[#FFC82C]'
                  )}
                >
                  {msg.role === 'user' ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                </div>

                <div
                  className={cn(
                    'p-3 border-2',
                    msg.role === 'user'
                      ? 'bg-[#FFC82C]/15 border-[#B81414] text-foreground'
                      : 'bg-card border-border text-foreground shadow-[2px_2px_0px_0px_#B81414]'
                  )}
                >
                  <div className="prose prose-sm dark:prose-invert max-w-none break-words">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs font-mono text-[#B81414]">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>★ ENCRYPTING COMMUNIQUE...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-3 border-t-2 border-[#B81414] bg-card flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Submit technical inquiry..."
              className="flex-1 bg-background border-2 border-[#B81414] px-3 py-2 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-[#FFC82C]"
            />
            <Button type="submit" size="sm" disabled={isLoading || !input.trim()}>
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
