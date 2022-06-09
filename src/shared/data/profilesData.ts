import CIO from "../../assets/images/Profiles/CIO.jpg";
import CFO from "../../assets/images/Profiles/CFO.jpg";
import Founder from "../../assets/images/Profiles/Founder.jpg";
import Investor from "../../assets/images/Profiles/Investor.jpg";
import Subbu from "../../assets/images/Profiles/Subbu.jpg";
import Vasudeva from "../../assets/images/Profiles/Vasudeva.jpg";
import { ProfileProps } from "../types";

const profiles: ProfileProps[] = [
  {
    name: "Sujeeth Kumar Machkuri",
    designation: "Founder, Chairman & CEO",
    education: "B.Tech",
    profilePic: Founder,
  },
  {
    name: "Sreeram bolisetti",
    designation: "Co-Founder & M.D (Malaysia)\nInvestor",
    education: "",
    profilePic: Investor,
  },
  {
    name: "Divya N",
    designation: "CFO",
    education: "MBA Finance",
    profilePic: CFO,
  },
  {
    name: "Sri Chaitanya Kandikonda",
    designation: "CIO",
    education: "M.S",
    profilePic: CIO,
  },
  {
    name: "Subramanyam Boyapati",
    designation: "M.D (Mobile Apps)",
    education: "",
    profilePic: Subbu,
  },
  {
    name: "Vasudeva Gudimalla",
    designation: "CTO & M.D (Web Apps)",
    education: "",
    profilePic: Vasudeva,
  },
];

export default profiles;
