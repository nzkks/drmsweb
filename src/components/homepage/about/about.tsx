import {
  CollapsibleWrapper,
  Container,
  DynamicIcon,
  SectionBg,
} from '@/components';

import aboutData from '@/data/about.json';

const About = () => {
  return (
    <section className="relative border-t border-[#25213b]" id="about">
      <div className="flex -translate-y-px justify-center">
        <div className="w-3/4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
      </div>
      <SectionBg />
      <Container className="py-16">
        <h2 className="text-center text-xl">About me</h2>

        <div className="group/about mt-10 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-y-8 xl:grid-cols-3">
          {aboutData.map((data) => (
            <div
              key={data.title}
              className="flex flex-col items-center gap-4 md:flex-row"
            >
              <div className="w-10 text-center">
                <DynamicIcon
                  name={data.iconName}
                  iconProps={{
                    size: 32,
                    color: 'hsl(var(--accent))',
                    title: data.title,
                  }}
                />
              </div>
              <div className="group transition-all lg:hover:!opacity-100 lg:group-hover/about:opacity-50">
                <CollapsibleWrapper title={data.title} content={data.content} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
