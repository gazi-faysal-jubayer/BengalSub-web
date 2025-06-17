import React from 'react';
import styled from 'styled-components';
import TeamCard from './TeamCard';

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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Team = () => {
  // Team members data organized by sections
  const teamSections = {
    "Leadership": [
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
    "Development": [
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
    "Design": [
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
    "Marketing": [
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
    "Support": [
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
    ]
  };

  return (
    <TeamContainer>
      <PageTitle>Our Team</PageTitle>
      {Object.entries(teamSections).map(([section, members]) => (
        <Section key={section}>
          <SectionTitle>{section}</SectionTitle>
          <TeamGrid>
            {members.map((member, index) => (
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
        </Section>
      ))}
    </TeamContainer>
  );
};

export default Team; 