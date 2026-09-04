'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { PROFILE_DATA } from '@/lib/data';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, subject, message } = values;
    const body = `Hi Chit Swe,

My name is ${name}.

${message}

You can reach me at: ${email}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PROFILE_DATA.contact.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.open(gmailUrl, '_blank');
      toast({
        title: 'Opening Gmail...',
        description: 'Redirecting to Gmail compose with your message.',
      });
      form.reset();
    } catch (error) {
      console.error('Failed to open Gmail:', error);
      const mailtoLink = `mailto:${PROFILE_DATA.contact.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      form.reset();
    }
  }

  return (
    <div className="mx-auto w-full max-w-screen-md retro-panel bg-[#c0c0c0] p-6 text-black">
       <div className="mb-8 border-b-2 border-[#808080] pb-2">
         <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-4xl uppercase">
           Compose Message
         </h2>
         <p className="mt-2 text-[#000080] font-bold">
           &gt; SYSTEM IS READY FOR INPUT...
         </p>
       </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-black uppercase">Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                  <FormLabel className="font-bold text-black uppercase">Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-black uppercase">Subject:</FormLabel>
                <FormControl>
                  <Input placeholder="Project Proposal" {...field} />
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
                <FormLabel className="font-bold text-black uppercase">Message:</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-right border-t-2 border-white pt-4">
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              [ SEND DATA ]
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
