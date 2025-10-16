import { number } from "prop-types";

const aboutItem = [
  {
    label: "Project Done",
    number: "5+",
  },
  {
    label: "Years of Experience",
    number: "1+",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="">
          <p className="">
            I&apos;m a dedicated and self-motivated MERN Stack Developer with a
            strong foundation in MongoDB, Express.js, React.js, and Node.js. I
            enjoy building dynamic web apps, from small projects to full-stack
            systems. I&apos;m always exploring new technologies to improve
            performance and user experience. Currently, I&apos;m seeking an
            entry-level opportunity where I can contribute my skills, learn from
            experienced developers, and grow as a professional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
