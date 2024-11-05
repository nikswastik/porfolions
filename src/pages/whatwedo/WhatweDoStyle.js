import { fontSize } from "@mui/system";
import { localAssets, web_colors } from "../../constants/Constants";

export const styles = {
  container: {
    backgroundImage: `url(${localAssets.bg_what_wedo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 537,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:web_colors.secondaryText

  },
  l_ctr: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize:40
  },
  r_ctr: {
    width: "50%",
  },
};
