import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./popularDestination.css";

// Import your images
import greenNature from "../../assets/green-nature.jpg";
import forestLake from "../../assets/green-nature-1.jpg";
import mountainSunset from "../../assets/Green_countryside.jpg";

type Destination = {
  title: string;
  description: string;
  rating: number;
  image: string; // add image field
};

const destinations: Destination[] = [
  {
    title: "Sandstone Valleys",
    description:
      "Peaceful untouched landscapes with stunning rock formations. Ideal for hiking and photography.",
    rating: 4.5,
    image: greenNature,
  },
  {
    title: "Crystal Lake",
    description:
      "A serene lake surrounded by forests. Perfect for boating and nature photography.",
    rating: 4.8,
    image: forestLake,
  },
  {
    title: "Sunset Cliffs",
    description:
      "Breathtaking cliffs with panoramic ocean views. Great for sunsets and adventure lovers.",
    rating: 4.7,
    image: mountainSunset,
  },
];

const PopularDestination: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current < destinations.length - 1) setCurrent(current + 1);
  };

  const destination = destinations[current];

  return (
    <section className="popular">
      <div className="popular-header">
        <h2>Popular destinations</h2>
        <div className="arrows">
          <button
            className="arrow"
            onClick={prevSlide}
            disabled={current === 0}
          >
            <FaChevronLeft />
          </button>
          <button
            className="arrow"
            onClick={nextSlide}
            disabled={current === destinations.length - 1}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        className="destination-card"
        style={{
          background: `url(${destination.image}) center / cover no-repeat`,
        }}
      >
        <div className="destination-content">
          <h3>
            {destination.title} Rating: {destination.rating}
          </h3>
          <p>{destination.description}</p>
          <button type="button">View tour</button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
