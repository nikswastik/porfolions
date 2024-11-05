import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    productName: '',
    name: '',
    phone: '',
    email: '',
    projectDetails: ''
  });

  const styles = {
    contactContainer: {
      backgroundColor: "#1a1a1a",
      color: "#ffea00",
      fontFamily: "'Oswald', sans-serif",
      padding: "2rem",
    },
    contactForm: {
      backgroundColor: "#333",
      padding: "2rem",
      borderRadius: "8px",
      textAlign: "center",
    },
    header: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    productDesign: {
      display: "flex",
      gap: "1rem",
      justifyContent: "space-between",
    },
    input: {
      padding: "0.75rem",
      border: "1px solid #555",
      backgroundColor: "#1a1a1a",
      color: "#ffea00",
      borderRadius: "5px",
      width: "100%",
    },
    textarea: {
      padding: "0.75rem",
      border: "1px solid #555",
      backgroundColor: "#1a1a1a",
      color: "#ffea00",
      borderRadius: "5px",
      width: "100%",
      resize: "none",
      height: "100px",
    },
    submitBtn: {
      backgroundColor: "#ffea00",
      border: "none",
      padding: "0.75rem 1.5rem",
      borderRadius: "5px",
      cursor: "pointer",
      color: "#1a1a1a",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    arrow: {
      fontSize: "1.5rem",
      marginLeft: "0.5rem",
    },
    footer: {
      backgroundColor: "#ffea00",
      color: "#333",
      padding: "2rem",
      display: "flex",
      justifyContent: "space-between",
      gap: "1rem",
      flexWrap: "wrap",
      marginTop: "2rem",
    },
    footerLogo: {
      flex: 1,
      maxWidth: "300px",
    },
    footerLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    footerLink: {
      color: "#333",
      textDecoration: "none",
    },
    footerLinkHover: {
      textDecoration: "underline",
    },
    title:{
        color:'#AAD44B',
        fontFamily: "Ultra",
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { productName, name, phone, email, projectDetails } = formData;

    // Construct the mailto link
    const mailtoLink = `mailto:omnira.query@gmail.com?subject=${encodeURIComponent(productName)}&body=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nProject Details:\n${projectDetails}`
    )}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  };

  return (
    <div style={styles.contactContainer}>
      <div style={styles.contactForm}>
        <h2 style={styles.header}>Contact us!</h2>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.productDesign}>
            <input
              type="text"
              placeholder="Product Name"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
          />
          <textarea
            placeholder="Project details"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleInputChange}
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.submitBtn}>
            <span>&#10148;</span> {/* Arrow symbol */}
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLogo}>
          <h3>Omnira</h3>
          <p>
            Omnira is a software company, we develop custom built
            software for clients - covering everything from financial
            institutions & medical companies all the way to tech companies and
            government organizations.
          </p>
        </div>
        
        <div style={styles.footerLinks}>
          <h1 style={styles.title}>Omnira</h1>
          {/* <a href="#about" style={styles.footerLink}>About</a>
          <a href="#projects" style={styles.footerLink}>Projects</a>
          <a href="#services" style={styles.footerLink}>Services</a>
          <a href="#clients" style={styles.footerLink}>Clients</a>
          <a href="#team" style={styles.footerLink}>Team</a>
          <a href="#blog" style={styles.footerLink}>Blog</a>
          <a href="#contact" style={styles.footerLink}>Contact</a> */}
        </div>
        
        {/* <div style={styles.footerLinks}>
          <a href="#facebook" style={styles.footerLink}>Facebook</a>
          <a href="#instagram" style={styles.footerLink}>Instagram</a>
          <a href="#twitter" style={styles.footerLink}>Twitter</a>
        </div> */}
      </footer>
    </div>
  );
};

export default Contact;
