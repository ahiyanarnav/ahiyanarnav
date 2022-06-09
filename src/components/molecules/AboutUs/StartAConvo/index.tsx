import { Typography } from "@mui/material";
import AboutUsInfoTitle from "../../../atoms/AboutUsInfoTitle";

const StartAConvo = () => (
  <>
    <AboutUsInfoTitle text="Start A Conversation" />
    {/* TODO: adding a proper email and phone redirects */}
    <Typography variant="body1" color="white" width="20rem" gutterBottom>
      info@ahiyanarnav.com
    </Typography>
    {/* TODO: adding a proper email and phone redirects */}
    <Typography
      variant="body1"
      color="white"
      width="20rem"
      marginBottom={8}
      gutterBottom
    >
      +91 99491 17526 | +91 7337338234
    </Typography>
  </>
);

export default StartAConvo;
