//****node modules***
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);

//****components***
import { ToastContainer } from "react-toastify"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skill from "./components/Skill"
import Work from "./components/Work"
import Footer from "./components/Footer"
import { element } from 'prop-types';

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element)=> {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: '-200 bottom',
          end: 'bottom 80%',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
    
      })
    })


});

  return (
    <>
    <ReactLenis root options={{ smooth: true, lerp: 0.1 }} />
   <Header />
    <main>
      <ToastContainer />
      <Hero />
      <About />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </main>



    </>
  )
}

export default App
