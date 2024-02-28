// https://images.wallpaperscraft.com/image/single/mountains_peaks_snow_covered_116873_1280x720.jpg
import React, { useState } from "react";

const NewsletterSignUp = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the email to your server or a third-party service
    alert(`Subscribed with email: ${email}`);
    setEmail(""); // Clear the input after submission
  };

  return (
    <div style={styles.newsletterContainer}>
      <div style={styles.overlay}>
        <h1 style={styles.headerText}>Sign Up to Our Newsletter</h1>
        <p style={styles.paragraphText}>
          Get the Latest Beauty Secrets and Trends, Sign Up for Our Newsletter
          and Stay Informed About All Things Beauty
        </p>
        <form onSubmit={handleSubmit} style={styles.formStyle}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.inputStyle}
            required
          />
          <button type="submit" style={styles.buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  newsletterContainer: {
    backgroundImage:
      'url("https://images.wallpaperscraft.com/image/single/mountains_peaks_snow_covered_116873_1280x720.jpg")',
    backgroundSize: "100% 100%",
    textAlign: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
  },
  headerText: {
    fontSize: "2em",
    marginBottom: "30px",
    color: "white",
  },
  paragraphText: {
    fontSize: "1em",
    marginBottom: "20px",
    color: "white",
  },
  formStyle: {
    display: "inline-block",
  },
  inputStyle: {
    padding: "7px 20px",
    fontSize: "1em",
    marginRight: "10px",
    border: "none",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  buttonStyle: {
    padding: "10px 20px",
    fontSize: "1em",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#white",
    color: "black",
  },
};

export default NewsletterSignUp;
