import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./PopInSection.module.css";

function PopInSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`${styles.popIn} ${isVisible ? styles.show : ""}`}>
      {children}
    </div>
  );
}
PopInSection.propTypes = {
  children: PropTypes.node.isRequired,
};


export default PopInSection;
