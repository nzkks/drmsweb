import { ReactNode } from 'react';

import SectionBg from '../sectionBg';
import Container from '../container';
import { cn } from '@/lib/utils';

type Props = {
  id?: string;
  className?: string;
  containerProps?: { containerClass?: string };
  showSectionBg?: boolean;
  children: ReactNode;
};

const Section = ({
  id = '',
  className,
  containerProps = {},
  showSectionBg = true,
  children,
}: Props) => {
  const { containerClass } = containerProps;

  return (
    <section
      id={id}
      aria-label={`${id} section`}
      className={cn('relative border-t border-[#25213b]', className)}
    >
      {showSectionBg && <SectionBg />}
      <div className="flex justify-center">
        <div className="w-3/4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
      </div>
      <Container className={cn('py-16', containerClass)}>{children}</Container>
    </section>
  );
};

export default Section;
