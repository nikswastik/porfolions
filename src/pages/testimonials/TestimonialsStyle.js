import { web_colors } from "../../constants/Constants";

export const styles = {
  container: {
    backgroundColor: "#121212", // Dark background
    fontFamily: "'Oswald', sans-serif",
    padding: "40px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color:web_colors.secondaryText
  },
  testimonialsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    color: "#333",
  },
  text: {
    fontSize: "14px",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  author: {
    fontWeight: "bold",
  },
  position: {
    fontSize: "12px",
    color: "#555",
  },
};
