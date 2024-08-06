'use client';

import { useState } from 'react';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

type Props = {
  title: string;
  content: string;
};

const CollapsibleWrapper = ({ title, content }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <Collapsible open={open} onOpenChange={setOpen} asChild>
        <>
          <div className="mb-2 flex items-center">
            <CollapsibleTrigger asChild>
              <button className="IconButton">
                {open ? <Cross2Icon /> : <RowSpacingIcon />}
              </button>
            </CollapsibleTrigger>
            <div className="ml-3 font-bold">{title}</div>
          </div>
          <CollapsibleContent className="data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down overflow-hidden">
            {content}
          </CollapsibleContent>
        </>
      </Collapsible>
    </div>
  );
};

export default CollapsibleWrapper;
