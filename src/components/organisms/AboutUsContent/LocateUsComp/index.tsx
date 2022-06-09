import Malaysia from "../../../../assets/images/Location/malaysia.png";
import Charminar from "../../../../assets/images/Location/charminar.png";
import AboutUsInfoTitle from "../../../atoms/AboutUsInfoTitle";
import LocateUs from "../../../molecules/AboutUs/LocateUS";

const LocateUsComp = () => {
  const addresses = [
    "108 Raghava Towers,Madeenaguda Hyderabad, TS 500 049 IN",
    "Idealogic Technologies SDN BHD (1227934-K) 10-3, Galleria-cyberjaya, Jalan Technokrat 6 Cyber 5, Cyberjaya  63000,Selangor, Malaysia",
  ];
  return (
    <>
      <AboutUsInfoTitle text="Locate Us" />
      <LocateUs address={addresses[0]} image={Charminar} />
      <LocateUs address={addresses[1]} image={Malaysia} />
    </>
  );
};
export default LocateUsComp;
