import { Link } from 'react-router-dom'
import styles from './SiteButton.module.css'
import PopInSection from './PopInSection'


function SiteButton() {
    return (
          <PopInSection>
        <div className={styles.sitebtn}>
            <Link to="/about">
                <button className={`${styles.btnwhite} ${styles.btnwhiteheader}`}>Learn More</button>
            </Link>
            
        </div>
          </PopInSection>
    )
}

export default SiteButton
