import React from 'react';
import HeroSection from "./components/HeroSection";
import DesignToWorkflow from './components/DesignToWorkflow';

const App = () => {
  return(
    <div className="max-w-screen h-auto bg-white ">
      <HeroSection />
      <DesignToWorkflow />
    </div>
  )
}
export default App;