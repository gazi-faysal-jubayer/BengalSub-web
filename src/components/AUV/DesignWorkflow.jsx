import React from "react";
import CircularGallery from "./CircularGallery";

const designImages = [
  { image: "/assets/design/1 iso.jpg", text: "Isometric View 1" },
  { image: "/assets/design/2 top.jpg", text: "Top View" },
  { image: "/assets/design/3 iso.jpg", text: "Isometric View 2" },
  { image: "/assets/design/4 back.jpg", text: "Back View 1" },
  { image: "/assets/design/5 electronics hull.jpg", text: "Electronics Hull" },
  { image: "/assets/design/6 hull electronics.jpg", text: "Hull Electronics" },
  { image: "/assets/design/7 gripper.jpg", text: "Gripper" },
  { image: "/assets/design/8 back.jpg", text: "Back View 2" },
  { image: "/assets/design/9 marker_droper1.jpg", text: "Marker Dropper 1" },
  { image: "/assets/design/10 marker_droper2.jpg", text: "Marker Dropper 2" },
  { image: "/assets/design/cut plot2.jpg", text: "Cut Plot 2" },
  { image: "/assets/design/cut plots.jpg", text: "Cut Plots" },
  { image: "/assets/design/flow_trajectory.jpg", text: "Flow Trajectory 1" },
  { image: "/assets/design/flow_trajectory2.jpg", text: "Flow Trajectory 2" },
  { image: "/assets/design/flow_trajectory3.jpg", text: "Flow Trajectory 3" },
  { image: "/assets/design/main frame.jpg", text: "Main Frame" },
  { image: "/assets/design/strength for Al frame1.jpg", text: "Strength for Al Frame 1" },
  { image: "/assets/design/strength for Al frame2 _highest_bending.jpg", text: "Strength for Al Frame 2 (Bending)" },
  { image: "/assets/design/strength for Al frame2 _highest_ESTRN.jpg", text: "Strength for Al Frame 2 (ESTRN)" },
  { image: "/assets/design/torpedo 1.jpg", text: "Torpedo 1" },
  { image: "/assets/design/torpedo2.jpg", text: "Torpedo 2" },
  { image: "/assets/design/torpedo launcher.jpg", text: "Torpedo Launcher" },
];

const DesignWorkflow = ({ images = designImages }) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-zinc-100">Design Photo Gallery</h3>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery items={images} bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </div>
  );
};

export default DesignWorkflow; 