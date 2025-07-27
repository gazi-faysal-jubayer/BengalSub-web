import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn, textVariant } from '../utils/motion';

const TermsAndConditions = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="bg-primary min-h-screen py-20"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <div className={`${styles.paddingX} max-w-6xl mx-auto`}>
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={textVariant()}
        >
          <h1 className={`${styles.sectionHeadText} mb-4`}>
            Terms & Conditions
          </h1>
          <p className={`${styles.sectionSubText} max-w-3xl mx-auto`}>
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>

        {/* Content Sections */}
        <motion.div className="space-y-12">
          {/* Introduction */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">1. Introduction</h2>
            <p className="text-secondary text-lg leading-relaxed">
              Welcome to BengalSub, the official website of TechAutocrats Robotics Team. 
              These Terms and Conditions ("Terms") govern your use of our website and services. 
              By accessing or using our website, you agree to be bound by these Terms.
            </p>
          </motion.section>

          {/* Acceptance of Terms */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">2. Acceptance of Terms</h2>
            <p className="text-secondary text-lg leading-relaxed mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement. Additionally, when using this website's particular 
              services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              If you do not agree to these terms, please do not use our website.
            </p>
          </motion.section>

          {/* Use License */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">3. Use License</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>
                Permission is granted to temporarily download one copy of the materials on BengalSub's 
                website for personal, non-commercial transitory viewing only.
              </p>
              <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </motion.section>

          {/* Disclaimer */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">4. Disclaimer</h2>
            <p className="text-secondary text-lg leading-relaxed">
              The materials on BengalSub's website are provided on an 'as is' basis. BengalSub makes 
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including without limitation, implied warranties or conditions of merchantability, fitness 
              for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </motion.section>

          {/* Limitations */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">5. Limitations</h2>
            <p className="text-secondary text-lg leading-relaxed">
              In no event shall BengalSub or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising 
              out of the use or inability to use the materials on BengalSub's website, even if BengalSub 
              or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </motion.section>

          {/* Accuracy of Materials */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">6. Accuracy of Materials</h2>
            <p className="text-secondary text-lg leading-relaxed">
              The materials appearing on BengalSub's website could include technical, typographical, 
              or photographic errors. BengalSub does not warrant that any of the materials on its 
              website are accurate, complete, or current. BengalSub may make changes to the materials 
              contained on its website at any time without notice.
            </p>
          </motion.section>

          {/* Intellectual Property */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">7. Intellectual Property</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, 
                audio clips, digital downloads, and software, is the property of BengalSub or its content 
                suppliers and is protected by copyright laws.
              </p>
              <p>
                Our AUV designs, technical documentation, and research materials are proprietary to 
                TechAutocrats Robotics Team and may not be used without explicit permission.
              </p>
            </div>
          </motion.section>

          {/* User Conduct */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">8. User Conduct</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>You agree not to use the website to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upload, post, or transmit any content that is harmful, offensive, or inappropriate</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Interfere with the website's functionality or security</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
              </ul>
            </div>
          </motion.section>

          {/* Privacy */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">9. Privacy</h2>
            <p className="text-secondary text-lg leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              your use of the website, to understand our practices regarding the collection and use 
              of your personal information.
            </p>
          </motion.section>

          {/* Modifications */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">10. Modifications</h2>
            <p className="text-secondary text-lg leading-relaxed">
              BengalSub may revise these Terms at any time without notice. By using this website, 
              you are agreeing to be bound by the then current version of these Terms.
            </p>
          </motion.section>

          {/* Contact Information */}
          <motion.section 
            className="bg-gradient-to-r from-tertiary to-black-100 rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">11. Contact Information</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-primary/50 rounded-lg p-6">
                <p className="text-white font-semibold mb-2">TechAutocrats Robotics Team</p>
                <p>Email: contact@bengalsub.com</p>
                <p>Website: www.bengalsub.com</p>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Footer Navigation */}
        <motion.div 
          className="mt-16 text-center"
          variants={fadeInUp}
        >
          <div className="bg-tertiary rounded-2xl p-6 border border-secondary/20">
            <p className="text-secondary text-lg mb-4">
              By using our website, you acknowledge that you have read and understood these Terms and Conditions.
            </p>
            <motion.a
              href="/#"
              className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Return to Home
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(TermsAndConditions, "terms"); 