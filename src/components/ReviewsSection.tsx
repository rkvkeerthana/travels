import React from "react";
import "../css/reviews.css";

const Reviews:React.FC= () => {
  return (
    <section className="reviews">
      <h2>Travelers Stories & Reviews</h2>
      <p className="subtitle">Real experiences from real travelers</p>

      <div className="reviews-grid">
        {/* CARD 1 */}
        <div className="review-card" style={{background:"rgb(0 0 0 / 3%)"}}>
          <img
            src="https://i.pravatar.cc/100?img=1"
            alt="User"
            className="avatar"
          />
          <h4>Amazing Experience</h4>
          <p>
            Everything was perfectly organized. The destinations were stunning
            and the guide was very knowledgeable.
          </p>

          {/* FOOTER */}
          <div className="review-footer">
            <div className="author">
              <span>John Carter</span>
              <small>Traveler</small>
            </div>
            <small className="review-date">12 Jan 2026</small>
          </div>
        </div>

       

        {/* CARD 3 as 2 */}
        <div className="review-card" >
          <div className="video-box">
           <img
  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
  alt="Green travel landscape"
/>

            <div className="play">▶</div>
          </div>

          <p>
            This was one of the best travel experiences of my life. Everything
            felt premium and stress-free.
          </p>

          {/* FOOTER */}
          <div className="review-footer">
            <div className="author">
              <span>Michael Brown</span>
              <small>Vlogger</small>
            </div>
            <small className="review-date">02 Feb 2026</small>
          </div>
        </div>
        {/* CARD 2 as 3 */}
        <div className="review-card" style={{background:"rgb(0 0 0 / 3%)"}}>
          <img
            src="https://i.pravatar.cc/100?img=2"
            alt="User"
            className="avatar"
          />
          <h4>Highly Recommended</h4>
          <p>
            Smooth booking process and great support. I would definitely book
            again for my next trip.
          </p>

          {/* FOOTER */}
          <div className="review-footer">
            <div className="author">
              <span>Sarah Lee</span>
              <small>Explorer</small>
            </div>
            <small className="review-date">28 Jan 2026</small>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
