import {
  About,
  Certifications,
  Cta,
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
      <Cta />
      <Experience />
      <Certifications />
      <Recommendations />
    </main>
  );
};

export default Home;
