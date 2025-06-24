import React from 'react';
import styled, { keyframes } from 'styled-components';
import TeamCard from './TeamCard';
import TeamDetailCard from './TeamDetailCard';
import Hyperspeed from './Hyperspeed';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
`;

const PageTitle = styled.h1`
  color: white;
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 7rem;
  background: linear-gradient(90deg, #915EFF 0%, #FF8E53 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  letter-spacing: 2px;
  font-weight: 800;
  animation: ${fadeIn} 1s ease;
`;

const Section = styled.div`
  margin-bottom: 4rem;
  padding: 2.5rem 2rem 2rem 2rem;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 32px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.12);
  position: relative;
  animation: ${fadeIn} 1.2s cubic-bezier(0.23, 1, 0.32, 1);
`;

const SectionDivider = styled.div`
  width: 80%;
  height: 2px;
  margin: 2rem auto 3rem auto;
  background: linear-gradient(90deg, #915EFF 0%, #FF8E53 100%);
  border-radius: 2px;
  opacity: 0.25;
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  animation: ${fadeIn} 1.3s cubic-bezier(0.23, 1, 0.32, 1);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #915EFF 0%, #FF8E53 100%);
    border-radius: 2px;
  }
`;

const SectionContent = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 0;
  border-radius: 24px;
  background: rgba(255,255,255,0.04);
  box-shadow: 0 4px 24px 0 rgba(145, 94, 255, 0.07);
  animation: ${fadeIn} 1.4s cubic-bezier(0.23, 1, 0.32, 1);
  
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }
`;

const DetailCardContainer = styled.div`
  flex: 2;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 900px;
`;

