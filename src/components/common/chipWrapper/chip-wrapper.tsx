import { ReactNode } from 'react';
import { Chip } from '@nextui-org/react';

import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className: string;
};

const ChipWrapper = ({ children, className }: Props) => {
  return (
    <Chip color="default" variant="flat" className={cn('', className)}>
      {children}
    </Chip>
  );
};

export default ChipWrapper;
