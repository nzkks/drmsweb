import Image from 'next/image';
import sectionImg from '../../../../public/images/bg-images/section.svg';

type Props = {
  top?: string;
};

const SectionBg = ({ top = '0px' }: Props) => {
  return (
    <Image
      src={sectionImg}
      alt="section background image"
      width={1572}
      height={795}
      className={`absolute top-[${top}] -z-10`}
      priority
    />
  );
};

export default SectionBg;
