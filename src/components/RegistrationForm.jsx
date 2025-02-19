import { useState } from "react";
import styles from "./RegistrationForm.module.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    surname: "",
    firstname: "",
    email: "",
    phone: "",
    trainingType: "",
    schedule: "",
    occupation: "",
    state: "",
    referral: "",
  });

  const statesOfNigeria = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa",
    "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
    "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className={styles.registrationForm}>
      <h2>Register for Web Design & Development Training</h2>
      <form onSubmit={handleSubmit}>

        {/* Name Fields */}
        <div className={styles.inputGroup}>
          <span className={styles.icon}>👤</span>
          <input type="text" name="surname" placeholder="Surname *" required onChange={handleChange} />
          <input type="text" name="firstname" placeholder="Firstname *" required onChange={handleChange} />
        </div>

        {/* Email */}
        <div className={styles.inputGroup}>
          <span className={styles.icon}>📧</span>
          <input type="email" name="email" placeholder="Email *" required onChange={handleChange} />
        </div>

        {/* Phone */}
        <div className={styles.inputGroup}>
          <span className={styles.icon}>📞</span>
          <input type="tel" name="phone" placeholder="Phone (e.g. 08012345678) *" pattern="080[0-9]{8}" required onChange={handleChange} />
        </div>

        {/* Training Type */}
        <div className={styles.section}>
          <h3>Training Type</h3>
          <label>
            <input type="radio" name="trainingType" value="Web Design & Development" onChange={handleChange} />
            Web Design & Development
          </label>
          <label>
            <input type="radio" name="trainingType" value="Web Design" onChange={handleChange} />
            Web Design
          </label>
          <label>
            <input type="radio" name="trainingType" value="Web Development" onChange={handleChange} />
            Web Development
          </label>
        </div>

        {/* Training Schedule */}
        <div className={styles.section}>
          <h3>Preferred Schedule</h3>
          <label>
            <input type="radio" name="schedule" value="Weekday" onChange={handleChange} />
            Weekday
          </label>
          <label>
            <input type="radio" name="schedule" value="Weekend" onChange={handleChange} />
            Weekend
          </label>
        </div>

        {/* Referral Source */}
        <div className={styles.inputGroup}>
          <label>How did you hear about us? *</label>
          <select name="referral" required onChange={handleChange}>
            <option value="">Please Choose</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend/Family">Friend/Family</option>
            <option value="Google Search">Google Search</option>
            <option value="NairaLand">Nairaland</option>
            <option value="LinkeIn">LinkedIn</option>
            <option value="Website">Website</option>
            <option value="Advertisement">Advertisement</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Occupation */}
        <div className={styles.inputGroup}>
          <label> Your Occupation *</label>
          <select name="occupation" required onChange={handleChange}>
            <option value="">Please Choose</option>
            <option value="ITProfessional">IT Professional</option>
            <option value="Developer">Friend/Family</option>
            <option value="Freelance">Website</option>
            <option value="Worker">Advertisement</option>
            <option value="Applicant">Advertisement</option>
            <option value="Student">Advertisement</option>
          </select>
        </div>

        {/* State Selection */}
        <div className={styles.inputGroup}>
          <label>State of Residence *</label>
          <select name="state" required onChange={handleChange}>
            <option value="">Choose State</option>
            {statesOfNigeria.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.registerButton}>Register Now</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
