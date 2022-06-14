import ProcessCard from ".";
import IMG_1 from "../../../assets/images/Info/Process/1.png";

export default {
  title: "molecules/Process Card",
  component: ProcessCard,
};
const title = "1. Requirement Gathering";
const description =
  "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.";

export const ProcessCardStory = () => (
  <ProcessCard title={title} description={description} image={IMG_1} />
);
