import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { skillCategories } from "../constants/data";

function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Tech Stack"
          title="Skills & Technologies"
        />

        <p className="max-w-2xl mx-auto text-center text-gray-400 mb-14">
          Technologies and tools I use to build responsive, scalable, and
          modern web applications.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;