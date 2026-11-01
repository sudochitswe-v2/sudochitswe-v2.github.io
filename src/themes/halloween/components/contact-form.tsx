'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/themes/halloween/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/themes/halloween/ui/input';
import { Textarea } from '@/themes/halloween/ui/textarea';
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

export default function HalloweenContactForm() {
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
      title: '🎃 Message Sent! 🎃',
      description: `Thank you, ${data.name}. Your message has been received. I will reply to you promptly!`,
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
              <FormLabel className="font-mono text-xs font-semibold text-stone-300">
                Your Name
              </FormLabel>
              <FormControl>
                <Input placeholder="John Doe" className="bg-[#1C1916] border-[#443D36] text-stone-100 placeholder:text-stone-500 rounded-xl focus:border-orange-500" {...field} />
              </FormControl>
              <FormMessage className="text-orange-500 text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs font-semibold text-stone-300">
                Email Address
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" className="bg-[#1C1916] border-[#443D36] text-stone-100 placeholder:text-stone-500 rounded-xl focus:border-orange-500" {...field} />
              </FormControl>
              <FormMessage className="text-orange-500 text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs font-semibold text-stone-300">
                Subject
              </FormLabel>
              <FormControl>
                <Input placeholder="Project collaboration or inquiry" className="bg-[#1C1916] border-[#443D36] text-stone-100 placeholder:text-stone-500 rounded-xl focus:border-orange-500" {...field} />
              </FormControl>
              <FormMessage className="text-orange-500 text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs font-semibold text-stone-300">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project or inquiry..."
                  rows={4}
                  className="bg-[#1C1916] border-[#443D36] text-stone-100 placeholder:text-stone-500 rounded-xl focus:border-orange-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-orange-500 text-xs" />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="stone-btn-ember w-full text-sm font-semibold rounded-xl">
          {isSubmitting ? (
            <>
              <Sparkles className="mr-2 h-4 w-4 animate-spin" /> Sending Message...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Send Message 🎃
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
