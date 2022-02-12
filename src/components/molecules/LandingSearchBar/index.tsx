import { Button, TextField } from "@mui/material";
import { useGlobalStyles } from "../../../globalStyles";

const LandingSearchBar = () => {
  const globalClasses = useGlobalStyles();
  return (
    <>
      <TextField placeholder="Email Address" size="small" focused />
      <Button size="large" className={globalClasses.square} disableElevation>
        Notify Me
      </Button>
    </>
  );
};

export default LandingSearchBar;
