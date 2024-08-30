import { Section, Timeline } from '@/components';
import experienceData from '@/data/experience.json';

const Experience = () => {
  return (
    <Section id="experience">
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
    </Section>
  );
};

export default Experience;
