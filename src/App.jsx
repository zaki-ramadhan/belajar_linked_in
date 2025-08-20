import Hero from '@/sections/Hero.jsx';
import About from '@/sections/About.jsx';
import Testimonials from '@/sections/Testimonials.jsx';
import Benefits from '@/sections/Benefits.jsx';
import CallToAction from '@/sections/CallToAction';
import Navbar from '@/components/Navbar';

const App = () => {
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
