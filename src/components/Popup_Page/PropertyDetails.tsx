import React, { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Share2,
  MoreHorizontal,
  MapPin,
  BedDouble,
  Bath,
  Wifi,
  ShieldCheck,
  Tv,
  Zap,
  Recycle,
  Phone,
  MessageCircle
} from "lucide-react";

import "./PropertyDetails.css";

type PropertyDetailsProps = {
  data: { image: string; title: string; location: string; price: string };
  onClose: () => void;
};

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ data, onClose }) => {
  const [tab, setTab] = useState("amenities");

  return (
    <div className="popup-overlay">
      <div className="popup-content">

        {/* TOP BAR */}
        <div className="top-bar">
          <button className="back-btn" onClick={onClose}>
            <ArrowLeft size={16} /> Back
          </button>
          <div className="top-actions">
            <Heart className="icon-btn" />
            <Share2 className="icon-btn" />
            <MoreHorizontal className="icon-btn" />
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="image-grid-section">
          <div className="image-grid">
            <img className="big-img" src={data.image} alt={data.title} />
            <img className="small-img" src={data.image} alt={data.title} />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="content">

          {/* LEFT */}
          <div className="left">
            <h1>{data.title}</h1>
            <p className="owner">
              Owned by
              <img src="https://i.pravatar.cc/40" alt="Owner" className="owner-avatar" />
              <strong>Augustine Nuno</strong>
            </p>
            <div className="owner-underline"></div>

            <div className="meta">
              <span><BedDouble size={16} /> 3 Bedroom</span>
              <span><Bath size={16} /> 4 Bathroom</span>
              <span><MapPin size={16} /> {data.location}</span>
            </div>

            {/* Descriptions */}
            <p className="description">
             This destination is conveniently located with excellent connectivity to major transport hubs. The nearest international airport and railway station are within a short drive, making travel smooth for both domestic and international visitors.</p>
            <p className="description">
               Popular tourist attractions, shopping areas, parks, and cultural landmarks are easily accessible, ensuring a comfortable and enjoyable stay for travelers.</p>

            {/* TABS */}
            <div className="tabs">
              <button className={tab === "amenities" ? "active" : ""} onClick={() => setTab("amenities")}>Amenities</button>
              <button className={tab === "measurement" ? "active" : ""} onClick={() => setTab("measurement")}>Measurement</button>
              <button className={tab === "location" ? "active" : ""} onClick={() => setTab("location")}>Location</button>
            </div>
            <div className="owner-underline" style={{ backgroundColor: "grey", height: "1px", width: "100%", marginTop: "4px" }}></div>

            {tab === "amenities" && (
              <div className="amenities">
                <span><Wifi className="green-icon" /> Free WiFi</span>
                <span><Zap className="green-icon" /> Power Supply</span>
                <span><ShieldCheck className="green-icon" /> Security</span>
                <span><Tv className="green-icon" /> Smart TV</span>
                <span><Recycle className="green-icon" /> Medical Support</span>
                <span><Zap className="green-icon" /> Ac/Non Ac</span>
              </div>
            )}

           {tab === "measurement" && (
  <div className="measurement-grid">

    <div className="measure-card">
      <h4>Trip Duration</h4>
      <p>5 – 7 Days</p>
      <span>Ideal for relaxed exploration</span>
    </div>

    <div className="measure-card">
      <h4>Distance Covered</h4>
      <p>320 – 450 km</p>
      <span>Includes local sightseeing</span>
    </div>

    <div className="measure-card">
      <h4>Best Season</h4>
      <p>Oct – March</p>
      <span>Best weather conditions</span>
    </div>

    <div className="measure-card">
      <h4>Climate</h4>
      <p>18°C – 28°C</p>
      <span>Comfortable temperature</span>
    </div>

    <div className="measure-card">
      <h4>Group Size</h4>
      <p>2 – 10 People</p>
      <span>Small & guided groups</span>
    </div>

    <div className="measure-card">
      <h4>Difficulty Level</h4>
      <p>Easy – Moderate</p>
      <span>Suitable for all travelers</span>
    </div>

  </div>
)}
{tab === "location" && (
  <div className="location-list">

    <div className="location-item">
      <strong>Nearest Airport</strong>
      <span>International Airport – 18 km</span>
    </div>

    <div className="location-item">
      <strong>Railway Station</strong>
      <span>Main Railway Station – 12 km</span>
    </div>

    <div className="location-item">
      <strong>Bus Terminal</strong>
      <span>Central Bus Stand – 6 km</span>
    </div>

    <div className="location-item">
      <strong>Popular Tourist Spots</strong>
      <span>Beach, City Museum, Old Town – within 5 km</span>
    </div>

    <div className="location-item">
      <strong>Resorts & Hotels</strong>
      <span>Luxury Beach Resort – 3 km</span>
    </div>

    <div className="location-item">
      <strong>Hospitals</strong>
      <span>Multi-Specialty Hospital – 4 km</span>
    </div>

    <div className="location-item">
      <strong>Parks & Recreation</strong>
      <span>Central Park & Waterfront – 2 km</span>
    </div>

  </div>
)}

          </div>

          {/* RIGHT */}
          <div className="right">
            {/* PRICE CARD */}
            <div className="price-card">
              <h2>{data.price} <span>/day</span></h2>
              <div className="duration-range">
                <label>
                  
                  <input type="text" className="duration-input" placeholder="Select duration (e.g. 06-02-2026 to 10-02-2026)" />
                </label>
              </div>
              <div className="price-btns">
                <button className="white-btn">View</button>
                <button className="green-btn">Rent Travel</button>
              </div>
              <div className="price-bg-box">
                <div className="price-info">
                  <p>Apartment Fee <span>{data.price}</span></p>
                  <p>Service Fee <span>₹120</span></p>
                  <p>Total Fee <span>₹2010</span></p>
                </div>
              </div>
            </div>

            {/* OWNER CARD */}
            <div className="owner-card">
              <img src="https://i.pravatar.cc/100" alt="Owner" />
              <div className="owner-info">
                <strong>Augustine Nuno</strong>
                <p>Owner</p>
                <div className="owner-underline"></div>
              </div>
              <div className="contact-icons">
                <MessageCircle className="icon-btn" />
                <Phone className="icon-btn" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
