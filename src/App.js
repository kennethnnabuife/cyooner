import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [isArrowUp, setIsArrowUp] = useState(true);

  useEffect(() => {
    /*return () => {
      setInterval(() => {
        setIsArrowUp((prev) => !prev);
      }, 600); // Toggle every 1 second
    };*/
    const interval = setInterval(() => {
      setIsArrowUp((prev) => !prev);
    }, 600); // Toggle every 1 second

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 30000); // Remove after 30 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const SlideAtrandomNumbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 100) + 1
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Time each slide is displayed (in milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Automatically start the carousel
    autoplaySpeed: 2000, // Time between slides (in milliseconds)
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    if (inView) {
      sectionRef.current.classList.add("fancy-scroll");
    }
  }, [inView]);

  const slides = [
    {
      imgSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697752853/Livingroom_2_gzmces.jpg",
      text: "LIVING ROOMS",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697752862/Bedframe_2_ujcrvt.jpg",
      text: "BEDROOMS",
    },

    {
      imgSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697757997/Screenshot_2023-10-20_002556_ko5m8a.png",
      text: "OFFICES",
    },

    {
      imgSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697752853/Kitchen_Island_q7luou.jpg",
      text: "KITCHEN",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697752862/Dinning_set_1_h6y33j.jpg",
      text: "DINING",
    },
    // Add similar objects for other images
  ];

  return (
    <div>
      <div className="header">
        <img
          src="https://res.cloudinary.com/dynmdbdfu/image/upload/v1697070770/cyoonerlogo_PNG_xpaz2h.png"
          alt="Cyooner"
        />

        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className={`line ${showMenu ? "active" : ""}`}></div>
          <div className={`line ${showMenu ? "active" : ""}`}></div>
          <div className={`line ${showMenu ? "active" : ""}`}></div>
        </div>
      </div>

      {showMenu && (
        <div className="menu-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}

      <div className="hero-div" ref={ref}>
        <div className="overlay"></div>
        <div className="sub-hero">
          <div className="hero-main-text" ref={sectionRef}>
            We make quality furniture and interiors that create a feel of
            elegance to your home and office!
          </div>

          <div className="arrow-div">
            <div className={`arrow-container ${isArrowUp ? "up" : "down"}`}>
              <div className="arrow">
                <div className="arrow-line"></div>
                <div className="arrow-line2"></div>
              </div>
            </div>
          </div>
          <div className="learn-more-div">
            <div className="learn-more">Learn More</div>
          </div>
        </div>
      </div>
      <div className="first-info">
        <div className="square-stuff">
          <div className="experience-info">10 Years of Experience</div>
          <div className="dema-line"></div>
          <div className="sales-info">100+ Furnitures Sold</div>
        </div>
      </div>
      <div className="intro-div">
        <div className="intro-header">
          We Elevate The Visual Appeal of Your Living Space
        </div>
        <div className="intro-text">
          At Cyooner we believe furniture is more than just aesthetics, it is a
          place where the future is designed (school), products are
          birth(company), negotiations are made (Conference rooms) and bonds are
          created (home).
        </div>
      </div>

      <div className="featured">Our Products</div>
      <div className="slider-main-div">
        <Slider {...settings} className="slider1">
          {slides.map((slide, index) => (
            <div key={index}>
              <img
                style={{
                  display: "flex",
                  justifySelf: "center",
                  width: "100%",
                  height: "240px",
                }}
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
              <div className="image-text-div">
                <div>{slide.text}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="our-products-text">
        Our products/services range from making and fixing couches, Bed frames,
        kitchen cabinets, dining sets, office tables, Bookshelf, TV Console etc.
        and for your Estate, Hotel, Home, and Office.
      </div>
      <div className="contact-us-div">
        <div className="products-contact-us">VIEW ALL PRODUCTS</div>
        <div className="view-all-button">CONTACT US</div>
      </div>
      <div className="delivery-main-div">
        <div className="delivery-header">Delivery</div>
        <img src="https://res.cloudinary.com/dynmdbdfu/image/upload/v1697761858/antony-trivet-odqarCS84ok-unsplash-removebg-preview_krktcs.png" />
        <div className="delivery-text">
          Location is not a barrier as we have a team that moves on demand!
        </div>
      </div>
      <div className="delivery-text-div">
        To ensure safe delivery of your furniture/design for our online
        customers within and outside Nigeria, we are in partnership with a
        reputable domestic/international coordination company to aid in that
        regard for items that are outside the scope of the company delivery van.
      </div>
      <div className="testimony-div">
        <div className="testimony-header">Hear From Our Clients</div>
        <div className="testimony-text"></div>
      </div>
    </div>
  );
}

export default App;
