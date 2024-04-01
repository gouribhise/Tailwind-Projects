import { skills } from '../data'; 
import SkillsCard from './SkillsCard';
const Skills = () => {
  return (
    <section className='py-20 align-element ' id='skills'>
   <h1 class="text-3xl font-bold underline">Tech Stack</h1>
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;