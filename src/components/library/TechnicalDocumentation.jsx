import React, { useState } from 'react';
import styled from 'styled-components';

const TDR_TITLE = 'Technical Design Report of Hangor 1.0, An Autonomous Underwater Vehicle';
const TDR_AUTHORS = [
  'Sudipto Mondal', 'Md Masrul Khan', 'Khondokar Radwanur Rahman', 'Md Toslim', 'Ariyan Siddique', 'Fatin Al Habib Nafis', 'An Nafew', 'Rubaiyat H Rahman', 'Hasin Israque', 'Gazi Faysal Jubayer', 'Muaz Ibn Bashar', 'Ahnaf Safwan Islam', 'Mohammad Sanjeed Rahman', 'Akm Faiaz', 'Md Tanvir Rahman', 'Md. Golam Kader', 'Rasel Ahmed'
];
const TDR_ABSTRACT = `Team BengalSub proudly marks the debut in the RoboSub 2025 competition with an ingeniously designed and fully fabricated Hangor, autonomous underwater vehicle (HAUV). Built from precision-cut aluminum sheet and custom-developed watertight enclosures, HAUV reflects a commitment to innovation, resilience, and hands-on engineering. As a first-time participant, team HAUV navigated numerous technical and logistical challenges—from limited local access to specialized components to resource constraints and the steep learning curve of underwater autonomy. Despite these barriers, multidisciplinary team HAUV successfully integrated mechanical, electrical, and software subsystems into a robust and modular platform capable of executing complex underwater tasks. The vehicle features a vision-based navigation system, a compact and hydrodynamic frame, and sealed electronics housing tested for pressure resilience. The development journey emphasizes rapid prototyping, iterative design validation, and adaptive problem-solving in a low-resource setting. By participating in RoboSub 2025, team HAUV aim not only to gain critical exposure to advanced global robotics but also to demonstrate the rising capabilities of Bangladesh in marine technology. BengalSub represents a leap toward localized innovation, with ambitions to contribute to the national ecosystem in environmental monitoring, and STEM inspiration.`;

const PDF_URL = '/assets/docs/TDR_TechAutocrats_RS2025.pdf';

const StyledWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  .button {
    --h-button: 48px;
    --w-button: 160px;
    --round: 0.75rem;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.25s ease;
    background: radial-gradient(
        65.28% 65.28% at 50% 100%,
        rgba(223, 113, 255, 0.8) 0%,
        rgba(223, 113, 255, 0) 100%
      ),
      linear-gradient(0deg, #7a5af8, #7a5af8);
    border-radius: var(--round);
    border: none;
    outline: none;
    padding: 12px 24px;
    min-width: var(--w-button);
    min-height: var(--h-button);
    font-size: 1rem;
  }
  .button::before,
  .button::after {
    content: "";
    position: absolute;
    inset: var(--space);
    transition: all 0.5s ease-in-out;
    border-radius: calc(var(--round) - var(--space));
    z-index: 0;
  }
  .button::before {
    --space: 1px;
    background: linear-gradient(
      177.95deg,
      rgba(255, 255, 255, 0.19) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .button::after {
    --space: 2px;
    background: radial-gradient(
        65.28% 65.28% at 50% 100%,
        rgba(223, 113, 255, 0.8) 0%,
        rgba(223, 113, 255, 0) 100%
      ),
      linear-gradient(0deg, #7a5af8, #7a5af8);
  }
  .button:active {
    transform: scale(0.95);
  }
  .fold {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    height: 1rem;
    width: 1rem;
    display: inline-block;
    transition: all 0.5s ease-in-out;
    background: radial-gradient(
      100% 75% at 55%,
      rgba(223, 113, 255, 0.8) 0%,
      rgba(223, 113, 255, 0) 100%
    );
    box-shadow: 0 0 3px black;
    border-bottom-left-radius: 0.5rem;
    border-top-right-radius: var(--round);
  }
  .fold::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 150%;
    height: 150%;
    transform: rotate(45deg) translateX(0%) translateY(-18px);
    background-color: #e8e8e8;
    pointer-events: none;
  }
  .button:hover .fold {
    margin-top: -1rem;
    margin-right: -1rem;
  }
  .points_wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }
  .points_wrapper .point {
    bottom: -10px;
    position: absolute;
    animation: floating-points infinite ease-in-out;
    pointer-events: none;
    width: 2px;
    height: 2px;
    background-color: #fff;
    border-radius: 9999px;
  }
  @keyframes floating-points {
    0% { transform: translateY(0); }
    85% { opacity: 0; }
    100% { transform: translateY(-55px); opacity: 0; }
  }
  .points_wrapper .point:nth-child(1) { left: 10%; opacity: 1; animation-duration: 2.35s; animation-delay: 0.2s; }
  .points_wrapper .point:nth-child(2) { left: 30%; opacity: 0.7; animation-duration: 2.5s; animation-delay: 0.5s; }
  .points_wrapper .point:nth-child(3) { left: 25%; opacity: 0.8; animation-duration: 2.2s; animation-delay: 0.1s; }
  .points_wrapper .point:nth-child(4) { left: 44%; opacity: 0.6; animation-duration: 2.05s; }
  .points_wrapper .point:nth-child(5) { left: 50%; opacity: 1; animation-duration: 1.9s; }
  .points_wrapper .point:nth-child(6) { left: 75%; opacity: 0.5; animation-duration: 1.5s; animation-delay: 1.5s; }
  .points_wrapper .point:nth-child(7) { left: 88%; opacity: 0.9; animation-duration: 2.2s; animation-delay: 0.2s; }
  .points_wrapper .point:nth-child(8) { left: 58%; opacity: 0.8; animation-duration: 2.25s; animation-delay: 0.2s; }
  .points_wrapper .point:nth-child(9) { left: 98%; opacity: 0.6; animation-duration: 2.6s; animation-delay: 0.1s; }
  .points_wrapper .point:nth-child(10) { left: 65%; opacity: 1; animation-duration: 2.5s; animation-delay: 0.2s; }
  .inner {
    z-index: 2;
    gap: 6px;
    position: relative;
    width: 100%;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    transition: color 0.2s ease-in-out;
  }
  .inner svg.icon {
    width: 18px;
    height: 18px;
    transition: fill 0.1s linear;
  }
  .button:focus svg.icon {
    fill: white;
  }
  .button:hover svg.icon {
    fill: transparent;
    animation:
      dasharray 1s linear forwards,
      filled 0.1s linear forwards 0.95s;
  }
  @keyframes dasharray {
    from { stroke-dasharray: 0 0 0 0; }
    to { stroke-dasharray: 68 68 0 0; }
  }
  @keyframes filled {
    to { fill: white; }
  }
`;

const AnimatedButton = ({ label, icon, onClick, as, href, download }) => (
  <button
    type="button"
    className="button"
    as={as}
    href={href}
    download={download}
    onClick={onClick}
  >
    <span className="fold" />
    <div className="points_wrapper">
      {Array.from({ length: 10 }).map((_, i) => (
        <i className="point" key={i} />
      ))}
    </div>
    <span className="inner">
      {icon}
      {label}
    </span>
  </button>
);

const DownloadIcon = (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
    <path d="M12 3v14" />
    <polyline points="6 13 12 19 18 13" />
    <line x1="6" y1="21" x2="18" y2="21" />
  </svg>
);

const ViewIcon = (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const TechnicalDocumentation = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center py-16 px-4 pt-32">
      <div className="max-w-5xl w-full bg-zinc-900 rounded-2xl shadow-xl p-8 mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-center mb-2 text-zinc-100">{TDR_TITLE}</h1>
        <div className="text-center text-zinc-400 text-base mb-4">
          {TDR_AUTHORS.join(', ')}
        </div>
        <div className="italic text-zinc-300 text-justify mb-6">
          <span className="font-bold">Abstract — </span>{TDR_ABSTRACT}
        </div>
        <StyledWrapper>
          <a href={PDF_URL} download style={{ textDecoration: 'none' }}>
            <AnimatedButton label="Download TDR" icon={DownloadIcon} as="a" href={PDF_URL} download />
          </a>
          <AnimatedButton label="View Full TDR" icon={ViewIcon} onClick={() => setShowPreview(true)} />
        </StyledWrapper>
      </div>
      {showPreview && (
        <div className="w-full max-w-5xl bg-zinc-900 rounded-2xl shadow-2xl p-4 mb-10 flex flex-col items-center">
          <div className="w-full flex justify-end mb-2">
            <button
              className="text-zinc-300 hover:text-red-400 font-bold text-lg px-3 py-1 rounded transition"
              onClick={() => setShowPreview(false)}
            >
              Close
            </button>
          </div>
          <iframe
            src={PDF_URL}
            title="TDR PDF Preview"
            className="w-full h-[85vh] rounded-lg border border-zinc-700"
          />
        </div>
      )}
    </div>
  );
};

export default TechnicalDocumentation; 