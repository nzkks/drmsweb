import {
  About,
  Certifications,
  Experience,
  Hero,
  Recommendations,
  SectionBg,
  Skills,
} from '@/components';

const Home = () => {
  return (
    <main className="relative">
      <SectionBg />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Certifications />
      <Recommendations />
    </main>
  );
};

export default Home;
