import { web_colors } from "../../constants/Constants";
import GlobalStyles from "../../constants/GlobalStyles";

export const styles = {
  landing_ctr: {
    color: web_colors.primaryText,
    display: "flex",
    justifyContent: "space-between",
    Padding: 10,
    height: "60vh",
  },
  landing_banner: {
    height: 500,
    width: 500,
  },
  landing_l_ctr: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  landing_r_ctr: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  slogan_text: {
    fontSize: 73,
    fontFamily: "ABeeZee",
  },
  highlighted_text: {
    color: web_colors.secondaryText,
  },
  start_btn: {
    ...GlobalStyles.default_btn,
    alignSelf: "flex-start",
    marginLeft: 130,
    marginTop: 80,
  },
};
