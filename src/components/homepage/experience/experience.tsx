import { Container, SectionBg, Timeline } from '@/components';
import experienceData from '@/data/experience.json';

const Experience = () => {
  return (
    <section className="relative border-t border-[#25213b]" id="experience">
      <div className="flex -translate-y-px justify-center">
        <div className="w-3/4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
      </div>
      <SectionBg />
      <Container className="py-16">
        <h2 className="text-center text-xl">Experience</h2>

        <div className="mt-6">
          {experienceData.map((job, index) => (
            <Timeline
              key={`${job.company}-${index}`}
              jobTitle={job.jobTitle}
              company={job.company}
              industry={job.industry}
              location={job.location}
              period={job.period}
              jobType={job.jobType}
              details={job.details}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
