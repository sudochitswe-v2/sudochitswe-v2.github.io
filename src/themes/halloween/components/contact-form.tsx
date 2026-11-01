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
  name: z.string().min(2, { message: 'Sorcerer / Mortal name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Valid owl or ether address is required.' }),
  subject: z.string().min(5, { message: 'Incantation subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Ritual message must be at least 10 characters.' }),
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
    // Simulate seance transmission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
      title: '🎃 SEANCE INVOCATION RECEIVED! 🎃',
      description: `Your spirit dispatch has reached the Grand Pumpkin Necromancer. An ethereal answer shall arrive shortly!`,
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
              <FormLabel className="font-bold text-xs uppercase tracking-wider text-[#FF6B00]">
                🕸️ CONJURER / MORTAL NAME
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your name or witch/wizard title" {...field} />
              </FormControl>
              <FormMessage className="text-[#FF0055] text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xs uppercase tracking-wider text-[#FF6B00]">
                🕸️ SPECTRAL EMAIL
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="mortal@coven.realm" {...field} />
              </FormControl>
              <FormMessage className="text-[#FF0055] text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xs uppercase tracking-wider text-[#FF6B00]">
                🕸️ RITUAL OBJECTIVE / SUBJECT
              </FormLabel>
              <FormControl>
                <Input placeholder="Reason for summoning (e.g., Code Necromancy project)" {...field} />
              </FormControl>
              <FormMessage className="text-[#FF0055] text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xs uppercase tracking-wider text-[#FF6B00]">
                🕸️ GRIMOIRE MESSAGE / SUMMONING
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Inscribe your message into the ether..."
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[#FF0055] text-xs" />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full text-sm font-bold">
          {isSubmitting ? (
            <>
              <Sparkles className="mr-2 h-4 w-4 animate-spin" /> CONJURING DISPATCH...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> TRANSMIT RITUAL DISPATCH 🎃
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
