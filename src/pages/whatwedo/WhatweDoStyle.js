
import { localAssets, web_colors } from "../../constants/Constants";

export const styles = {
  container: {
    backgroundImage: `url(${localAssets.bg_what_wedo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 537,
    width:"100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",

    color: web_colors.secondaryText,
  },
  l_ctr: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    height: "100%",
  },
  title: {
    fontSize: 40,
    textAlign: "left",
  },
  r_ctr: {
    width: "50%",
    height: "100%",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    maxWidth: "300px",
  },
  section: {
    padding: "10px 0",
    borderBottom: "1px solid #333", // Thin border between sections
  },
  highlightedText: {
    color: web_colors.secondaryText, // Bright yellow color
    fontSize: 25,
  },
};
