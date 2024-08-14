import Link from 'next/link';
import { Button, Chip } from '@nextui-org/react';

import { Container } from '@/components';
import LetterFontWeightAnimator from './letter-font-weight-animator';

const Hero = () => {
  return (
    <section className="py-16">
      <Container className="text-center">
        <div className="text-md">
          <Chip color="default" variant="flat">
            React.js
          </Chip>{' '}
          <Chip color="default" variant="flat">
            Next.js
          </Chip>{' '}
          <Chip color="default" variant="flat">
            JavaScript
          </Chip>{' '}
          <Chip color="default" variant="flat">
            Typescript
          </Chip>
        </div>
        <h1 className="mt-6 text-3xl leading-tight">
          Hi, I am
          <br />
          <LetterFontWeightAnimator
            word="Shanthosh"
            className="hidden w-[290px] text-right sm:inline-block"
          />
          <span className="inline-block sm:hidden">Shanthosh</span>{' '}
          <span className="text-muted-foreground">Krishnakumar</span>,
          <br />
          <span className="bg-gradient-to-b from-background to-accent bg-clip-text font-bold text-transparent">
            Frontend Developer
          </span>
        </h1>
        <div className="mt-6">
          <Button
            as={Link}
            href="#cta"
            variant="flat"
            className="text-md h-12 w-36 bg-primary-900 font-bold uppercase text-primary-foreground"
          >
            Hire me
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
