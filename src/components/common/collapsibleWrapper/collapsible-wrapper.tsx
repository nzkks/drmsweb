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
        event: 'InfoViewed',
        section: 'About',
        name: title,
      });
    }
  }, [open, title]);

  return (
    <div className="mb-4">
      <Collapsible open={open} onOpenChange={setOpen} asChild>
        <>
          <CollapsibleTrigger>
            <div className="mb-2 flex items-center">
              <div className="IconButton">
                {open ? <BsX /> : <BsArrowsExpand />}
              </div>
              <div className="ml-3 font-bold">{title}</div>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
            {content}
          </CollapsibleContent>
        </>
      </Collapsible>
    </div>
  );
};

export default CollapsibleWrapper;
