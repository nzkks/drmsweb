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
import Marquee from 'react-fast-marquee';

import { Container } from '@/components';
import skillsData from '@/data/skills.json';
import groupObjArrayByProperty from '@/lib/groupObjArrayByProperty';

const menuItems = [
  {
    key: 'experience',
    label: 'Show experience level',
  },
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
        <Container>{marquees}</Container>
      ) : selectedMenuItem === 'experience' ? (
        <Container>
          <>Experience</>
        </Container>
      ) : (
        <Container>
          <>Categorized</>
        </Container>
      )}
    </section>
  );
};

export default Skills;
