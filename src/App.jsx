import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import Achievements from "./sections/Achievements";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      // Add a short delay so the message is visible for a moment
      setTimeout(() => setIsReady(true), 800);
    }
  }, [progress]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white font-light text-center p-6">
          {/* Fun icon or emoji */}
          <div className="text-5xl mb-4 animate-bounce">💻</div>
          
          {/* Main message */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Best Experienced on a Laptop / PC
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-md">
            This portfolio is designed for an immersive desktop view —  
            switch to a bigger screen for the full magic 
          </p>

          {/* Optional subtle loader below */}
          <div className="mt-6 w-48 h-1 bg-white/20 rounded overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Progress percentage */}
          <p className="mt-2 text-sm tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
        </div>
      )}

      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <Achievements />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
