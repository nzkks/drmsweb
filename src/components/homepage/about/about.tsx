import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Container } from '@/components';

const About = () => {
  return (
    <section className="py-16" id="about">
      <Container>
        <h2 className="text-center text-xl">About me</h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Collapsible>
            <CollapsibleTrigger>New Zealand citizen</CollapsibleTrigger>
            <CollapsibleContent>
              I am a New Zealand citizen and living in Auckland, New Zealand. I
              am willing to relocate to anywhere.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger>Adaptable</CollapsibleTrigger>
            <CollapsibleContent>
              Dedicated, experienced and adaptable Frontend Developer with a
              strong foundation in problem-solving, critical thinking, and
              understanding the ever-evolving landscape of frontend development.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger>Ready for new challenges!</CollapsibleTrigger>
            <CollapsibleContent>
              Equipped with the resilience to tackle any new challenge, I thrive
              in dynamic environments and embrace the constant learning inherent
              in this field.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger>Keen to learn</CollapsibleTrigger>
            <CollapsibleContent>
              My ability to learn and adapt ensures that I stay ahead of
              industry trends and deliver innovative solutions that meet the
              needs of my clients.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger>Experienced Developer</CollapsibleTrigger>
            <CollapsibleContent>
              I excel in building responsive websites/web applications, ensuring
              design principles, user experience, and cross-browser
              compatibility.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger>Collaborative</CollapsibleTrigger>
            <CollapsibleContent>
              Collaborative and skilled in Agile Scrum methodologies, I
              effectively gather requirements, design interfaces, and implement
              solutions that meet client and internal stakeholder needs.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </Container>
    </section>
  );
};

export default About;
