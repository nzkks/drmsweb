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
            className="group relative h-12 w-36 overflow-hidden rounded-xl bg-gray-800 px-8 py-4 text-foreground text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 hover:ring-2 hover:ring-gray-600 hover:ring-offset-2"
          >
            <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
            <span className="text-md relative font-bold uppercase">
              Hire me
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
