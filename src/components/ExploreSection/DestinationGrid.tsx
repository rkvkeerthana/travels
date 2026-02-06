import React, { useState } from "react";
import DestinationCard from "./DestinationCard";
import PropertyDetails from "../Popup_Page/PropertyDetails"; // popup component

import paris from "../../assets/paris.jpg";
import greece from "../../assets/greece.jpg";
import machu from "../../assets/machu.jpg";
import rome from "../../assets/rome.jpg";
import reef from "../../assets/reef.jpg";
import dubai from "../../assets/dubai.jpg";

const destinations = [
  { image: paris, title: "Eiffel Tower & Louvre Museum", location: "Paris, France", price: "$3,500" },
  { image: greece, title: "Ancient Temples & Oldtown Districts", location: "Athens, Greece", price: "$4,000" },
  { image: machu, title: "Lost City Of Machu Picchu", location: "Cusco Region, Peru", price: "$2,000" },
  { image: rome, title: "Colosseum & Roman Forum", location: "Rome, Italy", price: "$1,500" },
  { image: reef, title: "Great Barrier Reef Marine Park", location: "Queensland, Australia", price: "$2,000" },
  { image: dubai, title: "Burj Khalifa & The Palm", location: "Dubai, UAE", price: "$7,000" },
];

const DestinationGrid: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const handleCardClick = (property: any) => {
    setSelectedProperty(property); // open popup
  };

  const closePopup = () => {
    setSelectedProperty(null); // close popup
  };

  return (
    <div className="explore">
      <div className="grid">
        {destinations.map((item, index) => (
          <div key={index} onClick={() => handleCardClick(item)} style={{ cursor: "pointer" }}>
            <DestinationCard {...item} />
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedProperty && (
        <PropertyDetails data={selectedProperty} onClose={closePopup} />
      )}
    </div>
  );
};

export default DestinationGrid;
