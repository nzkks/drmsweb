import Image from 'next/image';

type Props = {
  imageFileName: string;
  name: string;
  about: string;
  content: string;
};

const TestimonialBlock = ({ imageFileName, name, about, content }: Props) => {
  return (
    <div className="group mx-auto mt-6 w-full p-2 sm:p-4 md:p-8">
      <figure className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-[200px_1fr] md:items-start">
        <div className="relative block md:w-[200px]">
          <Image
            alt={name}
            src={`/images/testimonials/${imageFileName}`}
            width="200"
            height="200"
            className="mx-auto h-40 w-40 rounded-full object-cover grayscale group-hover:grayscale-0"
          />
        </div>
        <figcaption className="mt-5 md:mt-0">
          <div className="m-auto text-left">
            <span className="font-bold">“</span>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <span className="font-bold">”</span>
          </div>
          <div className="mt-8">
            <span className="flex flex-col md:inline-flex md:flex-row">
              <span className="font-semibold md:mr-2">{name}</span>
              <span className="hidden font-light md:inline">/</span>
              <span className="md:ml-2">{about}</span>
            </span>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonialBlock;
