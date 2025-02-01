import { Link } from 'react-router-dom'
import styles from './HeaderButton.module.css'



function HeaderButton() {
    return (
        <div className={styles.sitebtn}>
                    <Link to="requestquote">
                     <button className= {`${styles.btnwhiteheader} ${styles.smhd}`}> Request a Quote </button>
                    </Link>
        
                    
                </div>

    )

}
    


export default HeaderButton



