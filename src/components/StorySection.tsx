import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import "../css/storysession.css";

const StorySection: React.FC = () => {
  return (
    <section className="story">
      <LeftContent />
      <RightContent />
    </section>
  );
};

export default StorySection;
