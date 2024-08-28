'use client';

import { useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@nextui-org/react';
import ReCAPTCHA from 'react-google-recaptcha';

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
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Full name is required',
  }),

  email: z
    .string()
    .email({
      message: 'Must be a valid email',
    })
    .trim()
    .toLowerCase(),

  message: z
    .string({ message: 'Enter message' })
    .min(20, {
      message: 'Message must be at least 20 characters',
    })
    .max(1000, {
      message: 'Message must be less than 1000 characters',
    }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormData) => {
    const token = await recaptchaRef.current?.executeAsync();
    const dataWithToken = { ...values, token };
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          size="invisible"
          ref={recaptchaRef}
          hl="en"
        />

        <Button
          className="bg-accent font-semibold dark:text-black"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
