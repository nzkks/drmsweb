import Marquee from 'react-fast-marquee';

import groupObjArrayByProperty from '@/lib/groupObjArrayByProperty';
import { Skill } from '@/types';

type Props = {
  data: Skill[];
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
          <div
            key={skill.name}
            className="block-glass1 mx-4 rounded-xl border-1 px-3 py-2 shadow dark:border-[#2f4250]"
          >
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
