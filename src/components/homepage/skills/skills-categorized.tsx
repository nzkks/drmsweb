import { motion } from 'framer-motion';

import { usePointerGlow } from '@/hooks';
import { Skill } from '@/types';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

type CategoryMap = {
  [category: string]: Skill[];
};

type Props = {
  data: Skill[];
};

const SkillsCategorized = ({ data }: Props) => {
  const [status] = usePointerGlow();
  const categoryMap: CategoryMap = {};

  data.forEach((skill) => {
    skill.categories.forEach((category) => {
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }

      categoryMap[category].push(skill);
    });
  });

  const renderCategory = Object.keys(categoryMap).map((category, index) => (
    <motion.div
      key={index}
      className="block-glass1 rounded-xl border-1 p-2 shadow-md dark:border-[#2f4250]"
      data-glow
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      <h3 className="block-glass1 mb-3 rounded-lg p-1 text-center font-semibold dark:text-white">
        {category}
      </h3>
      <ul className="list-inside list-disc">
        {categoryMap[category].map((skill) => (
          <li key={skill.name} className="transition-all hover:text-accent">
            {skill.name}
          </li>
        ))}
      </ul>
    </motion.div>
  ));

  return (
    <div className="my-8 grid gap-3 transition-all auto-fill-[250px] dark:text-heading">
      {renderCategory}
    </div>
  );
};

export default SkillsCategorized;
