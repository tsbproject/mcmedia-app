import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styles from "./MobileMenu.module.css";
import {
  FaLaptopCode,
  FaPalette,
  FaChartLine,
  FaMobileAlt,
  FaShoppingCart,
  FaBullhorn,
} from "react-icons/fa";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setShowDropdown(false);
  };

  return (
    <div className={`${styles.menuContainer} ${styles.mobileOnly}`}>
      {/* Toggle Button - Visible only on small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggleButton}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.icon} ${styles.closeIcon}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.icon} ${styles.menuIcon}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Full-Screen Carpet Display Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={styles.menuOverlay}
        onClick={closeMenu} // Close menu when clicking outside
      >
        <ul className={styles.menuList} onClick={(e) => e.stopPropagation()}>
          <li><NavLink to="/" className={styles.menuItem} onClick={closeMenu}>Home</NavLink></li>

          {/* Services Dropdown */}
          <li className={styles.dropdown}>
            <button onClick={() => setShowDropdown(!showDropdown)} className={styles.menuItem}>
              Services {showDropdown ? "▲" : "▼"}
            </button>
            {showDropdown && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className={styles.dropdownMenu}
              >
                <li>
                  <NavLink to="/services/webdevelopment" className={styles.dropdownItem} onClick={closeMenu}>
                    <FaLaptopCode className={styles.icon} /> Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/creativedesign" className={styles.dropdownItem} onClick={closeMenu}>
                    <FaPalette className={styles.icon} /> Creative Design
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/digitalmarketing" className={styles.dropdownItem} onClick={closeMenu}>
                    <FaChartLine className={styles.icon} /> Digital Marketing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/mobileapps" className={styles.dropdownItem} onClick={closeMenu}>
                    <FaMobileAlt className={styles.icon} /> Mobile App Development
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/ecommerce" className={styles.dropdownItem} onClick={closeMenu}>
                    <FaShoppingCart className={styles.icon} /> E-commerce Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/training" className={styles.dropdownItem} onClick={closeMenu}>
                    <FaBullhorn className={styles.icon} /> Training
                  </NavLink>
                </li>
              </motion.ul>
            )}
          </li>

          <li><NavLink to="about" className={styles.menuItem} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="portfolio" className={styles.menuItem} onClick={closeMenu}>Portfolio</NavLink></li>
          <li><NavLink to="blog" className={styles.menuItem} onClick={closeMenu}>Blog</NavLink></li>
          <li><NavLink to="contact" className={styles.menuItem} onClick={closeMenu}>Contact us</NavLink></li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;





// import { useState } from "react";
// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import styles from "./MobileMenu.module.css";

// const MobileMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => setIsOpen(false);

//   return (
//     <div className={`${styles.menuContainer} ${styles.mobileOnly}`}>
//       {/* Toggle Button - Visible only on small screens */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={styles.toggleButton}
//       >
//         {isOpen ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className={`${styles.icon} ${styles.closeIcon}`}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className={`${styles.icon} ${styles.menuIcon}`}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="3" y1="12" x2="21" y2="12" />
//             <line x1="3" y1="6" x2="21" y2="6" />
//             <line x1="3" y1="18" x2="21" y2="18" />
//           </svg>
//         )}
//       </button>

//       {/* Full-Screen Carpet Display Menu */}
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={isOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
//         transition={{ duration: 0.6, ease: "easeInOut" }}
//         className={styles.menuOverlay}
//         onClick={closeMenu} // Close menu when clicking outside
//       >
//         <ul className={styles.menuList} onClick={(e) => e.stopPropagation()}>
//           <li><NavLink to="/" className={styles.menuItem} onClick={closeMenu}>Home</NavLink></li>
//           <li><NavLink to="services" className={styles.menuItem} onClick={closeMenu}>Services</NavLink></li>
//           <li><NavLink to="about" className={styles.menuItem} onClick={closeMenu}>About</NavLink></li>
//           <li><NavLink to="portfolio" className={styles.menuItem} onClick={closeMenu}>Portfolio</NavLink></li>
//           {/* <li><NavLink to="requestaquote" className={styles.menuItem} onClick={closeMenu}>Request Quote</NavLink></li> */}
//           <li><NavLink to="blog" className={styles.menuItem} onClick={closeMenu}>Blog</NavLink></li>
//           <li><NavLink to="contact" className={styles.menuItem} onClick={closeMenu}>Contact us</NavLink></li>
//         </ul>
//       </motion.div>
//     </div>
//   );
// };





// export default MobileMenu;
