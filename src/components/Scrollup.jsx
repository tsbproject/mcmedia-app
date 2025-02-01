import  { useState, useEffect } from "react";
import styles from "./ScrollUp.module.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); 
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      className={`${styles.scrollUp} ${isVisible ? styles.show : ""}`} 
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp className={styles.icon} />
    </button>
  );
};

export default ScrollUp;
