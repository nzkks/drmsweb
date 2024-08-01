import { Container, TestimonialBlock } from '@/components';

const Recommendations = () => {
  return (
    <section className="py-16" id="recommendations">
      <Container>
        <h2 className="text-center text-xl">Recommendations</h2>

        <TestimonialBlock
          imageFileName="testimonials.png"
          name="Testimonials"
          about="Testimonials"
          content="Testimonials"
        />
      </Container>
    </section>
  );
};

export default Recommendations;
