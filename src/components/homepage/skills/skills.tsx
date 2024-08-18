'use client';

import { useState } from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { DotsVerticalIcon } from '@radix-ui/react-icons';

import { Container } from '@/components';
import skillsData from '@/data/skills.json';
import SkillsMarquee from './skills-marquee';
import SkillsCategorized from './skills-categorized';
// import SkillsExperience from './skills-experience';

const menuItems = [
  // {
  //   key: 'experience',
  //   label: 'Show experience level',
  // },
  {
    key: 'category',
    label: 'Show categorized',
  },
  {
    key: 'animation',
    label: 'Show scroll animation',
  },
];

const Skills = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('animation');

  return (
    <section className="section-gradient-bg1 py-16" id="skills">
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-center text-xl">
            I turn these skills into beautiful web projects
          </h2>
        </div>
        <div className="ml-2 w-12">
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly variant="flat" className="size-8">
                <DotsVerticalIcon />
              </Button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Static Actions">
              {menuItems.map((item) => (
                <DropdownItem
                  key={item.key}
                  onPress={() => setSelectedMenuItem(item.key)}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      {selectedMenuItem === 'animation' ? (
        <Container>
          <SkillsMarquee data={skillsData} />
        </Container>
      ) : (
        // currently I am convinced that specifying experience in rating/level is not useful after internet researching.

        // ) : selectedMenuItem === 'experience' ? (
        //   <Container>
        //     <SkillsExperience data={skillsData} />
        //   </Container>
        <Container>
          <SkillsCategorized data={skillsData} />
        </Container>
      )}
    </section>
  );
};

export default Skills;
