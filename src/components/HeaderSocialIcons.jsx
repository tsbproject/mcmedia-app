import { Link } from "react-router-dom";
import styles from "./HeaderSocialIcons.module.css";



function HeaderSocialIcons() {
    return (
        <>
        <div className={styles.headersocialicons}>
            
            <svg className={styles.socialiconsvg}>
                <Link to="https:/facebook.com">
                <use href="sprite.svg#icon-facebook"></use>
                </Link>
            </svg>

            <svg className={styles.socialiconsvg}>
                <Link to="https:/instagram.com">
                <use href="sprite.svg#icon-instagram"></use>
                </Link>
            </svg>

            <svg className={styles.socialiconsvg}>
                <Link to="https:/x.com">
                <use href="sprite.svg#icon-twitter"></use>
                </Link>
            </svg>

            <svg className={styles.socialiconsvg}>
                <Link to="https:/tiktok.com">
                <use href="sprite.svg#icon-tiktok"></use>
                </Link>
            </svg>

            <svg className={styles.socialiconsvg}>
                <Link to="https:/youtube.com">
                <use href="sprite.svg#icon-youtube"></use>
                </Link>
            </svg>
             
     </div>

     

     

    
     <div className={styles.headercontacts}>
     
     <div className={styles.phone}>
     <svg className={`${styles.socialiconsvg} ${styles.contactsvg}`}>
                
                <use href="sprite.svg#icon-phone"></use>
                
                
            </svg>
            
            <Link to="dialto:+234-704-824-5026">
            <span> +234-704-824-5026</span>
            </Link>
     </div>

     <div className={styles.phone}>
        <svg className={`${styles.socialiconsvg} ${styles.contactsvg}`}>
                <use href="sprite.svg#icon-email"></use>
            </svg>
            
            <Link to="mailto:info@marvelcmedia.com">
                <span> info@marvelcmedia.com</span>
            </Link>
    </div>
     

    </div>
     
     
     </>

    

   
    )
}

export default HeaderSocialIcons
