import { CollapsibleWrapper, DynamicIcon } from '@/components';

import aboutData from '@/data/about.json';

const About = () => {
  return (
    <>
      <h2 className="text-center text-xl">About me</h2>

      <div className="group/about mt-10 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-y-8 xl:grid-cols-3">
        {aboutData.map((data) => (
          <div
            key={data.title}
            className="group/inner shadow-bshadow1 flex flex-col items-center gap-4 rounded-lg p-4 transition-all md:flex-row md:items-start lg:hover:!opacity-100 lg:group-hover/about:opacity-50"
          >
            <div className="w-10">
              <DynamicIcon
                name={data.iconName}
                iconProps={{
                  size: 32,
                  color: 'hsl(var(--accent))',
                  title: data.title,
                }}
              />
            </div>
            <div>
              <CollapsibleWrapper title={data.title} content={data.content} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