const Team = () => {
  // Team members data organized by sections with additional metadata
  const teamSections = {
    "Advisor Panel": {
      members: [
        {
          name: "Rasel Ahmed",
          role: "Advisor",
          email: "raselahmedcse2012@gmail.com",
          description: "Assistant Professor at ICT Dept. , Dhaka Residential Model College",
          github: "NULL",
          linkedin: "NULL",
          whatsapp: "https://wa.me/8801720210229",
          image: "/assets/team/4.png"
        },
        {
          name: "Prof. Golam Kader",
          role: "Advisor",
          email: "gkader@me.kuet.ac.bd",
          description: "Professor, Department of Mechanical Engineering, KUET, Bangladesh",
          github: "https://github.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          whatsapp: "https://wa.me/1234567890",
          image: "/assets/team/7.png"
        },
        {
          name: "Jahedul Hoque",
          role: "Advisor",
          email: "jahed.drmc@gmail.com",
          description: "Associate Professor at Dept. of Chemistry, Dhaka Residential Model College",
          github: "NULL",
          linkedin: "NULL",
          whatsapp: "https://wa.me/8801689553501",
          image: "/assets/team/6.png"
        },
      ],
      description: "Our leadership team drives the vision and strategy of BengalSub, ensuring we deliver exceptional value to our users while maintaining the highest standards of quality and innovation.",
      image: "/assets/team/advisors.png"
    },
    "Mentor Panel": {
      members: [
        {
          name: "Jane Smith",
          role: "CTO",
          email: "jane@example.com",
          description: "Tech enthusiast and architect.",
          github: "https://github.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
          whatsapp: "https://wa.me/1234567891",
          image: "/assets/team/5.png"
        },
      ],
      description: "Our leadership team drives the vision and strategy of BengalSub, ensuring we deliver exceptional value to our users while maintaining the highest standards of quality and innovation.",
      image: "/assets/team/mentors.png"
    },
    "Tech Autocrats": {
      members: [
        {
          name: "An Nafew",
          role: "Project Manager",
          email: "annafewdrmc@gmail.com",
          description: "Chief Executive Officer and Project Manager at Team BengalSub",
          github: "NULL",
          linkedin: "https://www.linkedin.com/in/an-nafew-72053a254 ",
          whatsapp: " https://wa.me/8801886892326",
          image: "/assets/team/1.png"
        },
        {
          name: "Rubaiyat H Rahman",
          role: "Software Team Member",
          email: "rubaiyathrahman.robo@gmail.com",
          description: "Managing Director",
          github: "https://github.com/Rubaiyat29",
          linkedin: "https://www.linkedin.com/in/rubaiyat-h-rahman-10211a263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          whatsapp: " https://wa.me/8801827131041",
          image: "/assets/team/2.png"
        },
        {
          name: "Hasin Israque Chowdhury Taha",
          role: "Electrical Team Member",
          email: "tahahasin0@gmail.com",
          description: "Chief Technology Officer",
          github: "https://github.com/Taha-the-coder",
          linkedin: "https://www.linkedin.com/in/hasin-israque-chowdhury-taha-b47173360",
          whatsapp: " https://wa.me/8801814223746",
          image: "/assets/team/3.png"
        },
      ],
      description: "Our leadership team drives the vision and strategy of BengalSub, ensuring we deliver exceptional value to our users while maintaining the highest standards of quality and innovation.",
      image: "/assets/team/autocrats.png"
    },
    "Design Team": {
      members: [
        {
          name: "Mike Johnson",
          role: "Senior Developer",
          email: "mike@example.com",
          description: "Full-stack developer.",
          github: "https://github.com/mikejohnson",
          linkedin: "https://linkedin.com/in/mikejohnson",
          whatsapp: "https://wa.me/1234567892",
          image: "/images/mike.jpg"
        },
        {
          name: "Sarah Wilson",
          role: "Frontend Developer",
          email: "sarah@example.com",
          description: "UI/UX and frontend specialist.",
          github: "https://github.com/sarahwilson",
          linkedin: "https://linkedin.com/in/sarahwilson",
          whatsapp: "https://wa.me/1234567893",
          image: "/images/sarah.jpg"
        },
      ],
      description: "Our development team builds robust, scalable solutions using cutting-edge technologies to create seamless user experiences and powerful backend systems.",
      image: "/assets/team/development-cover.jpg"
    },
    "Mechanical Team": {
      members: [
        {
          name: "Alex Brown",
          role: "UI/UX Designer",
          email: "alex@example.com",
          description: "Designs beautiful interfaces.",
          github: "https://github.com/alexbrown",
          linkedin: "https://linkedin.com/in/alexbrown",
          whatsapp: "https://wa.me/1234567894",
          image: "/images/alex.jpg"
        },
        {
          name: "Emma Davis",
          role: "Graphic Designer",
          email: "emma@example.com",
          description: "Creates stunning graphics.",
          github: "https://github.com/emmadavis",
          linkedin: "https://linkedin.com/in/emmadavis",
          whatsapp: "https://wa.me/1234567895",
          image: "/images/emma.jpg"
        },
      ],
      description: "Our design team creates visually stunning and intuitive interfaces that enhance user experience and bring our vision to life through creative and innovative design solutions.",
      image: "/assets/team/design-cover.jpg"
    },
    "Electrical Team": {
      members: [
        {
          name: "Chris Lee",
          role: "Marketing Manager",
          email: "chris@example.com",
          description: "Marketing and outreach expert.",
          github: "https://github.com/chrislee",
          linkedin: "https://linkedin.com/in/chrislee",
          whatsapp: "https://wa.me/1234567896",
          image: "/images/chris.jpg"
        },
        {
          name: "Lisa Chen",
          role: "Content Writer",
          email: "lisa@example.com",
          description: "Writes engaging content.",
          github: "https://github.com/lisachen",
          linkedin: "https://linkedin.com/in/lisachen",
          whatsapp: "https://wa.me/1234567897",
          image: "/images/lisa.jpg"
        },
      ],
      description: "Our marketing team develops strategic campaigns and creates compelling content that connects with our audience and drives growth for BengalSub.",
      image: "/assets/team/marketing-cover.jpg"
    },
    "Software Team": {
      members: [
        {
          name: "David Kim",
          role: "Customer Support",
          email: "david@example.com",
          description: "Helps our users succeed.",
          github: "https://github.com/davidkim",
          linkedin: "https://linkedin.com/in/davidkim",
          whatsapp: "https://wa.me/1234567898",
          image: "/images/david.jpg"
        },
        {
          name: "Maria Garcia",
          role: "Community Manager",
          email: "maria@example.com",
          description: "Builds our community.",
          github: "https://github.com/mariagarcia",
          linkedin: "https://linkedin.com/in/mariagarcia",
          whatsapp: "https://wa.me/1234567899",
          image: "/images/maria.jpg"
        },
      ],
      description: "Our support team ensures every user receives exceptional assistance and builds a thriving community around BengalSub's mission and values.",
      image: "/assets/team/support-cover.jpg"
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Hyperspeed background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Hyperspeed />
      </div>
      {/* Team content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <PageTitle>Our Team</PageTitle>
        {Object.entries(teamSections).map(([section, data], idx, arr) => (
          <React.Fragment key={section}>
            <Section>
              <SectionTitle>{section}</SectionTitle>
              <SectionContent>
                <DetailCardContainer>
                  <TeamDetailCard
                    sectionName={section}
                    description={data.description}
                    memberCount={data.members.length}
                    image={data.image}
                  />
                </DetailCardContainer>
                <TeamGrid>
                  {data.members.map((member, index) => (
                    <TeamCard
                      key={index}
                      name={member.name}
                      role={member.role}
                      email={member.email}
                      description={member.description}
                      github={member.github}
                      linkedin={member.linkedin}
                      whatsapp={member.whatsapp}
                      image={member.image}
                    />
                  ))}
                </TeamGrid>
              </SectionContent>
            </Section>
            {idx < arr.length - 1 && <SectionDivider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Team; 