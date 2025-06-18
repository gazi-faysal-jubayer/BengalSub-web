import React from 'react';
import styled from 'styled-components';

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
  .book {
    position: relative;
    border-radius: 20px;
    width: 280px;
    height: 350px;
    background: linear-gradient(135deg, #5C5C5CFF 0%, #413730FF 100%);
    box-shadow: 0 10px 30px rgba(145, 94, 255, 0.3);
    transform: preserve-3d;
    perspective: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition-duration: 0.5s;
    margin: 0 auto;
  }

  .cover,
  .inner {
    top: 0;
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100%;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    overflow: hidden;
  }

  .cover {
    z-index: 2;
  }

  .inner {
    z-index: 1;
    transform: translateZ(-1px);
  }

  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
    padding: 2rem;
  }

  .section-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .member-count {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 0.9rem;
    line-height: 1.5;
    opacity: 0.9;
  }
`;

export default TeamDetailCard;
