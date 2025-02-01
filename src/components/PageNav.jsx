import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./PageNav.module.css";
import {
  FaLaptopCode,
  FaPalette,
  FaChartLine,
  FaMobileAlt,
  FaShoppingCart,
  FaBullhorn,
} from "react-icons/fa";

const PageNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <NavLink to="/">Services</NavLink>
          {showDropdown && (
            <div className={styles.megaMenu}>
              <div className={styles.megaGrid}>
                <NavLink to="/services/webdevelopment" className={styles.megaItem}>
                  <FaLaptopCode className={styles.icon} />
                  Web Development
                </NavLink>
                <NavLink to="/services/creativedesign" className={styles.megaItem}>
                  <FaPalette className={styles.icon} />
                  Creative Design
                </NavLink>
                <NavLink to="/services/digitalmarketing" className={styles.megaItem}>
                  <FaChartLine className={styles.icon} />
                  Digital Marketing
                </NavLink>
                <NavLink to="/services/mobileapps" className={styles.megaItem}>
                  <FaMobileAlt className={styles.icon} />
                  Mobile App Development
                </NavLink>
                <NavLink to="/services/ecommerce" className={styles.megaItem}>
                  <FaShoppingCart className={styles.icon} />
                  E-commerce Solutions
                </NavLink>
                <NavLink to="/services/training" className={styles.megaItem}>
                  <FaBullhorn className={styles.icon} />
                  Training 
                </NavLink>
              </div>
            </div>
          )}
        </li>

        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;






