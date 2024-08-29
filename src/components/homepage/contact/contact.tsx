import { Container, SectionBg } from '@/components/common';
import ContactForm from './contact-form';

const Contact = () => {
  return (
    <section className="relative border-t border-[#25213b]" id="contact">
      <SectionBg />
      <Container className="py-16">
        <h2 className="text-center text-xl">Contact</h2>

        <div className="mt-6">
          <div className="mx-auto max-w-xl">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
