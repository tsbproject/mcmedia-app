
import styles from './header.module.css'
import PageNav from './PageNav'
import Logo from './Logo'
import HeaderSocialIcons from './HeaderSocialIcons'
import MobileMenu from './MobileMenu'





function Header() {


  
    return (
        <header className={styles.header }>

             <Logo />
            <HeaderSocialIcons />
            <MobileMenu />
             <PageNav />
        

            
        </header>
    )
}

export default Header
