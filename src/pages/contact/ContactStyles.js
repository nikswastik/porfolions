import { web_colors } from "../../constants/Constants";

export const styles = {
    contactContainer: {
      backgroundColor: "#1a1a1a",
      color: web_colors.secondaryText,
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
      color: web_colors.secondaryText,
      borderRadius: "5px",
      width: "100%",
    },
    textarea: {
      padding: "0.75rem",
      border: "1px solid #555",
      backgroundColor: "#1a1a1a",
      color: web_colors.secondaryText,
      borderRadius: "5px",
      width: "100%",
      resize: "none",
      height: "100px",
    },
    submitBtn: {
        color: web_colors.secondaryText,
      border: "none",
      padding: "0.75rem 1.5rem",
      borderRadius: "5px",
      cursor: "pointer",
    
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
        color: web_colors.secondaryText,
     
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
  };