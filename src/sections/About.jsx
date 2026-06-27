import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { personalInfo } from "../constants/data";
import {
  FaGraduationCap,
  FaUniversity,
  FaBrain,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaUniversity />,
      title: "University",
      value: personalInfo.university,
    },
    {
      icon: <FaGraduationCap />,
      title: "Faculty",
      value: personalInfo.faculty,
    },
    {
      icon: <FaBrain />,
      title: "Major",
      value: personalInfo.major,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Mansoura, Egypt",
    },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Who Am I"
          title="About Me"
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,.2)] transition-all duration-300">

              <h3 className="text-3xl font-bold mb-6 text-white">
                A Little About Me
              </h3>

              <p className="text-gray-400 leading-8">
                {personalInfo.about}
              </p>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="grid grid-cols-2 gap-6">

              {cards.map((card) => (

                <div
                  key={card.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,.2)]"
                >

                  <div className="text-3xl text-violet-400 mb-5 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">
                    {card.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-6">
                    {card.value}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;