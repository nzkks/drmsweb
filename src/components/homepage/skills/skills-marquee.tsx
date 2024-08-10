import Marquee from 'react-fast-marquee';

import groupObjArrayByProperty from '@/lib/groupObjArrayByProperty';

type Skills = {
  name: string;
  logo: string;
  level: number;
  categories: string[];
  rowId: string;
  highlight: boolean;
};

type Props = {
  data: Skills[];
};

const SkillsMarquee = ({ data }: Props) => {
  const skillRowsForMarquee = groupObjArrayByProperty(data, (x) => x.rowId);

  return Object.keys(skillRowsForMarquee).map((rowId, index) => (
    <Marquee
      key={rowId}
      direction={index % 2 === 0 ? 'left' : 'right'}
      speed={20}
      autoFill
      className="my-8"
    >
      {skillRowsForMarquee[rowId].map((skill) => {
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
};

export default SkillsMarquee;
