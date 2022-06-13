import { TabPropType } from "../types";
import IOT from "../../assets/images/Info/Technologies/iot.png";
import BLOCKCHAIN from "../../assets/images/Info/Technologies/block_chain.jpeg";
import RPA from "../../assets/images/Info/Technologies/rpa.jpeg";

const technologyTabsData: TabPropType[] = [
  {
    key: "iot",
    label: "IOT",
    description: `Interest In The Internet Of Things(IoT) market is rapidly expanding as companies across multiple vertical industries recognize the need for connectivity and the potential transformation enabled through connectivity.However, IoT adoption in key segments will be limited by its complexity.

  System Integrators minimize the complexity by aggregating ecosystem partners and integrating the various solution components such as sensors, devices, platforms, external data, back-end systems, analytics engine and much more.System Integrator’s role is critical in building end-to-end solutions which maximizes customer value.A system integrator enables enterprises to gain the benefits of IoT while maintaining their focus on their core businesses.
  
  We expertise in back-end ERP systems such as Oracle, SAP, Salesforce and many other business process solutions as well as in IoT makes us an ideal partner for Telco’s and Enterprise customers in their Digital Transformation journey.By leveraging competencies across the organisation, SS provides “One Stop Shop” for all verticalized IoT solutions and enriched Omni-Channel experience to our customers.`,
    image: IOT,
  },
  {
    key: "rpa",
    label: "Robotic Process Automation",
    description: `Robotic process automation or RPA is defined as the technology that will automate often repetitive and mundane tasks for employees with the use of software robots . Many companies are opting for RPA to make their processes better and reducing the workload on employees, allowing them to focus on other skillful tasks.

    We at IdeaLogic offer automation solution for the business process in various domains to reduce the time in which the process is done without compromising in quality.This will enhance your business outcomes and deliver the real value of your business to your audience. This process is easy to implement and can even help you in reducing the costs of staffing. Thus, this simply means that there will be no chances of human error and your productivity gets increased.
    
    Robotic process automation is undeniably very useful for businesses to automate several tasks and get unexpected outcomes. You can easily build up a faster service team to complete your tasks without any delays`,
    image: RPA,
    imageSide: "right",
  },
  {
    key: "bt",
    label: "Blockchain Technology",
    description: `Fast-forward into the digital era, we are living at a time where exchange of physical assets for value has become largely a thing of the past. Currently the world is witnessing a radical shift in the financial system where digital assets are transferred directly and securely without intermediaries. Currently penned at 100M + transactions, Block chain technology is used regularly by millions of users around the globe to transact securely without hassles.

    Blockchain is not one single technology, but a group of technologies including Encryption & Hashing, P2P Network Program or the Blockchain protocol, implemented together for the exchange of digital assets. Blockchain technology runs on a peer-to-peer model, unlike many other applications on the WWW running on a client-server model. Provisioning of a distributed network minimizes the risk of corruption or the impact because of failure of one of the nodes. Blockchain technology has successfully formed a transaction layer for the internet, where users use high-security keys and shared layers to transact with each other securely.`,
    image: BLOCKCHAIN,
  },
];
export default technologyTabsData;
