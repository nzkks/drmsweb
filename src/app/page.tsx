import {
  About,
  Certifications,
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
    </main>
  );
};

export default Home;
