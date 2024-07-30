import { About, Container, Hero, Skills } from '@/components';

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <About />

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
