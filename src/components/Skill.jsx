import { skillItem } from "../utils/Skill";
import SkillCard from "./SkillCard";



const Skill = () => {






  return (
    <section className="section">
      <div className="container">
        <h2 className="headline_2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {
            skillItem.map(({imgSrc, label,desc},key ) => 
            (
              <SkillCard
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              key={key}
              />
            ) )
          }
        </div>
      </div>
    </section>
  );
};

export default Skill;
