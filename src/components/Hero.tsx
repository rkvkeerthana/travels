import React from "react";
import "../css/Hero.css";
import mountainImg from "../assets/beautiful-landscape-with-blue-sky.jpg.jpeg";

const Hero: React.FC = () => {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight = 80;
    const top =
      section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="hero"
      style={{
        backgroundImage: `url(${mountainImg})`,
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Devbeans</div>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("services")}>Our Services</li>
          <li onClick={() => scrollToSection("explore")}>Explore</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <button className="nav-btn">Book Now</button>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>
          Adventure Starts With <br /> Your Journey
        </h1>

        <p>
          Discover breathtaking destinations and unforgettable travel
          experiences.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
        </div>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <div className="search-item">
          <label>Select Tour Place</label>
          <input type="text" placeholder="Jakarta" />
        </div>

        <div className="search-item">
          <label>Check in</label>
          <input type="date" />
        </div>

        <div className="search-item">
          <label>Check out</label>
          <input type="date" />
        </div>

        <div className="search-item">
          <label>Travelers</label>
          <input type="number" placeholder="2" />
        </div>

        <button className="search-btn">Plan Trip</button>
      </div>
    </section>
  );
};

export default Hero;
