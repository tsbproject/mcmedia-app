import styles from "./HeroVideo.module.css";

function HeroVideo() {
    return (
        <div className={styles.bgvideo}>
        <video className={styles.bgvideocontent} autoPlay muted loop>
            <source src="../bg-video4.mp4" type="video/mp4" />
            <source src="../video.webm" type="video/webm" />
            Your Browser is not supported
        </video>
    
    </div>
    )
}

export default HeroVideo
