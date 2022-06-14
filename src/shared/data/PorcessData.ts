import { ProcessCardProps } from "../types";

import IMG_1 from "../../assets/images/Info/Process/1.png";
import IMG_2 from "../../assets/images/Info/Process/2.png";
import IMG_3 from "../../assets/images/Info/Process/3.png";
import IMG_4 from "../../assets/images/Info/Process/4.png";
import IMG_5 from "../../assets/images/Info/Process/5.png";
import IMG_6 from "../../assets/images/Info/Process/6.png";
import IMG_7 from "../../assets/images/Info/Process/7.png";

const PROCESS_DATA: ProcessCardProps[] = [
  {
    title: "1. Requirement Gathering",
    description:
      "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
    image: IMG_1,
  },
  {
    title: "2. UI/UX Design",
    description:
      "We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience",
    image: IMG_2,
  },
  {
    title: "3. Prototype",
    description:
      "After designing, you will get your prototype, which will be sent ahead for the development process for the product.",
    image: IMG_3,
  },
  {
    title: "4. Development",
    description:
      "Development of mobile application/web/blockchain started using latest tools and technologies with transparency.",
    image: IMG_4,
  },
  {
    title: "5. Quality Assurance",
    description:
      "Hyperlink values quality and provides 100% bug free application with no compromisation in it.",
    image: IMG_5,
  },
  {
    title: "6. Deployment",
    description:
      "After trial and following all processes, your app is ready to launch on the App store or Play Store.",
    image: IMG_6,
  },
  {
    title: "7. Support & Maintenance",
    description:
      "Our company offers you all support and the team is always ready to answer every query after deploymrnt",
    image: IMG_7,
  },
];

export default PROCESS_DATA;
