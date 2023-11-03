import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToContactUs = async () => {
    const contactUsElement = document.getElementById("main-contact-us");

    if (contactUsElement) {
      setShowMenu(false);
      window.scrollTo({
        top: contactUsElement?.offsetTop,
        behavior: "smooth",
      });
    } else {
      await navigate("/");
    }
  };

  return (
    <div className="header">
      <img
        onClick={() => {
          navigate("/");
          setShowMenu(false);
        }}
        src="https://res.cloudinary.com/dynmdbdfu/image/upload/v1697070770/cyoonerlogo_PNG_xpaz2h.png"
        alt="Cyooner"
      />

      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`line ${showMenu ? "active" : ""}`}></div>
        <div className={`line ${showMenu ? "active" : ""}`}></div>
        <div className={`line ${showMenu ? "active" : ""}`}></div>
      </div>

      {showMenu && (
        <div className="menu-items">
          <a
            onClick={() => {
              navigate("/");
              setShowMenu(false);
            }}
          >
            Home
          </a>
          <a
            onClick={() => {
              navigate("/our-products");
              setShowMenu(false);
            }}
          >
            Our Products
          </a>
          <a
            onClick={() => {
              navigate("/about");
              setShowMenu(false);
            }}
          >
            About Us
          </a>
          <a
            onClick={() => {
              scrollToContactUs();
            }}
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}
export default Header;
