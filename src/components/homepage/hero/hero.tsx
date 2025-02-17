import { Chip } from '@nextui-org/react';

import { ContactIcons, Reveal, ShinyBtn } from '@/components';
import skillsData from '@/data/skills.json';
import LetterFontWeightAnimator from './letter-font-weight-animator';
import { TbFileTypePdf as PdfIcon } from 'react-icons/tb';
import { TbFileTypeDocx as WordIcon } from 'react-icons/tb';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <>
      <div className="text-md">{renderCoreSkills}</div>

      <div className="mt-6">
        <ContactIcons />
      </div>

      <h1 className="mt-6 flex w-full flex-col items-center justify-center text-5xl leading-tight">
        <Reveal>Hi! my name is</Reveal>
        <Reveal>
          <LetterFontWeightAnimator
            word="Shanthosh"
            className="hidden text-right sm:inline-block"
          />
          <span className="inline-block sm:hidden">Shanthosh</span>{' '}
          <span className="text-muted-foreground">Krishnakumar</span>.
        </Reveal>
        <Reveal>
          I am a{' '}
          <span className="bg-gradient-to-b from-background to-accent bg-clip-text font-bold text-transparent">
            Frontend Developer
          </span>
        </Reveal>
      </h1>
      <div className="mx-auto mt-10 max-w-lg">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <ShinyBtn
            href="/files/ShanthoshK_Frontend_Dev_cv.pdf"
            target="_blank"
            isExternal={true}
            downloadFileName="ShanthoshK_Frontend_Dev_cv.pdf"
            ariaLabel="download cv as a PDF document"
            buttonIdForGA="Hero-CV-PDF-Download-Link-Clicked"
            valueForGA="Download PDF cv"
          >
            <PdfIcon className="size-8" aria-hidden={true} />
            <div className="ml-2 inline-block">CV (PDF, 120KB)</div>
          </ShinyBtn>
          <ShinyBtn
            href="/files/ShanthoshK_Frontend_Dev_cv.docx"
            target="_blank"
            isExternal={true}
            downloadFileName="ShanthoshK_Frontend_Dev_cv.docx"
            ariaLabel="download cv as a word document in DOCX format"
            buttonIdForGA="Hero-CV-DOCX-Download-Link-Clicked"
            valueForGA="Download DOCX cv"
          >
            <WordIcon className="size-8" aria-hidden={true} />
            <div className="ml-2 inline-block">CV (DOCX, 31KB)</div>
          </ShinyBtn>
          <ShinyBtn
            href="#contact"
            ariaLabel="go to contact form section and email me"
            buttonIdForGA="Hero-Email-Link-Clicked"
            valueForGA="Email me"
          >
            <MdOutlineAlternateEmail className="size-7" aria-hidden={true} />
            <div className="ml-2 inline-block">Email me</div>
          </ShinyBtn>
        </div>
      </div>
    </>
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
