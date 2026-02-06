import React from "react";
import "./JourneyCTA.css";

const images = [
  "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg",
  "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?crop=entropy&cs=tinysrgb&fit=max&h=600&w=1000",
  "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg",
  "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
  "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
];

const JourneyCTA: React.FC = () => {
  return (
    <section className="journey">
      <h2>
        Ready To Embark On The Journey <br /> Of A Lifetime?
      </h2>

      <p>
        Get your visa, plan your tour package & explore the world with us. From
        the best deals to memorable travel experiences.
      </p>

      <button className="journey-btn">Book Your Tour</button>

      <div className="journey-images">
        {images.map((img, index) => (
          <div key={index} className={`image-card card-${index % 2}`}>
            <img src={img} alt="travel" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneyCTA;
