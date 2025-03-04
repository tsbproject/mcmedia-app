import { Link } from "react-router-dom";
import styles from "./Cta.module.css";
import PopInSection from "./PopInSection";


function Cta() {
    return (
        <PopInSection>
        <div className={styles.cta}>
         <p> Are you ready to discuss your next project?</p>
        <Link to="/contact">
         <button>Contact us </button>
        </Link>
            
        </div>
        </PopInSection>
    )
}

export default Cta
