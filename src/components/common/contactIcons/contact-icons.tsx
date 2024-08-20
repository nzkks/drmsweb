import { Link } from '@nextui-org/react';

import contacts from '@/data/contacts.json';
import { DynamicIcon } from '@/components';

const ContactIcons = () => {
  const renderContactIcons = contacts.map((contact) => (
    <div key={contact.name} className="mx-1 cursor-pointer">
      <Link href={contact.link} target="_blank" rel="noopener noreferrer">
        <DynamicIcon
          name={contact.iconName}
          iconProps={{
            size: 24,
            color: 'hsl(var(--accent))',
            title: contact.iconTitle,
          }}
        />
      </Link>
    </div>
  ));

  return (
    <div className="flex items-center justify-center gap-2">
      {renderContactIcons}
    </div>
  );
};

export default ContactIcons;