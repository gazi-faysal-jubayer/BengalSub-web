import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
`;

const TeamDetailCard = ({ sectionName, description, memberCount, image }) => {
  return (
    <StyledWrapper>
      <div className="book">
        <div className="cover">
          <img src={image} alt={sectionName} className="cover-image" />
        </div>
        <div className="inner">
          <div className="content">
            <h3 className="section-name">{sectionName}</h3>
            <p className="member-count">{memberCount} Members</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  animation: ${fadeIn} 1.2s cubic-bezier(0.23, 1, 0.32, 1);
  .book {
    position: relative;
    border-radius: 28px;
    width: 280px;
    height: 350px;
    background: linear-gradient(135deg, #656565FF 0%, #FF8E53 100%);
    box-shadow: 0 12px 40px 0 rgba(145, 94, 255, 0.18), 0 2px 8px 0 rgba(0,0,0,0.08);
    transform: preserve-3d;
    perspective: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition-duration: 0.5s;
    margin: 0 auto;
    border: 1.5px solid rgba(255,255,255,0.18);
    backdrop-filter: blur(16px);
    overflow: visible;
  }

  .cover,
  .inner {
    top: 0;
    position: absolute;
    background: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(12px);
    width: 100%;
    height: 100%;
    border-radius: 28px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 0 6px 24px 0 rgba(145, 94, 255, 0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid rgba(255, 255, 255, 0.18);
    overflow: hidden;
  }

  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 28px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
  }

  .cover {
    z-index: 2;
  }

  .inner {
    z-index: 1;
    transform: translateZ(-1px);
  }

  .book:hover .cover {
    transition: all 0.5s;
    transform: rotatey(-70deg);
    z-index: 1;
  }

  .book:hover .inner {
    transition: all 0.5s;
    transform: rotateZ(10deg) rotateX(-3deg) rotateY(-10deg) translateX(140px) translateZ(0);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    z-index: 2;
  }

  .book:hover {
    transform: rotateZ(-10deg);
  }

  .content {
    text-align: center;
    padding: 2.2rem 1.2rem 1.2rem 1.2rem;
  }

  .section-name {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    letter-spacing: 0.5px;
  }

  .member-count {
    font-size: 1.05rem;
    opacity: 0.85;
    margin-bottom: 1rem;
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    font-weight: 500;
  }

  .description {
    font-size: 0.98rem;
    line-height: 1.6;
    opacity: 0.93;
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    font-weight: 400;
  }
`;

export default TeamDetailCard;
