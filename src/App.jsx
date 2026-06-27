import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import skillCategories from "./sections/Skills";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#09090B] text-white">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-violet-700 opacity-20 blur-[150px] rounded-full"/>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-600 opacity-20 blur-[150px] rounded-full"/>

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Education />

      <Footer />

      <ScrollToTop />


    </div>
  );

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
});

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <LoadingScreen />;
}
}

export default App;