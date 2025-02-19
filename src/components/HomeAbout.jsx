import styles from './HomeAbout.module.css'
import SiteButton from './SiteButton'
import MarqueeScroll from './MarqueeScroll'
import PopInSection from './PopInSection'


function HomeAbout() {
    return (
        <>
        <div className={styles.homeHeading}>
            <MarqueeScroll />
            
            </div>   
            <PopInSection>
         <div className={styles.homeabout}>
            <div className={styles.homeaboutcontent}>
                <h2 className={styles.homeabouttitle}>we can help you bring your vision to life.</h2>
                <p className={styles.homeabouttext}> Welcome to Marvel Creative Media, your trusted
                     partner for Website and Mobile App development. We are a team of experienced
                      professionals who are passionate about creating digital solutions that help
                       businesses and individuals achieve their goals.
                </p>


                <h2 className={styles.homeabouttitle}>We are always available</h2>
                <p className={styles.homeabouttext}>We are dedicated to providing cut-edged and distinct
                     customer service and support throughout thedevelopment process and after.
                </p>

                <SiteButton />
                
                
               


             </div>
             <img className={styles.homeaboutImg} src="./web-design-website-coding-concept.jpg" alt="About Us" />

            
        </div>
        </PopInSection> 
        </>
    )
}

export default HomeAbout
