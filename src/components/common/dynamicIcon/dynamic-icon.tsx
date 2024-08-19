import { FC } from 'react';
import { IconBaseProps, IconType } from 'react-icons/lib';

import Icons from '@/components/imageComponents/icons';

interface Props {
  name: string;
  iconProps?: IconBaseProps;
}

const DynamicIcon: FC<Props> = ({ name, iconProps }) => {
  const IconComponent = Icons[name as keyof typeof Icons] as IconType;

  if (!IconComponent) {
    return <div>icon {name} not found</div>;
  }

  return <IconComponent {...iconProps} />;
};

export default DynamicIcon;
