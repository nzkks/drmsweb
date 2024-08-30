import { ReactNode } from 'react';

import SectionBg from '../sectionBg';
import Container from '../container';
import { cn } from '@/lib/utils';

type Props = {
  id?: string;
  className?: string;
  containerProps?: { containerClass?: string };
  children: ReactNode;
};

const Section = ({ id = '', className, containerProps, children }: Props) => {
  const { containerClass } = containerProps || {};

  return (
    <section
      className={cn('relative border-t border-[#25213b]', className)}
      id={id}
      aria-labelledby={id}
    >
      <div className="flex -translate-y-px justify-center">
        <div className="w-3/4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
      </div>
      <SectionBg />
      <Container className={cn('py-16', containerClass)}>{children}</Container>
    </section>
  );
};

export default Section;
