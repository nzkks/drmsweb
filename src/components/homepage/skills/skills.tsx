import Marquee from 'react-fast-marquee';

import { Container } from '@/components';
import skillsData from '@/data/skills.json';
import groupObjArrayByProperty from '@/lib/groupObjArrayByProperty';

const Skills = () => {
  const groupedSkillData = groupObjArrayByProperty(
    skillsData,
    (x) => x.category,
  );

  const marquees = Object.keys(groupedSkillData).map((category, index) => (
    <Marquee
      key={category}
      direction={index % 2 === 0 ? 'left' : 'right'}
      speed={20}
      autoFill
      className="my-8"
    >
      {groupedSkillData[category].map((skill) => {
        return (
          <div key={skill.name} className="mx-4">
            {skill.highlight ? (
              <span className="font-bold text-accent">{skill.name}</span>
            ) : (
              <span>{skill.name}</span>
            )}
          </div>
        );
      })}
    </Marquee>
  ));

  return (
    <section className="py-16" id="skills">
      <h2 className="text-center text-xl">
        I turn these skills into beautiful web projects
      </h2>
      <Container>{marquees}</Container>
    </section>
  );
};

export default Skills;
