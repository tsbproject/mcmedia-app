import { Link } from "react-router-dom";
import styles from "./FooterSocialIcons.module.css";



function FooterSocialIcons() {
    return (
        <>
        <div className={styles.footersocialicons}>
            
            <svg className={styles.fsocialiconsvg}>
                <Link to="https:/facebook.com " target="_blank">
                <use href="sprite.svg#icon-facebook"></use>
                </Link>
            </svg>

            <svg className={styles.fsocialiconsvg}>
                <Link to="https:/instagram.com" target="_blank">
                <use href="sprite.svg#icon-instagram"></use>
                </Link>
            </svg>

            <svg className={styles.fsocialiconsvg}>
                <Link to="https:/x.com">
                <use href="sprite.svg#icon-twitter" target="_blank"></use>
                </Link>
            </svg>

            <svg className={styles.fsocialiconsvg}>
                <Link to="https:/tiktok.com">
                <use href="sprite.svg#icon-tiktok" target="_blank"></use>
                </Link>
            </svg>

            <svg className={styles.fsocialiconsvg}>
                <Link to="https:/youtube.com" target="_blank">
                <use href="sprite.svg#icon-youtube"></use>
                </Link>
            </svg>
             
     </div>

     

     

    
     
     
     
     </>

    

   
    )
}

export default FooterSocialIcons
