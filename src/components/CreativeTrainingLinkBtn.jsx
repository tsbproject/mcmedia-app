import { Link } from 'react-router-dom'
import styles from './CreativeTrainingLinkBtn.module.css'


function CreativeTrainingLinkBtn() {
    return (
        <div className={styles.sitebtn}>
            <Link to="/creativegraphicdesign-training">
            <button className={`${styles.btnwhite} ${styles.btnwhiteheader}`}>Learn More</button>
            </Link>

            
        </div>
    )
}

export default CreativeTrainingLinkBtn
