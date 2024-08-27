import { Chip, Skeleton } from '@nextui-org/react';
import Marquee from 'react-fast-marquee';

import groupObjArrayByProperty from '@/lib/groupObjArrayByProperty';
import { Skill } from '@/types';

type Props = {
  data: Skill[];
};

const SkillsMarquee = ({ data }: Props) => {
  const skillRowsForMarquee = groupObjArrayByProperty(data, (x) => x.rowId);

  return (
    <Skeleton isLoaded={!!skillRowsForMarquee} className="h-48 w-full">
      {Object.keys(skillRowsForMarquee).map((rowId, index) => (
        <Marquee
          key={rowId}
          direction={index % 2 === 0 ? 'left' : 'right'}
          speed={20}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          autoFill
          className="my-6"
        >
          {skillRowsForMarquee[rowId].map((skill) => {
            return (
              <Chip
                key={skill.name}
                className="block-glass1 shadow-3xl mx-2 border-1 transition-all hover:scale-110 dark:border-[#2f4250] dark:hover:border-[#2dd4bf]"
              >
                {skill.isHighlight ? (
                  <span className="font-bold text-accent">{skill.name}</span>
                ) : (
                  <span>{skill.name}</span>
                )}
              </Chip>
            );
          })}
        </Marquee>
      ))}
    </Skeleton>
  );
};

export default SkillsMarquee;
