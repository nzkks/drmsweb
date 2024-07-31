type Props = {
  title: string;
  subTitle: string;
  dates: string;
  content: string;
};

const Timeline = ({ title, subTitle, dates, content }: Props) => {
  return (
    <div className="group relative py-6 pl-8 sm:pl-32">
      <div className="mb-1 font-medium text-secondary sm:mb-0">{subTitle}</div>
      <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-secondary group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
        <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
          {dates}
        </time>
        <div className="font-bold">{title}</div>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Timeline;
