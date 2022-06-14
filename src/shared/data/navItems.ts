import {
  faUsers,
  faGlobe,
  faDatabase,
  faProjectDiagram,
  faListSquares,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  {
    title: "Technology",
    icon: faDatabase,
    isAuth: true,
    onClick: () => {},
  },
  {
    title: "Services",
    icon: faGlobe,
    isAuth: true,
  },
  {
    title: "Products",
    icon: faListSquares,
    isAuth: true,
  },
  {
    title: "Clients",
    icon: faUsers,
    isAuth: true,
  },
  {
    title: "Process We Do",
    icon: faProjectDiagram,
    isAuth: true,
  },
];

export default navItems;
