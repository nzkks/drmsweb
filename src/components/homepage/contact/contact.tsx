import { Container, SectionBg } from '@/components/common';

const Contact = () => {
  return (
    <section className="relative border-t border-[#25213b]" id="contact">
      <SectionBg />
      <Container className="py-16">
        <h2 className="text-center text-xl">Contact</h2>

        <div className="mx-auto mt-6">Form</div>
      </Container>
    </section>
  );
};

export default Contact;
