import { useState } from "react";
import Navbar from "reactjs-navbar";
import { Audio } from "react-loader-spinner";

import Logo from "../../../assets/images/logo-main.png";
import "./index.css";
import navItems from "../../../shared/data/navItems";

const InfoPage = () => {
  const isLoading = useState(false)[0];

  return (
    <Navbar
      logo={Logo}
      loader={<Audio height="25" width="25" color="grey" ariaLabel="loading" />}
      isLoading={isLoading}
      menuItems={navItems}
    />
  );
};
export default InfoPage;
