import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover"
        />

        {project.featured && (
          <span className="absolute top-4 right-4 bg-violet-600 px-4 py-2 rounded-full text-sm">
            Featured
          </span>
        )}
      </div>

      <div className="p-7">

        <h3 className="text-2xl font-bold mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-violet-500/20 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">

          <a
            href={project.github}
            className="flex items-center gap-2"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            className="flex items-center gap-2"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;