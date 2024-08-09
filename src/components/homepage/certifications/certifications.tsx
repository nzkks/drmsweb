import { CertificationBlock, Container } from '@/components';
import certificationsData from '@/data/certifications.json';

const Certifications = () => {
  return (
    <section className="py-16" id="certifications">
      <Container>
        <h2 className="text-center text-xl">Certifications</h2>

        <div className="mx-auto mt-6">
          <div className="group/list mx-auto my-0 grid h-auto gap-px justify-self-center transition-all auto-fill-[200px]">
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
