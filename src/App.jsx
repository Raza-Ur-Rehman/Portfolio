//****node modules***

import { ReactLenis, useLenis } from 'lenis/react'
//****components***
import { ToastContainer } from "react-toastify"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skill from "./components/Skill"
import Work from "./components/Work"
import Footer from "./components/Footer"

const App = () => {

  const lenis = useLenis((lenis) => {
    lenis.on('scroll', () => {
      
    })
  })

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
