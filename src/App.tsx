import Hero from "./components/Hero";
import Stats from "./components/stats/Stats";
import PopularDestination from "./components/PopularDestination/PopularDestination";
import Services from "./components/Services/Services";
import Packages from "./components/Packages";
/*import Testimonials from "./components/Testimonials";*/
import StorySection from "./components/StorySection";
import ExploreSection from "./components/ExploreSection/ExploreSection";
import ReviewsSection from "./components/ReviewsSection";
import StepsSection from "./components/YourDreams/StepsSection";
import Footer from "./components/Footer/Footer";
import JourneyCTA from "./components/Journey/JourneyCTA";
import TrustSection from "./components/Trust/TrustSection";
import "./App.css";
/*import PropertyDetails from "./components/Popup_Page/PropertyDetails";*/

function App() {
  return (
    <>
      <div className="app">
        <Hero />
        <Stats />
        <PopularDestination />
        <StorySection />

        <Services />
        <Packages />
        {/*<Testimonials />*/}
       {/* <PropertyDetails />*/}

        <StepsSection />
        <TrustSection />
        <ExploreSection />
        <ReviewsSection />
        <JourneyCTA />

        <Footer />
      </div>
    </>
  );
}

export default App;
