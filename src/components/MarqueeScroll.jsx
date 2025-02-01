
import styles from "./MarqueeScroll.module.css";

const MarqueeScroll = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        <span>🚀 digital solutions that help businesses and individuals 🌟</span>
        <span>🚀 digital solutions that help businesses and individuals 🌟</span>
        <span>🚀 digital solutions that help businesses and individuals 🌟</span>
      </div>
    </div>
  );
};

export default MarqueeScroll;
