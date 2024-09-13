'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { sendGTMEvent } from '@next/third-parties/google';
import { motion } from 'framer-motion';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { usePointerGlow } from '@/hooks';

const CardWithMotion = motion(Card);

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

type Props = {
  index: number;
  name: string;
  providerLogoFilename: string;
  providerLogoFilenameDarkMode?: string;
  providerName: string;
  certificateImageFileName: string;
  period: string;
  link: string;
};

const CertificationBlock = ({
  index,
  name,
  providerLogoFilename,
  providerLogoFilenameDarkMode,
  providerName,
  certificateImageFileName,
  period,
  link,
}: Props) => {
  const [status] = usePointerGlow();

  return (
    <CardWithMotion
      key={index}
      className="group flex flex-col"
      data-glow
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="flex h-full flex-col rounded-xl border shadow-md dark:border-[#11203b]">
        <CardHeader className="p-3">
          <CardTitle className="text-md">{name}</CardTitle>
          <CardDescription className="text-foreground">
            {period}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex grow p-3">
          <Link
            href={link}
            target="_blank"
            className="block-glass-accent absolute left-1/2 top-1/2 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg group-hover:flex"
            onClick={() =>
              sendGTMEvent({
                event: 'Certification-Link-Clicked',
                value: name,
              })
            }
            aria-label={`Check this ${name} certificate from the ${providerName} website`}
          >
            <FaExternalLinkAlt aria-hidden={true} />
          </Link>
        </CardContent>
        <CardFooter className="p-3">
          <div className="relative h-6 w-full">
            {providerLogoFilenameDarkMode ? (
              <>
                <div className="absolute hidden size-full dark:block">
                  <Image
                    src={`/images/certifications/${providerLogoFilenameDarkMode}`}
                    fill
                    sizes={'(max-width: 768px) 100vw, 768px'}
                    style={{
                      objectFit: 'contain',
                    }}
                    alt={providerName}
                  />
                </div>
                <div className="absolute size-full dark:hidden">
                  <Image
                    src={`/images/certifications/${providerLogoFilename}`}
                    fill
                    sizes={'(max-width: 768px) 100vw, 768px'}
                    style={{
                      objectFit: 'contain',
                    }}
                    alt={providerName}
                  />
                </div>
              </>
            ) : (
              <Image
                src={`/images/certifications/${providerLogoFilename}`}
                fill
                sizes={'(max-width: 768px) 100vw, 768px'}
                style={{
                  objectFit: 'contain',
                }}
                alt={providerName}
              />
            )}
          </div>
        </CardFooter>
      </div>
    </CardWithMotion>
  );
};

export default CertificationBlock;
