import Navbar from "reactjs-navbar";
import { Audio } from "react-loader-spinner";

import Logo from "../../../assets/images/logo-main.png";
import "./index.css";
import navItems from "../../../shared/data/navItems";

const InfoNavbar = () => (
  <Navbar
    logo={Logo}
    loader={<Audio height="25" width="25" color="grey" ariaLabel="loading" />}
    menuItems={navItems}
  />
);
export default InfoNavbar;
