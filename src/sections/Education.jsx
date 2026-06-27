import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { education } from "../constants/data";

function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <SectionTitle
          subtitle="Education"
          title="Academic Journey"
        />

        <div className="relative border-l-2 border-violet-600 ml-4">

          {education.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 ml-8"
            >
              <span className="absolute -left-[11px] w-5 h-5 rounded-full bg-violet-600"></span>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

                <p className="text-violet-400 font-semibold">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.degree}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.major}
                </p>

                <p className="mt-2">
                  {item.university}
                </p>

                <p className="mt-5 text-gray-400 leading-8">
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

