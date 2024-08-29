'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

import { ContactIcons, Container, SectionBg } from '@/components/common';
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
    <section className="relative border-t border-[#25213b]" id="contact">
      <SectionBg />
      <Container className="py-16">
        <h2 className="text-center text-xl">Contact</h2>

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
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
