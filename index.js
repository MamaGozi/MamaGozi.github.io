Index// index.js (or App.js if using React conventions)
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const testimonials = [
  {
    quote:
      "Game-changer for our business. The integration was smooth, the features are robust, and the support team is always there when you need them.",
    name: "Anonymous Customer",
  },
  {
    quote:
      "We've tried several solutions, but nothing comes close to this level of reliability and ease of use. It's become an essential part of our workflow.",
    name: "Anonymous Customer",
  },
];

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="carousel">
      <div className="testimonial-card">
        <div className="quote-icon">❝</div>
        <p className="testimonial-text">"{testimonials[index].quote}"</p>
        <p className="testimonial-author">— {testimonials[index].name}</p>
        <div className="carousel-nav">
          <button onClick={handlePrev}>‹</button>
          <button onClick={handleNext}>›</button>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, i) => (
            <span key={i} className={i === index ? "dot active" : "dot"}></span>
          ))}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TestimonialCarousel />);
