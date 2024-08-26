import {
  About,
  Certifications,
  Cta,
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
      <Cta />
      <Experience />
      <Certifications />
      <Recommendations />
    </main>
  );
};

export default Home;
