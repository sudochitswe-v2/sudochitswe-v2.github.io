'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/themes/christmas/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/themes/christmas/ui/input';
import { Textarea } from '@/themes/christmas/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name.' }),
  email: z.string().email({ message: 'Valid email address is required.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ChristmasContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
      title: '🎄 Message Delivered! 🎄',
      description: `Thank you, ${data.name}. Your message has been received! I will reply promptly.`,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs font-semibold text-emerald-200">
                Your Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  className="bg-[#061A0E]/90 border-emerald-500/40 text-emerald-100 placeholder:text-emerald-500/50 rounded-xl focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/40"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400 text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs font-semibold text-emerald-200">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="bg-[#061A0E]/90 border-emerald-500/40 text-emerald-100 placeholder:text-emerald-500/50 rounded-xl focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/40"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400 text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs font-semibold text-emerald-200">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Project collaboration or inquiry"
                  className="bg-[#061A0E]/90 border-emerald-500/40 text-emerald-100 placeholder:text-emerald-500/50 rounded-xl focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/40"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400 text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs font-semibold text-emerald-200">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project, system architecture, or inquiry..."
                  rows={4}
                  className="bg-[#061A0E]/90 border-emerald-500/40 text-emerald-100 placeholder:text-emerald-500/50 rounded-xl focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/40"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400 text-xs" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold border border-yellow-400/50 shadow-[0_0_20px_rgba(212,36,38,0.4)] w-full text-sm py-3 transition-all hover:scale-[1.01]"
        >
          {isSubmitting ? (
            <>
              <Sparkles className="mr-2 h-4 w-4 animate-spin" /> Sending Message...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Send Message 🎄
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
