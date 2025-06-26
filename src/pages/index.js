import MouseFollower from '../components/MouseFollower';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Tech from '../components/Tech';
import Works from '../components/Works';
import Feedbacks from '../components/Feedbacks';
import Contact from '../components/Contact';
import StarsCanvas from '../components/canvas/Stars';

export default function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <MouseFollower />
      <Navbar />
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative'>
        <div className='absolute inset-0 bg-black/50'></div>
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
} 