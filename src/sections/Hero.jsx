import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import Button from "../components/Button";
import { personalInfo } from "../constants/data";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          {/* Heading */}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">

            Hi, I'm

            <span className="block mt-2 text-violet-500">
              {personalInfo.name}
            </span>

          </h1>

          {/* Typewriter */}

          <div className="text-2xl mt-6 text-gray-300 h-10">

            <Typewriter
              words={[
                "AI Student",
                "Aspiring Full-Stack Developer",
                "React Developer"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
            />

          </div>

          {/* Description */}

          <p className="mt-8 max-w-lg text-gray-400 leading-8">
            Passionate about building responsive and modern web applications
            with React while continuously expanding my skills in Full-Stack
            Development.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              href="#projects"
              primary={false}
            >
              View Projects
            </Button>

            <Button
              href="/CV/CV.pdf"
              download
            >
              Download CV
            </Button>

          </div>

          {/* Stats */}

          <div className="mt-12 flex gap-10">

            <div>
              <h3 className="text-3xl font-bold text-white">
                2+
              </h3>
              <p className="text-gray-400">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                10+
              </h3>
              <p className="text-gray-400">
                Technologies
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-purple-600 blur-[70px] opacity-40 animate-pulse" />

            <img
              src="/images/profile.png"
              loading="eager"
              decoding="async"
              alt="Lana"
              className="relative w-[360px] h-[360px] lg:w-[400px] lg:h-[400px] rounded-full object-cover border border-violet-500/40 shadow-[0_0_60px_rgba(139,92,246,.35)] transition-all duration-500 hover:scale-105"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;