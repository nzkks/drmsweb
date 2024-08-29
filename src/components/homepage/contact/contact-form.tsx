'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@nextui-org/react';
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
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
  });

  const {
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
    register,
    reset,
    setValue,
  } = form;

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState('');

  const username = useWatch({
    control,
    name: 'username',
    defaultValue: 'Someone',
  });

  useEffect(() => {
    setValue('subject', `${username} sent a message from DRMSWeb contact form`);
  }, [username, setValue]);

  const onSubmit = (values: FormData) => {
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
    <div>
      {!isSubmitSuccessful && (
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
              value="DRMSWeb site contact form"
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
                  <FormLabel>Name</FormLabel>
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
                  <FormLabel>Email</FormLabel>
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
              className="bg-accent font-semibold dark:text-black"
              type="submit"
            >
              Send
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
