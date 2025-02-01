import styles from './SiteButton.module.css'


function SiteButton() {
    return (
        <div className={styles.sitebtn}>
            <button className={`${styles.btnwhite} ${styles.btnwhiteheader}`}>Learn More</button>

            
        </div>
    )
}

export default SiteButton
