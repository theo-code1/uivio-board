import React from 'react';
import HeroSection from "./components/HeroSection";
import DesignToWorkflow from './components/DesignToWorkflow';
import FeaturesSection from './components/FeaturesSection';

const App = () => {
  return(
    <div className="max-w-screen h-auto bg-white ">
      <HeroSection />
      <DesignToWorkflow />
      <FeaturesSection />
    </div>
  )
}
export default App;