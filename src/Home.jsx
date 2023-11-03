import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhoneIcon from "./phone-icon.svg";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  const [isArrowUp, setIsArrowUp] = useState(true);

  const navigate = useNavigate();

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

  const scrollToIntroDiv = () => {
    const IntroDivElement = document.getElementById("intro-div");

    window.scrollTo({
      top: IntroDivElement.offsetTop,
      behavior: "smooth",
    });
  };

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

  const testimonials = [
    {
      id: 1,
      content:
        "Cyooner's furniture is simply outstanding! Their quality work sets them apart. I couldn't be happier!",
      author: "Kenneth Nnabuife",
      occupation: "CEO, SabiWeb.com",
      img: "https://res.cloudinary.com/dynmdbdfu/image/upload/v1698961697/1674290441410_kc9g8m.jpg",
    },
    {
      id: 2,
      content:
        "Cyooner's designs captivate with their timeless elegance, ensuring every item stands the test of time.",
      author: "Jane Doe",
      occupation: "CTO, Company B",
      img: "https://res.cloudinary.com/dynmdbdfu/image/upload/v1698962567/vicky-hladynets-C8Ta0gwPbQg-unsplash_h92hkx_hjlk08.png",
    },
    {
      id: 3,
      content:
        "Cyooner's designs evoke a perfect blend of elegance and comfort, creating pieces that truly stand out.",
      author: "James Smith",
      occupation: "COO, Company C",
      img: "https://res.cloudinary.com/dynmdbdfu/image/upload/v1698962457/jonas-kakaroto-mjRwhvqEC0U-unsplash_v3xkqe_q46nup.png",
    },
  ];

  return (
    <div>
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
            <div
              className="learn-more"
              onClick={() => {
                scrollToIntroDiv();
              }}
            >
              Learn More
            </div>
          </div>
        </div>
      </div>
      <div className="first-info">
        <div className="square-stuff">
          <div className="experience-info">Over 10 Years of Experience</div>
          <div className="dema-line"></div>
          <div className="sales-info">100+ Furnitures Sold</div>
        </div>
      </div>
      <div id="intro-div" className="intro-div">
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
                className="slider1-img"
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
        <div
          className="products-contact-us"
          onClick={() => {
            navigate("/our-products");
          }}
        >
          VIEW ALL PRODUCTS
        </div>
        <div
          className="view-all-button"
          onClick={() => {
            const contactUsElement = document.getElementById("main-contact-us");

            window.scrollTo({
              top: contactUsElement?.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          CONTACT US
        </div>
      </div>
      <div className="delivery-main-div">
        <div className="delivery-header">Delivery</div>
        <img src="https://res.cloudinary.com/dynmdbdfu/image/upload/v1697761858/antony-trivet-odqarCS84ok-unsplash-removebg-preview_krktcs.png" />
        <div className="delivery-text">
          Location is not a barrier as we have a team that moves on demand!
        </div>
      </div>
      <div
        style={{
          position: "relative",
          left: "0",
          right: "0",
          top: "0",
          bottom: "0",
          paddingTop: "30px",
          paddingBottom: "70px",
        }}
      >
        <div className="delivery-text-div">
          To ensure safe delivery of your furniture/design for our online
          customers within and outside Nigeria, we are in partnership with a
          reputable domestic/international coordination company to aid in that
          regard for items that are outside the scope of the company delivery
          van.
        </div>
      </div>
      <div
        style={{
          paddingTop: "20px",
          background: "white",
          paddingBottom: "50px",
        }}
      >
        <div className="testimony-div">
          <div className="testimony-header">Hear From Our Clients</div>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ height: "200px" }}
        >
          {testimonials.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial.id}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "40px",
                    marginRight: "40px",
                    marginTop: "30px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={testimonial.img}
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                        marginRight: "15px",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div style={{ fontSize: "15px", fontWeight: "600" }}>
                        {testimonial.author}
                      </div>
                      <div style={{ fontSize: "14px" }}>
                        {testimonial.occupation}
                      </div>
                    </div>
                  </div>
                  <div
                    className="test-cont"
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      lineHeight: "170%",
                      fontWeight: "500",
                      marginBottom: "30px",
                      fontSize: "15px",
                      textAlign: "center",
                    }}
                  >
                    {testimonial.content}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        id="main-contact-us"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            marginBottom: "10px",
            color: "#011023",
            fontWeight: "500",
          }}
        >
          Contact Us
        </div>
        <div style={{ display: "flex", marginBottom: "14px" }}>
          <div>
            <img src={PhoneIcon} style={{ width: "16px", marginTop: "4px" }} />
          </div>
          <div style={{ marginLeft: "8px" }}>
            <a
              href="tel:+2348078131131"
              style={{ color: "#011023", fontSize: "18px" }}
            >
              080 7813 1131
            </a>
          </div>
        </div>
        <div
          style={{ display: "flex", marginBottom: "8px", fontWeight: "500" }}
        >
          Office Location:
        </div>
        <div>Benin City, Nigeria</div>
      </div>
      <div className="big-contact-div">
        <div className="form-header">Send Us A Message</div>
        <form action="https://formsubmit.co/info@sabiweb.com" method="POST">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            required="required"
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            required="required"
          />
          <input
            type="text"
            className="form-control"
            name="subject"
            placeholder="Phone"
            required="required"
          />
          <textarea
            className="form-control"
            name="message"
            placeholder="Message"
            required="required"
          ></textarea>
          <button type="submit" className="submit-link">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
