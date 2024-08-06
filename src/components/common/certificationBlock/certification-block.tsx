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
      className="group relative before:block before:pb-[100%] before:content-['']"
    >
      <div className="absolute inset-0 mx-auto size-full border border-slate-50 p-4 dark:border-slate-800">
        <div className="text-center font-bold">{name}</div>
        <div className="text-center text-sm text-slate-500">{period}</div>
        <Link
          href={link}
          target="_blank"
          className="relative m-auto hidden size-12 rounded-lg bg-[rgba(204,204,204,0.53)] group-hover:block"
        >
          <ExternalLinkIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </Link>
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
