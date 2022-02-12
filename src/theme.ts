import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { useGlobalStyles } from "./globalStyles";

let ORANGE = { ...orange, 500: "#fb6f0e" };
const theme = createTheme({
  palette: {
    primary: {
      main: ORANGE[500],
      contrastText: "white",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export default theme;
