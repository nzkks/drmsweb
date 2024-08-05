import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { Container } from '@/components';
import certificationsData from '@/data/certifications.json';

const Certifications = () => {
  return (
    <section className="py-16" id="certifications">
      <Container>
        <h2 className="text-center text-xl">Certifications</h2>

        <div className="mx-auto mt-6">
          <div className="grid auto-fill-[200px]">
            {certificationsData.map((certification) => (
              <div
                key={`${certification.name}-${certification.period}`}
                className="group relative before:block before:pb-[100%] before:content-['']"
              >
                <div className="absolute inset-0 mx-auto size-full border border-slate-50 p-4 dark:border-slate-800">
                  <div className="text-center font-bold">
                    {certification.name}
                  </div>
                  <div className="text-center text-sm text-slate-500">
                    {certification.period}
                  </div>
                  <div className="absolute inset-0 m-auto hidden size-8 rounded-lg group-hover:block">
                    <ExternalLink />
                  </div>
                  <div className="absolute bottom-[10px] right-0 h-6 w-[200px]">
                    {certification.providerLogoFilenameDarkMode ? (
                      <>
                        {
                          <>
                            <div className="absolute hidden size-full dark:block">
                              <Image
                                src={`/images/certifications/${certification.providerLogoFilenameDarkMode}`}
                                fill
                                style={{
                                  objectFit: 'contain',
                                }}
                                alt={certification.providerName}
                              />
                            </div>
                            <div className="absolute size-full dark:hidden">
                              <Image
                                src={`/images/certifications/${certification.providerLogoFilename}`}
                                fill
                                style={{
                                  objectFit: 'contain',
                                }}
                                alt={certification.providerName}
                              />
                            </div>
                          </>
                        }
                      </>
                    ) : (
                      <Image
                        src={`/images/certifications/${certification.providerLogoFilename}`}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                        alt={certification.providerName}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
