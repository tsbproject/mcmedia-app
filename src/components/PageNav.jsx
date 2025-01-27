import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';



const PageNav = () => {
    return (
        <nav className={styles.nav}> 
         
   

       
          <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="services">Services</NavLink>
            </li>

            <li>
                <NavLink to="about">About</NavLink>
            </li>


            <li>
                <NavLink to="portfolio">Portfolio</NavLink>
            </li>

            <li>
                <NavLink to="requestaquote">Request Quote</NavLink>

            </li>

            <li>
                <NavLink to="blog">Blog</NavLink>

            </li>


            <li>
                <NavLink to="contact">Contact us</NavLink>
            </li>


            
    
            </ul>
        </nav>
    )
}

export default PageNav
