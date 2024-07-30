import { CollapsibleWrapper, Container } from '@/components';

const About = () => {
  return (
    <section className="py-16" id="about">
      <Container>
        <h2 className="text-center text-xl">About me</h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <CollapsibleWrapper
            title="New Zealand citizen"
            content="I am a New Zealand citizen and living in Auckland, New Zealand. I am willing to relocate to anywhere."
          />

          <CollapsibleWrapper
            title="Adaptable"
            content="Dedicated, experienced and adaptable Frontend Developer with a strong foundation in problem-solving, critical thinking, and understanding the ever-evolving landscape of frontend development."
          />

          <CollapsibleWrapper
            title="Ready for a challenge!"
            content="Equipped with the resilience to tackle any new challenge, I thrive in dynamic environments and embrace the constant learning inherent in this field."
          />

          <CollapsibleWrapper
            title="Keen to learn"
            content="My ability to learn and adapt ensures that I stay ahead of industry trends and deliver innovative solutions that meet the needs of my clients."
          />

          <CollapsibleWrapper
            title="Experienced Developer"
            content="I excel in building responsive websites/web applications, ensuring
              design principles, user experience, and cross-browser
              compatibility."
          />

          <CollapsibleWrapper
            title="Collaborative"
            content="Collaborative and skilled in Agile Scrum methodologies, I
              effectively gather requirements, design interfaces, and implement
              solutions that meet client and internal stakeholder needs."
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
