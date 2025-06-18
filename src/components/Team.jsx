import React from 'react';
import styled from 'styled-components';
import TeamCard from './TeamCard';
import TeamDetailCard from './TeamDetailCard';

const TeamContainer = styled.div`
  padding: 8rem 2rem 4rem;
  background: #0a0a0a;
  min-height: 100vh;
`;

const PageTitle = styled.h1`
  color: white;
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, #915EFF 0%, #FF8E53 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Section = styled.div`
  margin-bottom: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
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
  
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DetailCardContainer = styled.div`
  flex: 2;
  max-width: 500px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 1200px) {
    margin-bottom: 2rem;
    max-width: 280px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  flex: 3;
  justify-content: center;
  justify-items: center;
`;

const Team = () => {
  // Team members data organized by sections with additional metadata
  const teamSections = {
    "Mentors": {
      members: [
        {
          name: "John Doe",
          role: "CEO",
          email: "john@example.com",
          description: "Visionary leader and founder.",
          github: "https://github.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          whatsapp: "https://wa.me/1234567890",
          image: "/assets/team/gazi.jpg"
        },
        {
          name: "Jane Smith",
          role: "CTO",
          email: "jane@example.com",
          description: "Tech enthusiast and architect.",
          github: "https://github.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
          whatsapp: "https://wa.me/1234567891",
          image: "/images/jane.jpg"
        },
      ],
      description: "Our leadership team drives the vision and strategy of BengalSub, ensuring we deliver exceptional value to our users while maintaining the highest standards of quality and innovation.",
      image: "/assets/team/mentors.png"
    },
    "Development": {
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
    "Design": {
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
    "Marketing": {
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
    "Support": {
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
    <TeamContainer>
      <PageTitle>Our Team</PageTitle>
      {Object.entries(teamSections).map(([section, data]) => (
        <Section key={section}>
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
      ))}
    </TeamContainer>
  );
};

export default Team; 