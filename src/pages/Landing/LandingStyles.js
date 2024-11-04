export const styles = {
  landingContainer: {
    backgroundColor: "white",
    height: "60%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "relative", // Enable absolute positioning for the image
    fontFamily: "'Alkatra', sans-serif", // Apply the imported font here
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  companyInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  companyName: {
    fontSize: 24,
  },
  textMargin: {
    marginTop: 40,
    fontSize: 24,
  },
  slogan: {
    fontSize: 40,
    color: "black",
    textAlign: "center",
  },
  leftContent: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  statsContainer: {
    display: "flex",
    gap: "20px",
    padding: 10,
  },
  card: {
    padding: "20px",
    borderRadius: "20px",
    color: "white",
    textAlign: "center",
    width: "150px",
    fontSize: "18px",
  },
  cardYellow: {
    backgroundColor: "#FFEB3B",
    width: "18rem",
    color: "black",
  },
  cardBlack: {
    backgroundColor: "#000",
    width: "18rem",
  },
  cardBlue: {
    backgroundColor: "#3F51B5",
    width: "18rem",
  },
  navBar: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
  },
  image: {
    position: "absolute",
    // width: "8rem", // Adjust the width as necessary
    // height: "8rem",
  },

  stackImg:{ width: "100%", height: "auto",borderRadius:20 }
};
