import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { skillCategories } from "../constants/data";

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Tech Stack"
          title="Skills"
        />

        <div className="grid md:grid-cols-2 gap-8">

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