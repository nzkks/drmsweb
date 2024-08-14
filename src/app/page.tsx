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
      <Experience />
      <Cta />
      <Certifications />
      <Recommendations />
    </main>
  );
};

export default Home;
