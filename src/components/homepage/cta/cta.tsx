import { Button, Link } from '@nextui-org/react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
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
          <Button
            as={Link}
            href="mailto:kkshanthosh@gmail.com"
            className="flex uppercase"
            aria-label="email me"
          >
            <MdOutlineAlternateEmail className="size-7" />
            <div>
              Email <span className="hidden sm:inline-block">me</span>
            </div>
          </Button>
          <Button
            as={Link}
            href="/files/ShanthoshK_Frontend_Dev_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="ShanthoshK_Frontend_Dev_cv.pdf"
            aria-label="download cv"
            className="flex uppercase"
          >
            <PiFilePdfBold className="size-8" />
            <div className="hidden sm:inline-block">Download cv</div>
          </Button>
          <Button
            as={Link}
            href="/files/ShanthoshK_Frontend_Dev_cv.docx"
            target="_blank"
            rel="noopener noreferrer"
            download="ShanthoshK_Frontend_Dev_cv.docx"
            aria-label="download cv"
            className="flex uppercase"
          >
            <TbFileTypeDocx className="size-8" />
            <div className="hidden sm:inline-block">Download cv</div>
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default Cta;
