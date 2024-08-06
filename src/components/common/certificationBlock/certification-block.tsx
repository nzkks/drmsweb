import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

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
    <div
      key={`${name}-${period}`}
      className="group relative bg-[rgba(222,222,222,0.21)] transition-all before:block before:pb-[100%] before:content-[''] hover:bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(77,77,77,0.09)] dark:hover:bg-[rgba(111,111,111,0.1)]"
    >
      <Link
        href={link}
        target="_blank"
        className="absolute left-1/2 top-1/2 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-[rgba(204,204,204,0.53)] group-hover:flex"
      >
        <ExternalLinkIcon />
      </Link>
      <div className="absolute inset-0 mx-auto size-full p-4">
        <div className="text-center font-bold">{name}</div>
        <div className="text-center text-sm text-slate-500">{period}</div>

        <div className="absolute bottom-[10px] right-0 h-6 w-[200px]">
          {providerLogoFilenameDarkMode ? (
            <>
              {
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
              }
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
      </div>
    </div>
  );
};

export default CertificationBlock;
