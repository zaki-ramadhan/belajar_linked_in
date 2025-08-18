import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Benefits from './sections/Benefits.jsx';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Home />
      <About />
      <Benefits />
      <Testimonials />
    </main>
    </>
  )
}

export default App
