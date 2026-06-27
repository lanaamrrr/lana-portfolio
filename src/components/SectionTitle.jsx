import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20 text-center"
    >
      {/* Subtitle */}

      <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium uppercase tracking-[4px] text-violet-300">
        {subtitle}
      </span>

      {/* Title */}

      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
        {title}
      </h2>

      {/* Line */}

      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500" />

    </motion.div>
  );
}

export default SectionTitle;