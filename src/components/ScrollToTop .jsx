import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} style={scrollToTopStyle}>
        <FaArrowUp className=" text-xl" />
      </button>
    )
  );
};

const scrollToTopStyle = {
  position: "fixed",
  bottom: "10px",
  right: "30px",
  zIndex: "99",
  width: "50px",
  height: "50px",
  border: "none",
  outline: "none",
  backgroundColor: "#333",
  color: "white",
  cursor: "pointer",
  //   padding: "15px",
  borderRadius: "50%",
  boxShadow: "0px 0px 0px 4px rgba(180, 160, 255, 0.253)",
  transitionDuration: "0.3s",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default ScrollToTop;
