import { motion } from "framer-motion";

function SkillCard({ title, skills }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,.2)]"
    >
      {/* Title */}

      <h3 className="mb-6 text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
        {title}
      </h3>

      {/* Skills */}

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;