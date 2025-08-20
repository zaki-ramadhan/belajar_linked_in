// aos
import { useEffect } from 'react';
import AOS from 'aos'; 
import "aos/dist/aos.css";

import Hero from '@/sections/Hero.jsx';
import About from '@/sections/About.jsx';
import Testimonials from '@/sections/Testimonials.jsx';
import Benefits from '@/sections/Benefits.jsx';
import CallToAction from '@/sections/CallToAction';
import Navbar from '@/components/Navbar';

const App = () => {
  useEffect(()=> {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      offset: 120,
      once: true,
      mirror: false
    });
  })
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  )
}

export default App
