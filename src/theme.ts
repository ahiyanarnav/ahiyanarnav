import { colors } from "@mui/material";
import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

let ORANGE = { ...orange, 500: "#fb6f0e" };
const theme = createTheme({
  palette: {
    primary: {
      main: ORANGE[500],
      contrastText: "white",
    },
    text: {
      primary: colors.blueGrey[200],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          height: 41,
          marginTop: 1,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "white !important",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "white",
        },
        h2: {
          color: "white",
        },
        h3: {
          color: "white",
        },
        h4: {
          color: "white",
        },
        h5: {
          color: "white",
        },
        h6: {
          color: "white",
        },
        subtitle1: {
          color: "grey",
        },
        subtitle2: {
          color: "white",
        },
      },
    },
  },
});

export default theme;
