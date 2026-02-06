import React from "react";
import travelImg from "../assets/22.jpg";

const RightContent: React.FC = () => {
  return (
    <div className="story-right">
      <div className="tabs">
        <button className="active">Travel</button>
        <button>Tourism</button>
        <button>Best Place</button>
      </div>

      <div className="right-content">
        <img src={travelImg} alt="boat travel" />

        <div className="right-text">
          <h3>
            We Believe That Travel Is More Than Just Visiting A New Place — It’s
            About Creating Lasting Memories
          </h3>

          <p>
            You never know the world’s wonders unless you’ve explored places
            within our beautiful country.
          </p>

          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
