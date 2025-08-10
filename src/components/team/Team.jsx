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
    "Honorary Advisor": {
      members: [
        {
          name: "Mr. Shish Haider Chowdhury",
          role: "Honorary Advisor",
          email: "secretary@ict.gov.bd",
          description: "Secretary, ICT Division",
          github: "NULL",
          linkedin: "https://www.linkedin.com/in/shish-haider-chowdhury-ndc-mcips-cs-44ba0069?originalSubdomain=bd",
          whatsapp: "https://wa.me/8801819225594",
          image: "/assets/team/0.png"
        },
      ],
      description: "Our leadership team drives the vision and strategy of BengalSub, ensuring we deliver exceptional value to our users while maintaining the highest standards of quality and innovation.",
      image: "/assets/team/honorary-advisor.png"
    },
    "Advisor Panel": {
      members: [
        {
          name: "Rasel Ahmed",
          role: "Advisor",
          email: "raselahmedcse2012@gmail.com",
          description: "Assistant Professor, Dept. Of ICT, Dhaka Residential Model College",
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
          github: "NULL",
          linkedin: "https://www.linkedin.com/in/engr-md-golam-kader-90502627",
          whatsapp: "https://wa.me/8801714002300",
          image: "/assets/team/7.png"
        },
        {
          name: "Jahedul Hoque",
          role: "Advisor",
          email: "jahed.drmc@gmail.com",
          description: "Associate Professor, Dept. of Chemistry, Dhaka Residential Model College",
          github: "NULL",
          linkedin: "NULL",
          image: "/assets/team/6.png"
        },
      ],
      description: "Our leadership team drives the vision and strategy of BengalSub, ensuring we deliver exceptional value to our users while maintaining the highest standards of quality and innovation.",
      image: "/assets/team/advisors.png"
    },
    "Mentor Panel": {
      members: [
        {
          name: "MD. Asique Iqbal",
          role: "Mentor",
          email: "asique.iqbaldrmc@gmail.com",
          description: "Assistant Professor, Dept. of ICT, Dhaka Residential Model College",
          github: "NULL",
          linkedin: "NULL",
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
    "Team Leads": {
      members: [
        {
          name: "Md Toslim",
          role: "Team Leader",
          email: "miraztoslim111@gmail.com",
          description: "Student, Department of Mechatronics Engineering, KUET, Bangladesh",
          github: "NULL",
          linkedin: "https://www.linkedin.com/in/miraztoslim99 ",
          whatsapp: "https://wa.me/8801700977464",
          image: "/assets/team/17.png"
        },
        {
          name: "Sudipto Mondal",
          role: "Team Co- Lead and Electrical Lead",
          email: "sudipto3331@gmail.com",
          description: "Student, Department of ETE, RUET, Bangladesh",
          github: "https://github.com/sudipto3331",
          linkedin: "https://www.linkedin.com/in/sudipto3331/",
          whatsapp: "https://wa.me/8801735493331",
          image: "/assets/team/23.png"
        },
        {
          name: "Md Masrul Khan",
          role: "Mechanical Team Lead",
          email: "masrulkhan2020@gmail.com",
          description: "Student, Department of Mechatronics Engineering, KUET",
          github: "https://github.com/md-masrul-khan",
          linkedin: "linkedin.com/in/md-masrul-khan-50b9a91b6",
          whatsapp: "https://wa.me/8801636414084",
          image: "/assets/team/20.png"
        },
        {
          name: "Khondokar Radwanur Rahman",
          role: "Software Team Lead",
          email: "radwankhondokar20@gmail.com",
          description: "Student, Department of Electrical and Computer Engineering, RUET",
          github: "https://github.com/rakukanteki",
          linkedin: "https://www.linkedin.com/in/khradwan",
          whatsapp: "https://wa.me/8801834277119",
          image: "/assets/team/19.png"
        },
        {
          name: "Ariyan Siddique",
          role: "Electrical Team Co-Lead",
          email: "ariyan29sr@gmail.com",
          description: "Student, Department of Electrical and Electronic Engineering, AUST",
          github: "https://github.com/aaariyann",
          linkedin: "https://www.linkedin.com/in/aaariyan21",
          whatsapp: "https://wa.me/8801890318552",
          image: "/assets/team/25.png"
        },
        {
          name: "A.K.M Faiaz",
          role: "Documentation Team Lead",
          email: "faiazjuhan@gmail.com",
          description: "Student at Dhaka Residential Model College",
          github: "NULL",
          linkedin: "www.linkedin.com/in/faiaz-juhan-6b9746370",
          whatsapp: "https://wa.me/8801757330040",
          image: "/assets/team/8.png"
        },
      ],
      description: "Our development team builds robust, scalable solutions using cutting-edge technologies to create seamless user experiences and powerful backend systems.",
      image: "/assets/team/leads.png"
    },
    "Mechanical Team": {
      members: [
        {
          name: "Md Masrul Khan",
          role: "Mechanical Team Lead",
          email: "masrulkhan2020@gmail.com",
          description: "Student, Department of Mechatronics Engineering, KUET",
          github: "https://github.com/md-masrul-khan",
          linkedin: "linkedin.com/in/md-masrul-khan-50b9a91b6",
          whatsapp: "https://wa.me/8801636414084",
          image: "/assets/team/20.png"
        },
        {
          name: "Md Toslim",
          role: "Member",
          email: "miraztoslim111@gmail.com",
          description: "Student, Department of Mechatronics Engineering, KUET, Bangladesh",
          github: "NULL",
          linkedin: "https://www.linkedin.com/in/miraztoslim99 ",
          whatsapp: "https://wa.me/8801700977464",
          image: "/assets/team/17.png"
        },
        {
          name: "An Nafew",
          role: "Member",
          email: "annafewdrmc@gmail.com",
          description: "Chief Executive Officer and Project Manager at Team BengalSub",
          github: "NULL",
          linkedin: "https://www.linkedin.com/in/an-nafew-72053a254 ",
          whatsapp: " https://wa.me/8801886892326",
          image: "/assets/team/1.png"
        },
        {
          name: "Samim Ahnaf Tahmid",
          role: "Member",
          email: "ahanafsamim@gmail.com",
          description: "Senior Officer at Tech Autocrats and Student at Dhaka Residential Model College",
          github: "NULL",
          linkedin: "https://www.linkedin.com/in/samim-ahanaf-77b018333",
          whatsapp: "https://wa.me/8801841155887",
          image: "/assets/team/14.png"
        },
        {
          name: "Md. Tanvir Rahman Saad ",
          role: "Member",
          email: "tanvirrahmansaad15@gmail.com",
          description: "Senior Officer at Tech Autocrats and Student at Dhaka Residential Model College",
          github: "NULL",
          linkedin: "https://www.linkedin.com/in/tanvir-rahman-saad-018958272 ",
          whatsapp: "https://wa.me/8801944350519",
          image: "/assets/team/12.png"
        },
        {
          name: "Sanjeed Rahman",
          role: "Member",
          email: "sanjeeddrmc@gmail.com",
          description: "Cheif Operating Officer at Tech Autocrats and Student at Dhaka Residential Model College",
          github: "NULL",
          linkedin: "NULL",
          whatsapp: "https://wa.me/8801709747050",
          image: "/assets/team/13.png"
        },
      ],
      description: "Our design team creates visually stunning and intuitive interfaces that enhance user experience and bring our vision to life through creative and innovative design solutions.",
      image: "/assets/team/mechanical.png"
    },
    "Electrical Team": {
      members: [
        {
          name: "Sudipto Mondal",
          role: "Electrical Team Lead",
          email: "sudipto3331@gmail.com",
          description: "Student, Department of ETE RUET, Bangladesh",
          github: "https://github.com/sudipto3331",
          linkedin: "https://www.linkedin.com/in/sudipto3331/",
          whatsapp: "https://wa.me/8801735493331",
          image: "/assets/team/23.png"
        },
        {
          name: "Ariyan Siddique",
          role: "Electrical Team Co-Lead",
          email: "ariyan29sr@gmail.com",
          description: "Student, Department of Electrical and Electronic Engineering, AUST",
          github: "https://github.com/aaariyann",
          linkedin: "https://www.linkedin.com/in/aaariyan21",
          whatsapp: "https://wa.me/8801890318552",
          image: "/assets/team/25.png"
        },
        {
          name: "Hasin Israque Chowdhury Taha",
          role: "Member",
          email: "tahahasin0@gmail.com",
          description: "Chief Technology Officer",
          github: "https://github.com/Taha-the-coder",
          linkedin: "https://www.linkedin.com/in/hasin-israque-chowdhury-taha-b47173360",
          whatsapp: " https://wa.me/8801814223746",
          image: "/assets/team/3.png"
        },
        {
          name: "Muaz Ibn Bashar",
          role: "Member",
          email: "muazdrmc17854@gmail.com",
          description: "Student at Dhaka Residential Model College",
          github: "NULL",
          linkedin: "NULL",
          whatsapp: "NULL",
          image: "/assets/team/22.png"
        },
      ],
      description: "Our marketing team develops strategic campaigns and creates compelling content that connects with our audience and drives growth for BengalSub.",
      image: "/assets/team/electrical.png"
    },
    "Software Team": {
      members: [
        {
          name: "Khondokar Radwanur Rahman",
          role: "Software Team Lead",
          email: "radwankhondokar20@gmail.com",
          description: "Student, Department of Electrical and Computer Engineering, RUET",
          github: "https://github.com/rakukanteki",
          linkedin: "https://www.linkedin.com/in/khradwan",
          whatsapp: "https://wa.me/8801834277119",
          image: "/assets/team/19.png"
        },
        {
          name: "Gazi Faysal Jubayer",
          role: "Website Developer",
          email: "gazi.faysal.jubayer@gmail.com",
          description: "Student, Department of Mechanical Engineering, KUET, Bangladesh",
          github: "https://github.com/gazi-faysal-jubayer",
          linkedin: "https://linkedin.com/in/gazi-faysal-jubayer",
          whatsapp: "https://wa.me/8801315669261",
          image: "/assets/team/11.png"
        },
        {
          name: "Fatin Al Habib Nafis",
          role: "Member",
          email: "nafishabib360@gmail.com",
          description: "Student at Mastermind English Medium School",
          github: "https://github.com/nafis-exe",
          linkedin: "https://www.linkedin.com/in/fatin-al-habib-nafis/",
          whatsapp: "https://wa.me/8801707082489",
          image: "/assets/team/24.png"
        },
        {
          name: "Rubaiyat H Rahman",
          role: "Member",
          email: "rubaiyathrahman.robo@gmail.com",
          description: "Managing Director",
          github: "https://github.com/Rubaiyat29",
          linkedin: "https://www.linkedin.com/in/rubaiyat-h-rahman-10211a263",
          whatsapp: " https://wa.me/8801827131041",
          image: "/assets/team/2.png"
        },
      ],
      description: "Our support team ensures every user receives exceptional assistance and builds a thriving community around BengalSub's mission and values.",
      image: "/assets/team/software.png"
    },
    "Documentation Team": {
      members: [
        {
          name: "A.K.M Faiaz",
          role: "Documentation Team Lead",
          email: "faiazjuhan@gmail.com",
          description: "Student at Dhaka Residential Model College",
          github: "NULL",
          linkedin: "www.linkedin.com/in/faiaz-juhan-6b9746370",
          whatsapp: "https://wa.me/8801757330040",
          image: "/assets/team/8.png"
        },
        {
          name: "Ahnaf Safwan Islam",
          role: "Member",
          email: "ahnafislam059@gmail.com",
          description: "Student at Dhaka Residential Model College",
          github: "NULL",
          linkedin: "NULL",
          whatsapp: "https://wa.me/8801745993311",
          image: "/assets/team/21.png"
        },
        {
          name: "Jarar Mahbir Jahedi", 
          role: "Member",
          email: "corgsacorgsa@gmail.com",
          description: "Student at Dhaka Residential Model College",
          github: "NULL",
          linkedin: "NULL",
          whatsapp: "https://wa.me/8801971166328",
          image: "/assets/team/15.png"
        },
        {
          name: "MD.Mahdi Islam", 
          role: "Member",
          email: "mahdimridul@gmail.com",
          description: "Student at Dhaka Residential Model College",
	        github: "NULL",
	        linkedin: "NULL",
        	  whatsapp: "https://wa.me/8801628551654",
          image: "/assets/team/18.png"
        },
      ],
      description: "Our support team ensures every user receives exceptional assistance and builds a thriving community around BengalSub's mission and values.",
      image: "/assets/team/documentation.png"
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