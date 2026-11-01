'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/themes/soviet/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/themes/soviet/ui/input';
import { Textarea } from '@/themes/soviet/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Cadre name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Valid dispatch address is required.' }),
  subject: z.string().min(5, { message: 'Subject directive must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Dispatch text must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function SovietContactForm() {
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
    // Simulate dispatch transmission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
      title: '★ TELEGRAM TRANSMITTED ★',
      description: `Dispatch received from Comrade ${data.name}. You will receive a response promptly via state channels.`,
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
              <FormLabel className="font-headline font-bold text-xs uppercase tracking-wider text-[#B81414] dark:text-[#FFC82C]">
                ★ CADRE / SENDER IDENTIFIER
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your official name or title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline font-bold text-xs uppercase tracking-wider text-[#B81414] dark:text-[#FFC82C]">
                ★ RETURN TELEGRAPHIC ADDRESS (EMAIL)
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="comrade@collective.org" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline font-bold text-xs uppercase tracking-wider text-[#B81414] dark:text-[#FFC82C]">
                ★ DISPATCH CLASSIFICATION (SUBJECT)
              </FormLabel>
              <FormControl>
                <Input placeholder="Subject of engagement or collaboration" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline font-bold text-xs uppercase tracking-wider text-[#B81414] dark:text-[#FFC82C]">
                ★ DIRECTIVE CONTENT (MESSAGE)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="State your technical request, proposal, or collaboration directive..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? '★ ENCRYPTING & TRANSMITTING... ★' : '★ TRANSMIT DISPATCH TO CHIT SWE ★'}
        </Button>
      </form>
    </Form>
  );
}
