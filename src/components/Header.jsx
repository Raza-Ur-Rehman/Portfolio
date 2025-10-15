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
          <h1>
            <a href="/" className="logo bg-white w-9 h-9 rounded-xl flex items-center justify-center">
                <img src="/images/logo.svg" width={30}
                height={30}
                alt="Raza" />
            </a>
          </h1>
          <div className="relative md:justify-self-center">
            <button 
            className=" menu-btn, md:hidden" 
            onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="material-symbols-rounded">
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
