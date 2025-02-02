import { Link } from "react-router-dom";
import styles from "./Cta.module.css";


function Cta() {
    return (
        <div className={styles.cta}>
         <p> Are your for your discuss your next project</p>
        <Link to="/contactus">
         <button>Contact us </button>
        </Link>
            
        </div>
    )
}

export default Cta
