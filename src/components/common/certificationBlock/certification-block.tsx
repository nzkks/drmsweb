import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  name: string;
  providerLogoFilename: string;
  providerLogoFilenameDarkMode?: string;
  providerName: string;
  certificateImageFileName: string;
  period: string;
  link: string;
};

const CertificationBlock = ({
  name,
  providerLogoFilename,
  providerLogoFilenameDarkMode,
  providerName,
  certificateImageFileName,
  period,
  link,
}: Props) => {
  return (
    <Card
      key={`${name}-${period}`}
      className="block-glass1 group flex flex-col border-border transition-all dark:border-[#5b769d] lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="flex h-full flex-col">
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
          >
            <ExternalLinkIcon />
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
                style={{
                  objectFit: 'contain',
                }}
                alt={providerName}
              />
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CertificationBlock;
