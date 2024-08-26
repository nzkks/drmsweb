import { CollapsibleWrapper, Container, SectionBg } from '@/components';

import aboutData from '@/data/about.json';

const About = () => {
  return (
    <section className="relative border-t border-[#25213b]" id="about">
      <SectionBg />
      <Container className="py-16">
        <h2 className="text-center text-xl">About me</h2>

        <div className="group/about mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aboutData.map((data) => (
            <div
              key={data.title}
              className="group transition-all lg:hover:!opacity-100 lg:group-hover/about:opacity-50"
            >
              <CollapsibleWrapper title={data.title} content={data.content} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
