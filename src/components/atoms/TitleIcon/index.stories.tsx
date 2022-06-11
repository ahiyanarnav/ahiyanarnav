import FacebookIcon from "@mui/icons-material/Facebook";
import TitleIcon from ".";

export default {
  title: "Atoms/Title Icon",
  component: TitleIcon,
};

export const TitleIconStory = () => (
  <div style={{ background: "black" }}>
    <TitleIcon icon={<FacebookIcon />} text="Facebook" />
  </div>
);
