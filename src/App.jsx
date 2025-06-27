import { HashRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Team } from "./components";
import MouseFollower from "./components/MouseFollower";

const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <MouseFollower />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
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
            </>
          } />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;