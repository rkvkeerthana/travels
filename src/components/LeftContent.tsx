import React from "react";
import travelImg from "../assets/TAL-viewpoint-pacific-coast-highway-california-NO1RT0824-0cef3f8952b84f02b586461f5076c7b3.jpg";
const LeftContent: React.FC = () => {
  return (
    <div className="story-left">
      <h1>
        Our Story: Driven By <br />
        Wanderlust, Powered By <br />
        Experience
      </h1>

      <div className="left-card">
        <img src={travelImg} alt="travel" />
      </div>

      <p className="left-text">
        We are committed to providing exceptional service and making every
        journey memorable. Join us as we turn your travel aspirations into
        reality.
      </p>
    </div>
  );
};

export default LeftContent;
