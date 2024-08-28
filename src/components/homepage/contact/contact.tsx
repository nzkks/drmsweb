import Link from 'next/link';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';

import { ContactIcons, Container, SectionBg } from '@/components/common';
import ContactForm from './contact-form';

const Contact = () => {
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
                href="mailto:kkshanthosh@gmail.com"
                className="text-accent underline hover:text-heading"
              >
                kkshanthosh@gmail.com
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
