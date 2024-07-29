import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
  children: ReactNode;
};

const Container = ({ className, children }: Props) => {
  return (
    <div className={clsx('container px-4 md:px-8', className ? className : '')}>
      {children}
    </div>
  );
};

export default Container;
