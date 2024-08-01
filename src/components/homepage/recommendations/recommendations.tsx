import { Container, TestimonialBlock } from '@/components';
import recommendationsData from '@/data/recommendations.json';

const Recommendations = () => {
  return (
    <section className="py-16" id="recommendations">
      <Container>
        <h2 className="text-center text-xl">LinkedIn Recommendations</h2>

        {recommendationsData.map((item) => (
          <TestimonialBlock
            key={item.name}
            imageFileName={item.imageFileName}
            name={item.name}
            about={item.about}
            content={item.content}
          />
        ))}
      </Container>
    </section>
  );
};

export default Recommendations;
