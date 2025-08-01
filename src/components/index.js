import { SharkCanvas, BallCanvas, AUVCanvas, StarsCanvas } from './canvas';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Tech from './Tech';
import Experience from './Experience';
import Works from './Works';
import Feedbacks from './Feedbacks';
import Contact from './Contact';
import Footer from './Footer';
import { Team } from './team';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  Team,
  Footer,
  SharkCanvas,
  BallCanvas, 
  AUVCanvas, 
  StarsCanvas,
  TermsAndConditions,
  PrivacyPolicy,
};

// Export all AUV-related components
export * from './AUV';

export { default as AUVPage } from './AUV/AUVPage';
export { default as BoldCopy } from './AUV/BoldCopy';