import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import PageNav from "./PageNav";
import Logo from "./Logo";
import HeaderSocialIcons from "./HeaderSocialIcons";
import MobileMenu from "./MobileMenu";
import HeaderButton from "./HeaderButton";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Shrinks when scrolled 50px down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <Logo />
      <HeaderSocialIcons />
      <MobileMenu />
      <PageNav />

      {/* Shrinking HeaderButton */}
      <div className={`${styles.headerButtonWrapper} ${isScrolled ? styles.shrunk : ""}`}>
        <HeaderButton />
      </div>
    </header>
  );
}

export default Header;










// import { useState, useEffect, useRef } from 'react';
// import styles from './Header.module.css';
// import PageNav from './PageNav';
// import Logo from './Logo';
// import HeaderSocialIcons from './HeaderSocialIcons';
// import MobileMenu from './MobileMenu';
// import HeaderButton from './HeaderButton';

// function Header() {
//   const [isShrunk, setIsShrunk] = useState(false);
//   const lastScrollY = useRef(0); // Persist last scroll position across renders

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY.current && window.scrollY > 50) {
//         setIsShrunk(true);
//       } else {
//         setIsShrunk(false);
//       }
//       lastScrollY.current = window.scrollY; // Update last scroll position
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className={`${styles.header} ${isShrunk ? styles.shrunk : ''}`}>
//       <Logo />
//       <PageNav />
//       <HeaderSocialIcons />
//       <MobileMenu />
//       <HeaderButton />
//     </header>
//   );
// }

// export default Header;








