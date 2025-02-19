import { useState } from "react";
import styles from "./QuoteForm.module.css";

const statesOfNigeria = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
  "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
  "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    projectDescription: "",
    services: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Request a Quote</h2>
      <textarea
        name="projectDescription"
        placeholder="Describe your project"
        value={formData.projectDescription}
        onChange={handleChange}
        className={styles.textarea}
        required
      />
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Select Services</legend>
        {[
          "Web development", "Mobile app development", "Website redesign",
          "Digital marketing", "Creative graphic design", "SEO"
        ].map((service) => (
          <label key={service} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="services"
              value={service}
              checked={formData.services.includes(service)}
              onChange={handleChange}
              className={styles.checkbox}
            />
            {service}
          </label>
        ))}
      </fieldset>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <select name="location" value={formData.location} onChange={handleChange} className={styles.select} required>
        <option value="">Select your state</option>
        {statesOfNigeria.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default QuoteForm;
