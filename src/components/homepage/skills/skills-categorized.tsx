import { Skill } from '@/types';

type CategoryMap = {
  [category: string]: Skill[];
};

type Props = {
  data: Skill[];
};

const SkillsCategorized = ({ data }: Props) => {
  const categoryMap: CategoryMap = {};

  data.forEach((skill) => {
    skill.categories.forEach((category) => {
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }

      categoryMap[category].push(skill);
    });
  });

  const renderCategory = Object.keys(categoryMap).map((category) => (
    <div
      key={category}
      className="block-glass1 rounded-xl border-1 px-3 py-2 shadow-md dark:border-[#2f4250]"
    >
      <h3 className="mb-3 text-center font-semibold dark:text-white">
        {category}
      </h3>
      <ul className="list-inside list-disc">
        {categoryMap[category].map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className="my-8 grid gap-1 transition-all auto-fill-[250px] dark:text-heading">
      {renderCategory}
    </div>
  );
};

export default SkillsCategorized;
