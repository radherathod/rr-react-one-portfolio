import React, { Suspense, lazy } from "react";

// Lazily import components that are below the initial fold
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

// Import components always needed or above the fold directly
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLink from "./components/SocialLink";

// Fallback UI component
const LoadingFallback = () => (
  <div className="w-full h-screen flex justify-center items-center bg-black text-white text-xl">
    Loading...
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Home is loaded eagerly */}
        <Home />

        {/* Wrap lazy components in Suspense */}
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Portfolio />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <SocialLink />
      {/* The ProjectModal is now rendered conditionally inside Portfolio.jsx */}
    </>
  );
}

export default App;
