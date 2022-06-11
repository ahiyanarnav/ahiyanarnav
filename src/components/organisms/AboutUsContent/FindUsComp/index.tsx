import { Instagram, Twitter } from "@mui/icons-material";
import Facebook from "@mui/icons-material/Facebook";
import { Grid } from "@mui/material";
import AboutUsInfoTitle from "../../../atoms/AboutUsInfoTitle";
import TitleIcon from "../../../atoms/TitleIcon";

const FindUsComp = () => (
  <div style={{ width: "20rem", marginTop: "1rem" }}>
    <AboutUsInfoTitle text="Find Us On" />
    <Grid item container xs={12}>
      {/* TODO: Add redirect links */}
      <TitleIcon icon={<Facebook />} text="Facebook" />
      <TitleIcon icon={<Twitter />} text="Twitter" />
      <TitleIcon icon={<Instagram />} text="Instagram" />
    </Grid>
  </div>
);
export default FindUsComp;
