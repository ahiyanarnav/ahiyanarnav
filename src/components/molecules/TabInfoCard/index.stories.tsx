import TabInfoCard from ".";
import IOT from "../../../assets/images/Info/Technologies/iot.png";

export default {
  title: "molecules/Tab Info Card",
  component: TabInfoCard,
};
const description =
  "Interest In The Internet Of Things(IoT) market is rapidly expanding as companies across multiple vertical industries recognize the need for connectivity and the potential transformation enabled through connectivity.However, IoT adoption in key segments will be limited by its complexity.";

export const TabInfoCardLeft = () => (
  <TabInfoCard
    imageSide="left"
    image={IOT}
    key="iot"
    label="IOT"
    description={description}
  />
);
