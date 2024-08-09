type Props = {
  jobTitle: string;
  company?: string;
  industry?: string;
  location: string;
  period: string;
  jobType?: string;
  details?: string;
};

const Timeline = ({
  jobTitle,
  company,
  industry,
  location,
  period,
  jobType,
  details,
}: Props) => {
  const compLocation = company ? `${company} - ${location}` : location;

  return (
    <div className="group relative py-6 pl-8 sm:pl-48">
      <div className="mb-1 font-medium text-primary sm:mb-0">
        {compLocation}
      </div>
      <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:size-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-secondary group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[10.5rem] sm:after:left-0 sm:after:ml-[10.5rem]">
        <div className="relative left-0 mb-3 box-border inline-flex h-7 min-w-[150px] max-w-fit translate-y-0.5 items-center justify-between whitespace-nowrap rounded-full px-1 text-xs uppercase text-default-foreground sm:absolute sm:mb-0">
          <span className="flex-1 px-2 text-left font-normal text-inherit sm:text-right">
            {period}
          </span>
        </div>
        <div className="font-bold">{jobTitle}</div>
      </div>
      {details ? <div>{details}</div> : <></>}
    </div>
  );
};

export default Timeline;
