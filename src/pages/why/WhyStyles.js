import { web_colors } from "../../constants/Constants";

export const styles = {
    container: {
      color: web_colors.primaryText, // White text
      textAlign: "center", // Center text horizontally
      padding: "40px 20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center", // This ensures the content is centered horizontally
      marginTop: 120,
    },
    title: {
      fontSize: "2em",
      marginBottom: "20px",
      width: "100%", // You might adjust this value to make the title smaller if needed
      display: "flex",
      justifyContent: "center", // Centering the content horizontally
      textAlign: "center", // Ensure text is centered
      marginLeft:100
    //   backgroundColor:"red"
    },
    features: {
      display: "flex",
      justifyContent: "space-between",
      alignSelf: "center",
      width: "80%",
      marginTop:50
    },
    feature: {
      flex: 1,
      maxWidth: "200px",
      textAlign: "center",
    },
    icon: {
      fontSize: "2.5em",
      marginBottom: "10px",
      width: 300,
    },
    heading: {
      fontSize: "1.5em",
      marginBottom: "10px",
      width: 300,
    },
    description: {
      fontSize: "1em",
      width: 300,
    },
  };
  
