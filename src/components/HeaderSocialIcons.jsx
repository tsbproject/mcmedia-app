import { Link } from "react-router-dom";
import styles from "./HeaderSocialIcons.module.css";



function HeaderSocialIcons() {
    return (
        <div>
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

     

     <div className="telephone">
         
     </div>

     <div className="email">
         

        
         
     </div>
     </div>

    

   
    )
}

export default HeaderSocialIcons
