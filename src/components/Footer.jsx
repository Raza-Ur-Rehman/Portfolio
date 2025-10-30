import { sitemap, socials } from "../utils/Footer";
import { ButtonPrimary } from "./Button";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline_1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:dev.razaurrehaman@gmail.com"
              label="Connect"
              icon="chevron_right"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex item-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img src="/images/logo.svg" alt="logo" width={25} height={25} />
          </a>
          <div className="flex items-center px-4">
            <p className="text-zinc-500 text-sm ">
              &copy; {year}{" "}
              <span className="text-zinc-200">
                Raza-ur-Rehman. All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
