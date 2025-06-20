import React, { useState, useEffect, useRef } from 'react';
import HeroSection from "./components/HeroSection";
import DesignToWorkflow from './components/DesignToWorkflow';
import FeaturesSection from './components/FeaturesSection';
import WorkSection from './components/WorkSection';
import PeopleSays from './components/PeopleSays';

const App = () => {
  const [hamburgerColor, setHamburgerColor] = useState("black");
  const workSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHamburgerColor("white");
        } else {
          setHamburgerColor("black");
        }
      },
      {
        threshold: 1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px 0px 0px' // Start detecting slightly before the section comes into view
      }
    );

    const sectionNode = workSectionRef.current;
    if (sectionNode) {
      observer.observe(sectionNode);
    }

    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
    };
  }, []);

  return(
    <div className="max-w-screen h-auto bg-white ">
      <HeroSection hamburgerColor={hamburgerColor} />
      <DesignToWorkflow />
      <FeaturesSection />

      <div ref={workSectionRef}>
        <WorkSection />
      </div>

      <PeopleSays />
    </div>
  )
}

export default App;