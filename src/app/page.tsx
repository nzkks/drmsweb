import {
  About,
  Certifications,
  Experience,
  Hero,
  Recommendations,
  SectionBg,
  Skills,
  Contact,
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
      <Contact />
      <Recommendations />
    </main>
  );
};

export default Home;
