import React, { useEffect, useState} from "react";
import "./navbar.css";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  let h = window.innerHeight;

  // Sticky Header
  const handleScroll = () => {
    let scrollLength = window.scrollY;

    if (scrollLength >= h) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  // Listener to detect when user is scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div class={`sticky-wrapper${isSticky ? " sticky fixed" : ""}`}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Navbar;
