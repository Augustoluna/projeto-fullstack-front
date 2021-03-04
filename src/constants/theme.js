import { createMuiTheme } from "@material-ui/core/styles";
import { primaryColor, secondaryColor, neutralColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },

    secondary: {
      main: secondaryColor,
    },

    text: {
      primary: neutralColor,
    },
  },
});
export default theme;
