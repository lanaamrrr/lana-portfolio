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

<div className="pointer-events-none absolute top-0 left-0 -z-10 w-[350px] h-[350px] bg-violet-700 opacity-15 blur-[80px] rounded-full"/>
<div className="pointer-events-none absolute bottom-0 right-0 -z-10 w-[300px] h-[300px] bg-fuchsia-600 opacity-15 blur-[80px] rounded-full"/>
      <Navbar />

      <Hero />

      <Skills />

      <Projects />

      <About />

      <Education />

      <Footer />

      <ScrollToTop />


    </div>
  )

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