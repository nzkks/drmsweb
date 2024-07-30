import { CollapsibleWrapper, Container } from '@/components';

import aboutData from '@/data/about.json';

const About = () => {
  return (
    <section className="py-16" id="about">
      <Container>
        <h2 className="text-center text-xl">About me</h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aboutData.map((data) => (
            <CollapsibleWrapper
              key={data.title}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
