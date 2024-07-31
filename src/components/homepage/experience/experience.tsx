import { Container, Timeline } from '@/components';

const Experience = () => {
  return (
    <section className="py-16" id="experience">
      <Container>
        <h2 className="text-center text-xl">Experience</h2>

        <div className="-my-6">
          <Timeline
            title="Title"
            subTitle="SubTitle"
            dates="Dates"
            content="Content"
          />
        </div>
      </Container>
    </section>
  );
};

export default Experience;
