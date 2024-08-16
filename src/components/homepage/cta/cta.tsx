'use client';

import { Button, Link } from '@nextui-org/react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { PiFilePdfBold } from 'react-icons/pi';
import { TbFileTypeDocx } from 'react-icons/tb';

import { Container, ShinyBtn } from '@/components';
import { useWindowSize } from '@/hooks';

const Cta = () => {
  const { width } = useWindowSize();

  return (
    <section className="py-16" id="cta">
      <Container>
        <div className="mt-10 text-center">
          <h3 className="text-xl">
            Download my Curriculum Vitae document / Contact me now
          </h3>
          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-4">
            <ShinyBtn
              href="mailto:kkshanthosh@gmail.com"
              ariaLabel="email me"
              width={width > 640 ? 130 : 90}
            >
              <MdOutlineAlternateEmail className="size-7" />
              <div className="sm:ml-2">
                Email <span className="hidden sm:inline-block">me</span>
              </div>
            </ShinyBtn>
            <ShinyBtn
              href="/files/ShanthoshK_Frontend_Dev_cv.pdf"
              target="_blank"
              isExternal={true}
              downloadFileName="ShanthoshK_Frontend_Dev_cv.pdf"
              aria-label="download cv"
              isIconOnly={width < 640}
              width={width > 640 ? 160 : 50}
            >
              <PiFilePdfBold className="size-8" />
              <div className="hidden sm:inline-block">Download cv</div>
            </ShinyBtn>
            <ShinyBtn
              href="/files/ShanthoshK_Frontend_Dev_cv.docx"
              target="_blank"
              isExternal={true}
              downloadFileName="ShanthoshK_Frontend_Dev_cv.docx"
              aria-label="download cv"
              isIconOnly={width < 640}
              width={width > 640 ? 160 : 50}
            >
              <TbFileTypeDocx className="size-8" />
              <div className="hidden sm:inline-block">Download cv</div>
            </ShinyBtn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
