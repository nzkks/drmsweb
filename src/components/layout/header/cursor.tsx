import { motion } from 'framer-motion';

const Cursor = ({
  position,
}: {
  position: { width: number; left: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-10 rounded-md bg-accent"
    />
  );
};

export default Cursor;
