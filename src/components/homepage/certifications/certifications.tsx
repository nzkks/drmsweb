import { CertificationBlock } from '@/components';
import certificationsData from '@/data/certifications.json';

const Certifications = () => {
  return (
    <>
      <h2 className="text-center text-xl">Certifications</h2>

      <div className="mx-auto mt-6">
        <div className="group/list mx-auto my-0 grid h-auto gap-3 justify-self-center transition-all auto-fill-[200px]">
          {certificationsData.map((certification, index) => (
            <CertificationBlock key={index} index={index} {...certification} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Certifications;
