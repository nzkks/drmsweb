import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

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
        <div className="absolute inset-0 m-auto hidden size-8 rounded-lg group-hover:block">
          <ExternalLinkIcon />
        </div>
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
