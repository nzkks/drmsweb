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
      <Recommendations />
      <Certifications />
      <Cta />
    </main>
  );
};

export default Home;
