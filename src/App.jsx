import { HashRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Team, AUVPage, Footer, TermsAndConditions, PrivacyPolicy } from "./components";
import MouseFollower from "./components/MouseFollower";
import ScrollProgress from "./components/ScrollProgress";
import { TechnicalDocumentation, BlogsPage, BlogDetail, GalleryPage } from "./components/library";

const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <ScrollProgress />
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
              <Works />
              <Feedbacks />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/auv" element={<AUVPage />} />
          <Route path="/technical-documentation" element={<TechnicalDocumentation />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;