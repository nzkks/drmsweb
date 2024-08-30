import { Chip } from '@nextui-org/react';

import { ContactIcons, Section, ShinyBtn } from '@/components';
import skillsData from '@/data/skills.json';
import LetterFontWeightAnimator from './letter-font-weight-animator';
import { PiFilePdfBold } from 'react-icons/pi';
import { TbFileTypeDocx } from 'react-icons/tb';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <Section containerProps={{ containerClass: 'text-center' }}>
      <div className="text-md">{renderCoreSkills}</div>

      <div className="mt-6">
        <ContactIcons />
      </div>

      <h1 className="mt-6 text-5xl leading-tight">
        Hi! my name is
        <br />
        <LetterFontWeightAnimator
          word="Shanthosh"
          className="hidden text-right sm:inline-block"
        />
        <span className="inline-block sm:hidden">Shanthosh</span>{' '}
        <span className="text-muted-foreground">Krishnakumar</span>.
        <br />I am a{' '}
        <span className="bg-gradient-to-b from-background to-accent bg-clip-text font-bold text-transparent">
          Frontend Developer
        </span>
      </h1>
      <div className="mt-10 text-center">
        <div className="mx-auto mt-10 grid max-w-xl items-center justify-center gap-4 auto-fit-[170px]">
          <ShinyBtn
            href="/files/ShanthoshK_Frontend_Dev_cv.pdf"
            target="_blank"
            isExternal={true}
            downloadFileName="ShanthoshK_Frontend_Dev_cv.pdf"
            aria-label="download cv"
            width={180}
            buttonIdForGA="Hero-CV-PDF-Download-Link-Clicked"
            valueForGA="Download PDF cv"
          >
            <PiFilePdfBold className="size-8" />
            <div className="ml-2 inline-block">Download cv</div>
          </ShinyBtn>
          <ShinyBtn
            href="/files/ShanthoshK_Frontend_Dev_cv.docx"
            target="_blank"
            isExternal={true}
            downloadFileName="ShanthoshK_Frontend_Dev_cv.docx"
            aria-label="download cv"
            width={180}
            buttonIdForGA="Hero-CV-DOCX-Download-Link-Clicked"
            valueForGA="Download DOCX cv"
          >
            <TbFileTypeDocx className="size-8" />
            <div className="ml-2 inline-block">Download cv</div>
          </ShinyBtn>
          <ShinyBtn
            href="#contact"
            ariaLabel="email me"
            width={180}
            buttonIdForGA="Hero-Email-Link-Clicked"
            valueForGA="Email me"
          >
            <MdOutlineAlternateEmail className="size-7" />
            <div className="ml-2 inline-block">Email me</div>
          </ShinyBtn>
        </div>
      </div>
    </Section>
  );
};

const renderCoreSkills = skillsData.map((skill) => {
  if (skill.isCoreSkill) {
    return (
      <Chip key={skill.name} className="m-1">
        {skill.name}
      </Chip>
    );
  }
});

export default Hero;
