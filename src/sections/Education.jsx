import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { education } from "../constants/data";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <SectionTitle
          subtitle="Education"
          title="Academic Journey"
        />

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          My academic journey in Artificial Intelligence, continuously building
          a strong foundation in software development and modern web
          technologies.
        </p>

        <div className="relative border-l border-violet-500/30 ml-5">

          {education.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12 ml-10"
            >
              {/* Timeline Icon */}

              <div className="absolute -left-[58px] w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,.4)]">
                <FaGraduationCap className="text-white text-lg" />
              </div>

              {/* Card */}

              <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,.2)]">

                <span className="inline-block rounded-full bg-violet-500/10 border border-violet-500/30 px-4 py-1 text-sm text-violet-300 mb-5">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.degree}
                </h3>

                <p className="text-violet-400 mb-2">
                  {item.major}
                </p>

                <p className="text-gray-300 mb-5">
                  {item.university}
                </p>

                <p className="text-gray-400 leading-8">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;