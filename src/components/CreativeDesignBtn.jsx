import { Link } from 'react-router-dom'
import styles from './SiteButton.module.css'


function SiteButton() {
    return (
        <div className={styles.sitebtn}>
            <Link to="services/creativedesign">
                <button className={`${styles.btnwhite} ${styles.btnwhiteheader}`}>Learn More</button>
            </Link>
            
        </div>
    )
}

export default SiteButton
