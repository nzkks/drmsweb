import { Container, Hero } from '@/components';

const Home = () => {
  return (
    <main>
      <Hero />

      <section className="h-48 py-16" id="skills">
        <Container>Skills</Container>
      </section>
      <section className="h-48 py-16" id="about">
        <Container>About</Container>
      </section>
      <section className="h-48 py-16" id="experience">
        <Container>Experience</Container>
      </section>
      <section className="h-48 py-16" id="recommendations">
        <Container>Recommendations</Container>
      </section>
      <section className="h-48 py-16" id="certifications">
        <Container>Certifications</Container>
      </section>
    </main>
  );
};

export default Home;
