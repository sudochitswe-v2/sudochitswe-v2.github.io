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
import { Send, Gift, Sparkles } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Your name or elf handle must be at least 2 characters.' }),
  email: z.string().email({ message: 'Valid postal dispatch address is required.' }),
  subject: z.string().min(5, { message: 'Wishlist or project subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Letter message must be at least 10 characters.' }),
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
    // Simulate North Pole postal dispatch
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
      title: '🎄 LETTER DELIVERED TO SANTA! 🎄',
      description: `Ho ho ho! Letter received from ${data.name}. The North Pole engineering elves will reply by reindeer dispatch soon!`,
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
              <FormLabel className="font-bold text-xs uppercase tracking-wider text-[#D42426] dark:text-[#F8B229]">
                🎅 SENDER / ELF NAME
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name or workshop title" {...field} />
              </FormControl>
              <FormMessage className="text-[#D42426] text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xs uppercase tracking-wider text-[#D42426] dark:text-[#F8B229]">
                🎅 NORTH POLE POST EMAIL
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="elf@northpole.workshop" {...field} />
              </FormControl>
              <FormMessage className="text-[#D42426] text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xs uppercase tracking-wider text-[#D42426] dark:text-[#F8B229]">
                🎅 INQUIRY OR WISHLIST SUBJECT
              </FormLabel>
              <FormControl>
                <Input placeholder="New software architecture / collaboration inquiry" {...field} />
              </FormControl>
              <FormMessage className="text-[#D42426] text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xs uppercase tracking-wider text-[#D42426] dark:text-[#F8B229]">
                🎅 LETTER TO SANTA&apos;S LEAD ARCHITECT
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Draft your letter with full project specs or holiday greetings..."
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[#D42426] text-xs" />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full text-sm font-bold">
          {isSubmitting ? (
            <>
              <Sparkles className="mr-2 h-4 w-4 animate-spin" /> DISPATCHING SLEIGH...
            </>
          ) : (
            <>
              <Gift className="mr-2 h-4 w-4" /> DISPATCH LETTER TO SANTA 🎄
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
