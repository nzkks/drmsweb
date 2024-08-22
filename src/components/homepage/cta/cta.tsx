'use client';

import { Skeleton } from '@nextui-org/react';
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
          <h3 className="text-xl">Download my CV and contact me</h3>
          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-4">
            <Skeleton isLoaded={width > 0} className="w-12 rounded-lg md:w-40">
              <ShinyBtn
                href="/files/ShanthoshK_Frontend_Dev_cv.pdf"
                target="_blank"
                isExternal={true}
                downloadFileName="ShanthoshK_Frontend_Dev_cv.pdf"
                aria-label="download cv"
                isIconOnly={width < 640}
                width={width > 640 ? 160 : 50}
                sectionForGA="CTA"
                labelForGA="Download PDF cv"
              >
                <PiFilePdfBold className="size-8" />
                <div className="hidden sm:inline-block">Download cv</div>
              </ShinyBtn>
            </Skeleton>
            <Skeleton isLoaded={width > 0} className="w-12 rounded-lg md:w-40">
              <ShinyBtn
                href="/files/ShanthoshK_Frontend_Dev_cv.docx"
                target="_blank"
                isExternal={true}
                downloadFileName="ShanthoshK_Frontend_Dev_cv.docx"
                aria-label="download cv"
                isIconOnly={width < 640}
                width={width > 640 ? 160 : 50}
                sectionForGA="CTA"
                labelForGA="Download DOCX cv"
              >
                <TbFileTypeDocx className="size-8" />
                <div className="hidden sm:inline-block">Download cv</div>
              </ShinyBtn>
            </Skeleton>
            <Skeleton isLoaded={width > 0} className="w-20 rounded-lg md:w-32">
              <ShinyBtn
                href="mailto:kkshanthosh@gmail.com"
                ariaLabel="email me"
                width={width > 640 ? 130 : 90}
                sectionForGA="CTA"
                labelForGA="Email me"
              >
                <MdOutlineAlternateEmail className="size-7" />
                <div className="sm:ml-2">
                  Email <span className="hidden sm:inline-block">me</span>
                </div>
              </ShinyBtn>
            </Skeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
