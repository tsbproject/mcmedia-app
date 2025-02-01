import styles from './Hero.module.css'
import HeroVideo from './HeroVideo'
import SiteButton from './SiteButton'

function Hero() {
    return (
        <div className={styles.hero}>
          
            <section>
                {/* <HeroVideo /> */}
                    <h1>Welcome to <span>Marvel Creative Media</span>,<br></br>
                     your <span>trusted</span>  Digital Partner.</h1>
                    
                    <h2>Your Digital Tech Rendezvous</h2>

                    <SiteButton />
                </section>

             
            
        </div>
    )
}

export default Hero
