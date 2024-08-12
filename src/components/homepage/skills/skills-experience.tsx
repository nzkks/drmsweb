import { Skill } from '@/types';

type Props = {
  data: Skill[];
};

const SkillsExperience = ({ data }: Props) => {
  const highlightedSkills = data.filter((skill) => skill.highlight);

  return (
    <div>
      {highlightedSkills.map((skill) => {
        return (
          <div key={skill.name} className="my-3">
            <h3 className="mb-3 text-center">{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsExperience;
