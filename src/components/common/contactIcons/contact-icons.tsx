'use client';

import { Link } from '@nextui-org/react';
import { sendGTMEvent } from '@next/third-parties/google';

import contacts from '@/data/contacts.json';
import { DynamicIcon } from '@/components';
import { cn } from '@/lib/utils';

type Props = {
  align?: 'start' | 'center' | 'end';
  className?: string;
};

const ContactIcons = ({ align = 'center', className }: Props) => {
  const renderContactIcons = contacts.map((contact) => (
    <div key={contact.name} className="mx-1 cursor-pointer">
      <Link
        href={contact.link}
        target="_blank"
        rel="noopener noreferrer"
        onPress={() =>
          sendGTMEvent({
            event: 'Contact-Icon-Clicked',
            value: contact.name,
          })
        }
        className="size-6 transition-all duration-300 hover:scale-125"
        aria-label={`link to ${contact.name}`}
      >
        <DynamicIcon
          name={contact.iconName}
          iconProps={{
            size: 24,
            color: 'hsl(var(--accent))',
            title: contact.iconTitle,
          }}
          aria-hidden={true}
        />
      </Link>
    </div>
  ));

  return (
    <div className={cn(`flex items-center justify-${align} gap-2`, className)}>
      {renderContactIcons}
    </div>
  );
};

export default ContactIcons;
