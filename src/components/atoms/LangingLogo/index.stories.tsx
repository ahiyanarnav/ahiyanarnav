import LocateUs from "../../molecules/AboutUs/LocateUS";
import Charminar from "../../../assets/images/Location/charminar.png";

export default {
  title: "molecules/LocateUs",
  component: LocateUs,
};
const address = "108 Raghava Towers,Madeenaguda Hyderabad, TS 500 049 INDIA";
export const LocateUsComp = () => (
  <LocateUs address={address} image={Charminar} />
);
