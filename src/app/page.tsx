import { About, Container, Experience, Hero, Skills } from '@/components';

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Experience />

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
