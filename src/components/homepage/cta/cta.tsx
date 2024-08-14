import { Button, Link } from '@nextui-org/react';
import { ImPhone } from 'react-icons/im';
import { PiFilePdfBold } from 'react-icons/pi';
import { TbFileTypeDocx } from 'react-icons/tb';

import { Container } from '@/components';

const Cta = () => (
  <section className="py-16" id="cta">
    <Container>
      <div className="mt-10 text-center">
        <h3 className="text-xl">
          Download my Curriculum Vitae document / Contact me now
        </h3>
        <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-4">
          <Button as={Link} href="#" className="flex">
            <ImPhone className="size-7" />
            <div className="hidden sm:inline-block">Contact Now</div>
          </Button>
          <Button as={Link} href="#" className="flex">
            <PiFilePdfBold className="size-8" />
            <div className="hidden sm:inline-block">Download cv</div>
          </Button>
          <Button as={Link} href="#" className="flex">
            <TbFileTypeDocx className="size-8" />
            <div className="hidden sm:inline-block">Download cv</div>
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default Cta;
