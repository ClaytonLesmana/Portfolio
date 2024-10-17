import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export default function Header(props) {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true); // Manage navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  // Function to detect scrolling and set the active section
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY; // No offset needed

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop - 20 && // Small offset for better accuracy
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        setActiveSection(section.getAttribute("id"));
      }
    });

    // Detect scroll direction for navbar visibility
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsVisible(false); // Scrolling down, hide navbar
    } else {
      setIsVisible(true); // Scrolling up, show navbar
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Only re-run effect if lastScrollY changes

  return (
    <React.Fragment>
      <header
        style={{
          top: isVisible ? "0" : "-80px", // Hide when scrolling down
          transition: "top 0.3s ease", // Smooth transition
          position: "fixed",
          width: "100%",
          backgroundColor: "#0F172A", // Your background color
          zIndex: 1000,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for better UI
        }}
      >
        <div className="header-container">
          <h3 className="name">Clayton Lesmana</h3>
          {/* pages */}
          <nav className="nav">
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About Me
            </a>
            <a
              href="#resume"
              className={activeSection === "resume" ? "active" : ""}
            >
              Resume
            </a>
            <a
              href="#portfolio"
              className={activeSection === "portfolio" ? "active" : ""}
            >
              Portfolio
            </a>
          </nav>
          <div className="hire-me-btn">
            <a href="#contact">
              <button>Hire me!</button>
            </a>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
