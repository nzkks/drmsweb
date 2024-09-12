import { Timeline } from '@/components';
import experienceData from '@/data/experience.json';

const Experience = () => {
  const reversedArray = experienceData.toReversed();

  return (
    <>
      <h2 className="text-center text-xl">Experience</h2>

      <div className="grid-col-1 mt-6 grid lg:grid-cols-2">
        <div>
          {reversedArray.map((job, index) => (
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
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-24 items-end">
            <div>{/* todo: Sticky */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
