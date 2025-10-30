/* ___________________________ *\
 * Node module
\* ___________________________ */
import { useState } from "react"

/* ___________________________ *\
 * components
\* ___________________________ */
import Navbar from "./Navbar"

const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed  top-0 left-0 w-full h-20 flex items-center z-90 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center, md:px-6  place-items-center">
          <h1 className="flex items-center gap-1 font-bold text-3xl">
            <a href="/" className="logo w-full h-full rounded-xl flex items-center justify-center">
                <img src="/images/logo.svg" width={25}
                height={25}
                alt="Raza" />
            </a>
            aza
          </h1>
          <div className="relative md:justify-self-center bg-zinc-700/20 p-1 rounded-xl">
            <button 
            className=" menu-btn, md:hidden  " 
            onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="material-symbols-rounded w-8 h-8 grid place-items-center text-zinc-200">
                {navOpen ? 'close' : 'menu'}
              </span>
            </button>

            <Navbar navOpen={navOpen} />
          </div>
          <div className="max-md:hidden">
            <a href="#contact"
          className="btn btn-secondary md:justify-self-end "
          >
            Contact Me
          </a>
          </div>
        </div>
    </header>
  )
}

export default Header
