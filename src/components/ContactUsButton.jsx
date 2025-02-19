import { Link } from "react-router-dom";
import styles from "./ContactUsButton.module.css";

function ContactUsButton() {
    return (
        <div className={styles.contactusButton}>
            <Link to={"/contact"}>
           <button className={styles.contactusBtn}>Contact us</button>
        </Link>
            
        </div>
    )
}

export default ContactUsButton

