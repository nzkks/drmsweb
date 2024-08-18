import { ChipWrapper, Container, ShinyBtn } from '@/components';
import skillsData from '@/data/skills.json';
import LetterFontWeightAnimator from './letter-font-weight-animator';

const Hero = () => {
  return (
    <section className="py-16">
      <Container className="text-center">
        <div className="text-md">{renderCoreSkills}</div>
        <h1 className="mt-6 text-5xl leading-tight">
          Hi, I am
          <br />
          <LetterFontWeightAnimator
            word="Shanthosh"
            className="hidden text-right sm:inline-block"
          />
          <span className="inline-block sm:hidden">Shanthosh</span>{' '}
          <span className="text-muted-foreground">Krishnakumar</span>,
          <br />
          <span className="bg-gradient-to-b from-background to-accent bg-clip-text font-bold text-transparent">
            Frontend Developer
          </span>
        </h1>
        <div className="mt-6 text-center">
          <ShinyBtn href="#cta" width={144} className="mx-auto">
            Hire me
          </ShinyBtn>
        </div>
      </Container>
    </section>
  );
};

const renderCoreSkills = skillsData.map((skill) => {
  if (skill.isCoreSkill) {
    return (
      <ChipWrapper key={skill.name} className="m-1">
        {skill.name}
      </ChipWrapper>
    );
  }
});

export default Hero;
