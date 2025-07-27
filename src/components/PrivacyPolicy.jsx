import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn, textVariant } from '../utils/motion';

const PrivacyPolicy = () => {
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
            Privacy Policy
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
              TechAutocrats Robotics Team ("we," "our," or "us") operates the BengalSub website. 
              This Privacy Policy informs you of our policies regarding the collection, use, and 
              disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </motion.section>

          {/* Information We Collect */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">2. Information We Collect</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-6">
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">Personal Information</h3>
                <p className="mb-3">We may collect the following personal information when you interact with our website:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information when you contact us</li>
                  <li>Email address when subscribing to newsletters or updates</li>
                  <li>Educational institution information for collaboration inquiries</li>
                  <li>Professional background for partnership opportunities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold mb-3">Technical Information</h3>
                <p className="mb-3">We automatically collect certain technical information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP addresses and browser information</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring websites and search terms used</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* How We Use Information */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">3. How We Use Your Information</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our website services</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To send you updates about our projects and competitions</li>
                <li>To improve our website functionality and user experience</li>
                <li>To analyze website usage and performance</li>
                <li>To comply with legal obligations</li>
                <li>To facilitate collaboration opportunities with other institutions</li>
              </ul>
            </div>
          </motion.section>

          {/* Information Sharing */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">4. Information Sharing and Disclosure</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or respond to legal processes</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>With service providers who assist us in operating our website (under strict confidentiality agreements)</li>
                <li>In connection with academic collaborations or research partnerships (with anonymized data only)</li>
              </ul>
            </div>
          </motion.section>

          {/* Cookies and Tracking */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">5. Cookies and Tracking Technologies</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>Our website uses cookies and similar tracking technologies to enhance your experience:</p>
              
              <div className="bg-primary/50 rounded-lg p-6">
                <h3 className="text-white text-xl font-semibold mb-3">Types of Cookies We Use:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Performance Cookies:</strong> Allow us to improve website performance</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                </ul>
              </div>

              <p>You can control cookies through your browser settings, though disabling certain cookies may affect website functionality.</p>
            </div>
          </motion.section>

          {/* Data Security */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">6. Data Security</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="bg-primary/50 rounded-lg p-6">
                <h3 className="text-white text-xl font-semibold mb-3">Security Measures Include:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication systems</li>
                  <li>Data backup and recovery procedures</li>
                  <li>Staff training on data protection practices</li>
                </ul>
              </div>

              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </motion.section>

          {/* Data Retention */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">7. Data Retention</h2>
            <p className="text-secondary text-lg leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law. When we no longer need your personal information, 
              we will securely delete or anonymize it.
            </p>
          </motion.section>

          {/* Your Rights */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">8. Your Rights</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/50 rounded-lg p-6">
                  <h3 className="text-white text-lg font-semibold mb-3">Access & Portability</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Request access to your personal data</li>
                    <li>Receive a copy of your data in a portable format</li>
                  </ul>
                </div>
                
                <div className="bg-primary/50 rounded-lg p-6">
                  <h3 className="text-white text-lg font-semibold mb-3">Correction & Deletion</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Correct inaccurate personal information</li>
                    <li>Request deletion of your personal data</li>
                  </ul>
                </div>
                
                <div className="bg-primary/50 rounded-lg p-6">
                  <h3 className="text-white text-lg font-semibold mb-3">Restriction & Objection</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Restrict processing of your data</li>
                    <li>Object to certain types of processing</li>
                  </ul>
                </div>
                
                <div className="bg-primary/50 rounded-lg p-6">
                  <h3 className="text-white text-lg font-semibold mb-3">Consent & Complaints</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Withdraw consent at any time</li>
                    <li>Lodge complaints with supervisory authorities</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Third-Party Links */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">9. Third-Party Links</h2>
            <p className="text-secondary text-lg leading-relaxed">
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </motion.section>

          {/* Children's Privacy */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">10. Children's Privacy</h2>
            <p className="text-secondary text-lg leading-relaxed">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information 
              from children under 13. If we become aware that we have collected personal information from a child under 13, 
              we will take steps to delete such information promptly.
            </p>
          </motion.section>

          {/* Updates to Policy */}
          <motion.section 
            className="bg-tertiary rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">11. Updates to This Privacy Policy</h2>
            <p className="text-secondary text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy 
              periodically for any changes.
            </p>
          </motion.section>

          {/* Contact Information */}
          <motion.section 
            className="bg-gradient-to-r from-tertiary to-black-100 rounded-2xl p-8 border border-secondary/20"
            variants={fadeInUp}
          >
            <h2 className="text-white text-3xl font-bold mb-6">12. Contact Us</h2>
            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-primary/50 rounded-lg p-6">
                <p className="text-white font-semibold mb-2">TechAutocrats Robotics Team</p>
                <p>Email: contact@bengalsub.com</p>
                <p>Website: www.bengalsub.com</p>
                <p className="mt-3 text-sm">
                  For privacy-specific inquiries, please include "Privacy Policy" in your subject line.
                </p>
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
              Your privacy is important to us. We are committed to protecting your personal information and being transparent about our practices.
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

export default SectionWrapper(PrivacyPolicy, "privacy"); 