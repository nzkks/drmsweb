'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@nextui-org/react';
import ReCAPTCHA from 'react-google-recaptcha';
import { CgSpinner } from 'react-icons/cg';
import { RiMailSendLine } from 'react-icons/ri';

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
import { sendContactForm } from '@/actions/send-email';
import { sendGTMEvent } from '@next/third-parties/google';

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

  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: FormData) => {
    const token = await recaptchaRef.current?.executeAsync();
    const dataWithToken = { ...values, token };
    const result = await sendContactForm(dataWithToken as any);
    if (result.error) {
      sendGTMEvent({
        event: 'Contact-Form-Failure',
        value: 'Contact Form failure',
      });

      toast({
        title: 'Error',
        description:
          'Apologies! Something went wrong. Please email me directly.',
        variant: 'destructive',
      });
    } else {
      sendGTMEvent({
        event: 'Contact-Form-Submitted-Successfully',
        value: 'Contact Form submitted successfully',
      });

      toast({
        title: 'Success',
        description: 'Thanks for your message! I will get back to you ASAP.',
        variant: 'default',
      });
      reset();
    }
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
        <p className="text-tiny">
          This site is protected by reCAPTCHA and the Google{' '}
          <Link
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Terms of Service
          </Link>{' '}
          apply.
        </p>

        <ReCAPTCHA
          sitekey={
            process.env.NODE_ENV !== 'production'
              ? (process.env.NEXT_PUBLIC_RECAPTCHA_LOCALHOST_SITE_KEY as string)
              : (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string)
          }
          size="invisible"
          ref={recaptchaRef}
          hl="en"
          badge="bottomleft"
        />

        <Button
          className={`${
            isSubmitting
              ? 'cursor-not-allowed opacity-50'
              : 'cursor-pointer opacity-100'
          } group bg-accent font-semibold text-white dark:text-black`}
          type="submit"
          disabled={isSubmitting}
          onPress={() =>
            sendGTMEvent({
              event: 'Contact-Form-Submit-btn-clicked',
              value: 'Contact Form submit button clicked',
            })
          }
        >
          {isSubmitting ? (
            <CgSpinner className="size-6 animate-spin" />
          ) : (
            <>
              <RiMailSendLine className="group-hover:scale-125" />{' '}
              <span>SEND</span>
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
