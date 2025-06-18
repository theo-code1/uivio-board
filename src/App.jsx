import React from 'react';
import HeroSection from "./components/HeroSection";
import DesignToWorkflow from './components/DesignToWorkflow';
import FeaturesSection from './components/FeaturesSection';
import WorkSection from './components/WorkSection';

const App = () => {
  return(
    <div className="max-w-screen h-auto bg-white ">
      <HeroSection />
      <DesignToWorkflow />
      <FeaturesSection />
      <WorkSection />
    </div>
  )
}
export default App;