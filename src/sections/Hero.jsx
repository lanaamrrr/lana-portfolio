import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import Button from "../components/Button";
import { personalInfo } from "../constants/data";
import { useState } from "react";
import ContactModal from "../components/ContactModal";

function Hero() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[8px] text-violet-400 mb-4">
            Welcome
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">

            Hi, I'm

            <span className="block text-violet-500">
              {personalInfo.name}
            </span>

          </h1>

          <div className="text-2xl mt-6 text-gray-300 h-10">

            <Typewriter

              words={[
                "AI Student",
                "Full-Stack Developer",
                "React Developer"
              ]}

              loop={0}

              cursor

              cursorStyle="|"

              typeSpeed={80}

              deleteSpeed={50}

            />

          </div>


          <div className="flex gap-5 mt-10">

            <Button
                href="/CV/CV.pdf"
                download
              >
                Download CV
              </Button>

              <Button
                primary={false}
                onClick={() => setOpenModal(true)}
              >
                Contact Me
              </Button>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div

          initial={{ opacity: 0, x: 80 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: .8 }}

          className="flex justify-center"

        >

          <div className="relative">

            <div className="absolute inset-0 bg-violet-600 blur-3xl opacity-40 rounded-full"/>

            <img

              src="/images/profile.png"

              alt="Lana"

              className="relative w-[330px] h-[330px] rounded-full object-cover border-4 border-violet-500"

            />

          </div>

        </motion.div>

      </div>
                <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        />
    </section>
  );
}

export default Hero;