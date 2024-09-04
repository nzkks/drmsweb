type Props = {
  title: string;
  content: string;
};

const CollapsibleWrapper = ({ title, content }: Props) => {
  return (
    <>
      <div className="mb-2 flex items-center">
        <div className="font-bold transition-all group-hover/inner:text-accent">
          {title}
        </div>
      </div>
      <div>{content}</div>
    </>
  );
};

export default CollapsibleWrapper;
