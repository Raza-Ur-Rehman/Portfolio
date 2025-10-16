/* ___________________________ *\
 * components
\* ___________________________ */

import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36  ">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-16 ">
        <div>
          <div className="flex items-center gap-4">
            <figure className="img-wrapper w-9 h-9 rounded-lg">
              <img
                src="/images/vector1.svg"
                width={40}
                height={40}
                className="img-cover "
                alt="Avatar"
              />
              
            </figure>
            <div className="flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline_1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-4">
            <ButtonPrimary 
            label="Download CV"
            icon="download" />
            <ButtonOutline 
            href="#about"
            label="Scroll Down"
            icon="arrow_downward" />
          </div>
        </div>
        <div className="">
          <figure className="">
            <img
              src="/images/vector2.svg"
              width={500}
              height={500}
              alt="Hero Image "
              className="hidden lg:block"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
