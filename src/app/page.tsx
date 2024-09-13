'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import useLazyLoadOnView from '@/hooks/useLazyLoadOnView';
import { Hero, Section, SectionBg } from '@/components';

const Skills = dynamic(() => import('@/components/homepage/skills'), {
  suspense: true,
  ssr: false,
});

const Experience = dynamic(() => import('@/components/homepage/experience'), {
  suspense: true,
  ssr: false,
});

const Certifications = dynamic(
  () => import('@/components/homepage/certifications'),
  {
    suspense: true,
    ssr: false,
  },
);

const Recommendations = dynamic(
  () => import('@/components/homepage/recommendations'),
  {
    suspense: true,
    ssr: false,
  },
);

const Contact = dynamic(() => import('@/components/homepage/contact'), {
  suspense: true,
  ssr: false,
});

const About = dynamic(() => import('@/components/homepage/about'), {
  suspense: true,
  ssr: false,
});

const Loader = () => {
  return <>Loading...</>;
};

const Home = () => {
  const [skillsRef, isSkillsVisible] = useLazyLoadOnView();
  const [experienceRef, isExperienceVisible] = useLazyLoadOnView();
  const [certificationsRef, isCertificationsVisible] = useLazyLoadOnView();
  const [recommendationsRef, isRecommendationsVisible] = useLazyLoadOnView();
  const [contactRef, isContactVisible] = useLazyLoadOnView();
  const [aboutRef, isAboutVisible] = useLazyLoadOnView();

  return (
    <main className="relative">
      <SectionBg />

      <Section
        id="hero"
        showSectionBg={false}
        containerProps={{ containerClass: 'text-center' }}
      >
        <Hero />
      </Section>

      <section
        id="skills"
        ref={skillsRef}
        aria-label="skills section"
        className="section-gradient-bg1 min-h-[500px]"
      >
        {isSkillsVisible && (
          <Suspense fallback={<Loader />}>
            <Skills />
          </Suspense>
        )}
      </section>

      <Section id="experience" ref={experienceRef}>
        {isExperienceVisible && (
          <Suspense fallback={<Loader />}>
            <Experience />
          </Suspense>
        )}
      </Section>

      <Section id="certifications" ref={certificationsRef}>
        {isCertificationsVisible && (
          <Suspense fallback={<Loader />}>
            <Certifications />
          </Suspense>
        )}
      </Section>

      <Section id="recommendations" ref={recommendationsRef}>
        {isRecommendationsVisible && (
          <Suspense fallback={<Loader />}>
            <Recommendations />
          </Suspense>
        )}
      </Section>

      <Section id="contact" ref={contactRef}>
        {isContactVisible && (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        )}
      </Section>

      <Section id="about" ref={aboutRef}>
        {isAboutVisible && (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        )}
      </Section>
    </main>
  );
};

export default Home;
