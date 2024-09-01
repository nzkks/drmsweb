import { motion } from 'framer-motion';

import { useWindowSize } from '@/hooks';

const Cursor = ({
  position,
}: {
  position: { width: number; left: number; opacity: number };
}) => {
  const { width } = useWindowSize();

  return (
    <motion.li
      animate={width > 768 ? position : {}}
      className="absolute z-0 h-10 rounded-md bg-accent"
    />
  );
};

export default Cursor;
