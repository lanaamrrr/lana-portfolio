import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/data";

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          A selection of projects that showcase my skills in building modern,
          responsive, and user-friendly web applications.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;