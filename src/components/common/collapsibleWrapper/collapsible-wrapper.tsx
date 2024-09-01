'use client';

import { useEffect, useState } from 'react';
import { BsArrowsExpand, BsX } from 'react-icons/bs';
import { sendGTMEvent } from '@next/third-parties/google';

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

  useEffect(() => {
    if (open) {
      sendGTMEvent({
        event: 'About-Info-Viewed',
        value: title,
      });
    }
  }, [open, title]);

  return (
    <Collapsible open={open} onOpenChange={setOpen} asChild>
      <>
        <CollapsibleTrigger>
          <div className="mb-2 flex items-center">
            <div className="IconButton flex size-6 items-center justify-center">
              {open ? (
                <BsX size={24} aria-hidden={true} />
              ) : (
                <BsArrowsExpand size={16} aria-hidden={true} />
              )}
            </div>
            <div className="ml-3 font-bold transition-all group-hover/inner:text-accent">
              {title}
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
          {content}
        </CollapsibleContent>
      </>
    </Collapsible>
  );
};

export default CollapsibleWrapper;
