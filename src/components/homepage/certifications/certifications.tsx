import { CertificationBlock, Container, SectionBg } from '@/components';
import certificationsData from '@/data/certifications.json';

const Certifications = () => {
  return (
    <section className="relative border-t border-[#25213b]" id="certifications">
      <div className="flex -translate-y-px justify-center">
        <div className="w-3/4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
      </div>
      <SectionBg />
      <Container className="py-16">
        <h2 className="text-center text-xl">Certifications</h2>

        <div className="mx-auto mt-6">
          <div className="group/list mx-auto my-0 grid h-auto gap-3 justify-self-center transition-all auto-fill-[200px]">
            {certificationsData.map((certification) => (
              <CertificationBlock key={certification.name} {...certification} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
