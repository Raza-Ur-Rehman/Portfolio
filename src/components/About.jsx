import { number } from "prop-types";

const aboutItem = [
  {
    label: "Project Done",
    number: "5",
  },
  {
    label: "Years of Experience",
    number: "1",
  },
];

const About = () => {
  return (
    <section id="about" className="section  ">
      {/* <h2 className="text-4xl ">About Me</h2> */}
      <div className="container">
        <div className="bg-zinc-800 p-7 rounded-2xl md:p-12 ">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I&apos;m a dedicated and self-motivated MERN Stack Developer with a
            strong foundation in MongoDB, Express.js, React.js, and Node.js. I
            enjoy building dynamic web apps, from small projects to full-stack
            systems. I&apos;m always exploring new technologies to improve
            performance and user experience. Currently, I&apos;m seeking an
            entry-level opportunity where I can contribute my skills, learn from
            experienced developers, and grow as a professional.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-12">
            {aboutItem.map(({ label, number }, key) => (
              <div key={key} className="">
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl ">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold text-md md:text-3xl ">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400 ">{label}</p>
              </div>
            ))}
            <img src="/images/logo.svg" width={25} height={25} alt="Raza" className="ml-auto md:w-[40px] md:h-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
