'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

import { ContactIcons, Section } from '@/components/common';
import ContactForm from './contact-form';

const Contact = () => {
  useEffect(() => {
    const encEmail = 'a2tzaGFudGhvc2hAZ21haWwuY29t';
    const emailLink = window.document.getElementById('contact-email');
    if (emailLink) {
      emailLink.setAttribute('href', 'mailto:'.concat(atob(encEmail)));
    }
  }, []);

  return (
    <Section id="contact">
      <h2 className="text-center text-xl">Get in touch</h2>

      <div className="mx-auto mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-2 font-semibold">Connect with me:</div>
          <ContactIcons align="start" />
          <div className="mt-6 flex font-semibold">
            <MdOutlineAlternateEmail className="size-6" />{' '}
            <span className="ml-1">Email:</span>
          </div>
          <div>
            <Link
              id="contact-email"
              href=""
              target="_blank"
              className="text-accent underline hover:text-heading"
            >
              Click to send me an email
            </Link>
          </div>
          <div className="mt-6 flex font-semibold">
            <MdLocalPhone className="size-5" />
            <span className="ml-1">Phone:</span>
          </div>
          <div>
            <Link
              href="tel:+642102495970"
              className="text-accent underline hover:text-heading"
            >
              +64 21 024 95970
            </Link>
          </div>
          <div className="mt-6 flex font-semibold">
            <IoLocationSharp className="size-5" />
            <span className="ml-1">Location:</span>
          </div>
          <div>Auckland - 2024, New Zealand</div>
        </div>
        <div className="mt-12 lg:mt-0">
          <p className="mb-2">
            My inbox is always open. Whether you have a question or share about
            any relevant job that suits my skills and experience or just want to
            say hello, feel free to email me. I&apos;ll try my best to get back
            to you as soon as I can.
          </p>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
