'use client';

import { MdOutlineAlternateEmail } from 'react-icons/md';
import { PiFilePdfBold } from 'react-icons/pi';
import { TbFileTypeDocx } from 'react-icons/tb';

import { Container, ShinyBtn } from '@/components';

const Cta = () => {
  return (
    <section className="py-16" id="cta">
      <Container>
        <div className="mt-10 text-center">
          <h3 className="text-xl">Download my CV and contact me</h3>
          <div className="mx-auto mt-10 grid max-w-xl items-center justify-center gap-4 auto-fit-[170px]">
            <ShinyBtn
              href="/files/ShanthoshK_Frontend_Dev_cv.pdf"
              target="_blank"
              isExternal={true}
              downloadFileName="ShanthoshK_Frontend_Dev_cv.pdf"
              aria-label="download cv"
              width={180}
              sectionForGA="CTA"
              labelForGA="Download PDF cv"
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
              sectionForGA="CTA"
              labelForGA="Download DOCX cv"
            >
              <TbFileTypeDocx className="size-8" />
              <div className="ml-2 inline-block">Download cv</div>
            </ShinyBtn>
            <ShinyBtn
              href="mailto:kkshanthosh@gmail.com"
              ariaLabel="email me"
              width={180}
              sectionForGA="CTA"
              labelForGA="Email me"
            >
              <MdOutlineAlternateEmail className="size-7" />
              <div className="ml-2 inline-block">Email me</div>
            </ShinyBtn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
