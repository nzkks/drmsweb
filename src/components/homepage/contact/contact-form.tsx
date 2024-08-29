'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@nextui-org/react';
import { CgSpinner } from 'react-icons/cg';
import { RiMailSendLine } from 'react-icons/ri';
import { sendGTMEvent } from '@next/third-parties/google';

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
  access_key: z.string(),
  subject: z.string(),
  from_name: z.string(),
  botcheck: z.boolean(),

  username: z
    .string()
    .min(2, {
      message: 'Full name is required',
    })
    .max(80, {
      message: 'Full name is too long',
    }),

  email: z
    .string()
    .email({
      message: 'Must be a valid email',
    })
    .max(255, {
      message: 'Email address is too long',
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
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
  });

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset,
    setValue,
  } = form;

  // const [isSuccess, setIsSuccess] = useState(false);
  // const [Message, setMessage] = useState('');

  const username = useWatch({
    control,
    name: 'username',
    defaultValue: 'Someone',
  });

  useEffect(() => {
    setValue('subject', `${username} sent a message from DRMSWeb contact form`);
  }, [username, setValue]);

  const onSubmit = async (values: FormData) => {
    console.log(values);
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(values, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          sendGTMEvent({
            event: 'Contact-Form-Submitted-Successfully',
            value: 'Contact Form submitted successfully',
          });

          toast({
            title: 'Success',
            description:
              'Thanks for your message! I will get back to you ASAP.',
            variant: 'default',
          });
          reset();
        }
        // else {
        //   setIsSuccess(false);
        //   setMessage(json.message);
        // }
      })
      .catch((error) => {
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
        console.log(error);
      });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <input
            type="hidden"
            value="18426cc6-0455-4fd1-845f-55d5274faa43"
            {...register('access_key')}
          />
          <input type="hidden" {...register('subject')} />
          <input
            type="hidden"
            value="DRMSWeb contact form"
            {...register('from_name')}
          />
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: 'none' }}
            {...register('botcheck')}
          ></input>

          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" autoComplete="false" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    autoComplete="false"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
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
    </div>
  );
};

export default ContactForm;
