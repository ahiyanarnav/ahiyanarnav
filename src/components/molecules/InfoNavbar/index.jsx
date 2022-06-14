import Navbar from "reactjs-navbar";
import { Audio } from "react-loader-spinner";

import "./index.css";
import {
  faUsers,
  faGlobe,
  faDatabase,
  faProjectDiagram,
  faListSquares,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/logo-main.png";
import {
  CLIENTS_URL,
  PROCESS_URL,
  PRODUCTS_URL,
  SERVICES_INFO,
  TECHNOLOGY_URL,
} from "../../../shared/routes";

const InfoNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      logo={Logo}
      loader={
        <Audio height="25" width="25" color="grey" ariaLabel="loading.." />
      }
      menuItems={[
        {
          title: "Technology",
          icon: faDatabase,
          isAuth: true,
          onClick: () => {
            navigate(TECHNOLOGY_URL);
          },
        },
        {
          title: "Services",
          icon: faGlobe,
          isAuth: true,
          onClick: () => {
            navigate(SERVICES_INFO);
          },
        },
        {
          title: "Products",
          icon: faListSquares,
          isAuth: true,
          onClick: () => {
            navigate(PRODUCTS_URL);
          },
        },
        {
          title: "Clients",
          icon: faUsers,
          isAuth: true,
          onClick: () => {
            navigate(CLIENTS_URL);
          },
        },
        {
          title: "Process We Do",
          icon: faProjectDiagram,
          isAuth: true,
          onClick: () => {
            navigate(PROCESS_URL);
          },
        },
      ]}
    />
  );
};
export default InfoNavbar;
