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
    <div key={category} className="my-3">
      <h3 className="mb-3 text-center">{category}</h3>
      <ul className="list-inside list-disc">
        {categoryMap[category].map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className="my-8 grid gap-4 transition-all auto-fill-[250px]">
      {renderCategory}
    </div>
  );
};

export default SkillsCategorized;
