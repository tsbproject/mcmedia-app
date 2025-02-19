import { Link } from 'react-router-dom'
import styles from './WebTrainingLinkBtn.module.css'


function WebTrainingLinkBtn() {
    return (
        <div className={styles.sitebtn}>
            <Link to="/webdevelopment-training">
            <button className={`${styles.btnwhite} ${styles.btnwhiteheader}`}>Learn More</button>
            </Link>

            
        </div>
    )
}

export default WebTrainingLinkBtn;
