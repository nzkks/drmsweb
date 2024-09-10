'use client';

import { useState } from 'react';
import { Switch } from '@nextui-org/react';
import { sendGTMEvent } from '@next/third-parties/google';

import { Container } from '@/components';
import skillsData from '@/data/skills.json';
import SkillsMarquee from './skills-marquee';
import SkillsCategorized from './skills-categorized';

const Skills = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('animation');

  const handleMenuItemClick = (label: string) => {
    sendGTMEvent({
      event: 'Skills-View-Item-Button-Clicked',
      value: label,
    });
    setSelectedMenuItem(label === 'animation' ? 'category' : 'animation');
  };

  return (
    <>
      <div className="flex -translate-y-px justify-center">
        <div className="w-3/4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>
      </div>
      <div className="py-16">
        <Container>
          <h2 className="text-center text-xl">
            <span>I turn these skills into beautiful web projects</span> |{' '}
            <Switch
              defaultSelected={false}
              onValueChange={() => handleMenuItemClick(selectedMenuItem)}
              size="sm"
            >
              <span className="text-tiny">
                {selectedMenuItem === 'animation'
                  ? 'Show categorized'
                  : 'Show scroll animation'}
              </span>
            </Switch>
          </h2>

          {selectedMenuItem === 'animation' ? (
            <SkillsMarquee data={skillsData} />
          ) : (
            <SkillsCategorized data={skillsData} />
          )}
        </Container>
      </div>
    </>
  );
};

export default Skills;
