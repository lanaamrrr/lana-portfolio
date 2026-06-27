import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { personalInfo } from "../constants/data";

function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Who Am I"
          title="About Me"
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">

              <p className="text-gray-300 leading-9">

                {personalInfo.about}

              </p>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">

                <h3 className="text-violet-400 text-lg mb-2">
                  University
                </h3>

                <p>
                  {personalInfo.university}
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">

                <h3 className="text-violet-400 text-lg mb-2">
                  Faculty
                </h3>

                <p>
                  {personalInfo.faculty}
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">

                <h3 className="text-violet-400 text-lg mb-2">
                  Major
                </h3>

                <p>
                  {personalInfo.major}
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">

                <h3 className="text-violet-400 text-lg mb-2">
                  Graduation
                </h3>

                <p>
                  {personalInfo.graduation}
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;