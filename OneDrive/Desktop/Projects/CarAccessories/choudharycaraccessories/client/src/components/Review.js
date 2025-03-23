import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/Review.css";

const reviews = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/80",
    text: "Great service! Highly recommended.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/80",
    text: "Amazing experience, will come again!",
    rating: 4,
  },
  {
    name: "David Johnson",
    image: "https://via.placeholder.com/80",
    text: "Professional and friendly service.",
    rating: 5,
  },
  {
    name: "Emma Brown",
    image: "https://via.placeholder.com/80",
    text: "Exceptional quality and support.",
    rating: 4,
  },
  {
    name: "Michael Lee",
    image: "https://via.placeholder.com/80",
    text: "Fast and reliable, 5 stars!",
    rating: 5,
  },
];

// Function to render star ratings
const renderStars = (rating) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

const ReviewSection = () => {
  return (
    <section className="review-section">
      <h2 className="section-title">Let's Hear from Our Clients</h2>
      <Swiper
        slidesPerView={1} // Default: 1 card per slide
        spaceBetween={20}
        breakpoints={{
          1224: { slidesPerView: 2 }, // Show 2 slides on larger screens
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="review-slider"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card-container">
              <div className="review-card-outline"></div>
              <div className="review-card">
                <div className="client-img-container">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="client-img"
                  />
                </div>
                <div className="review-content">
                  <h3>{review.name}</h3>
                  <div className="star-rating">
                    {renderStars(review.rating)}
                  </div>
                  <p>{review.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSection;
