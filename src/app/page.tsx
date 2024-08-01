import {
  About,
  Container,
  Experience,
  Hero,
  Recommendations,
  Skills,
} from '@/components';

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Recommendations />

      <section className="h-48 py-16" id="certifications">
        <Container>Certifications</Container>
      </section>
    </main>
  );
};

export default Home;
