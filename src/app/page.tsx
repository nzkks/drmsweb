import {
  About,
  Certifications,
  Contact,
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
      <Experience />
      <Certifications />
      <Recommendations />
      <Contact />
      <About />
    </main>
  );
};

export default Home;
