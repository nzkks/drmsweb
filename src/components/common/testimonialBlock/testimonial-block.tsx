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
      <figure className="flex flex-col items-center justify-center md:flex-row md:items-start">
        <div className="relative block">
          <Image
            alt={name}
            src={`/images/testimonials/${imageFileName}`}
            width="200"
            height="200"
            className="mx-auto h-40 w-40 rounded-full object-cover grayscale group-hover:grayscale-0"
          />
        </div>
        <figcaption className="mt-5 w-full md:mt-0 md:w-2/3">
          <p className="m-auto w-full text-left md:w-2/3">
            <span className="font-bold">“</span>
            {content}
            <span className="font-bold">”</span>
          </p>
          <div className="mt-8 flex items-center justify-center">
            <span className="mr-2 font-semibold">{name}</span>
            <span className="font-light">/</span>
            <span className="ml-2">{about}</span>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonialBlock;
