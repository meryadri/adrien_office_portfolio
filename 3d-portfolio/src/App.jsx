import { useState, useEffect } from "react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

const App = () => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      {showNotification && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-blue-400 text-white px-6 py-3 rounded shadow-lg">
          This website has many 3D objects to discover!
        </div>
      )}
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
