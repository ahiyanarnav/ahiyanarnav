import { TabPropType } from "../types";

import IOT from "../../assets/images/Info/Technologies/iot.png";
import BLOCKCHAIN from "../../assets/images/Info/Technologies/block_chain.jpeg";
import RPA from "../../assets/images/Info/Technologies/rpa.jpeg";

import WM from "../../assets/images/Info/Services/app_dev.jpeg";
import DM from "../../assets/images/Info/Services/seo.png";
import EM from "../../assets/images/Info/Services/event1.jpeg";
import OPD from "../../assets/images/Info/Services/outsourced-product-development.png";

import DP from "../../assets/images/Info/Products/poulty.jpeg";
import YS from "../../assets/images/Info/Products/yoskool.png";

export const TECHNOLOGY_TABS_DATA: TabPropType[] = [
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

export const SERVICES_TABS_DATA: TabPropType[] = [
  {
    key: "W&M",
    description: `We provide a comprehensive range of Android and IOS mobile application, E-commerce application development services that enable enterprises to exploit the power of custom applications to support new capabilities and enhance the customer and partner experience.

  We work with our clients to understand their business and devise customized solutions that maximize application availability, agility and predictability resulting in Lower costs, less risk, greater ROI, a faster response to market opportunities and the support our clients need to achieve their long-term objectives.
  
  Application Services are core to our strategy. We at SS cater selected verticals like Financial Services, Manufacturing, Retail & Consumer, Media & Entertainment, Life Sciences & Healthcare and other emerging verticals.`,
    image: WM,
    label: "Web & Mobile Application Development",
  },
  {
    key: "DMS",
    description: `We provide a comprehensive range of custom application development services that enable enterprises to exploit the power of custom applications to support new capabilities and enhance the customer and partner experience.

  We work with our clients to understand their business and devise customized solutions that maximize application availability, agility and predictability resulting in Lower costs, less risk, greater ROI, a faster response to market opportunities and the support our clients need to achieve their long-term objectives.`,
    image: DM,
    label: "Digital Marketing Services",
    imageSide: "right",
  },
  {
    key: "EM",
    description: `We provide Events as a full service, lifestyle based, professional event planning company that specializes in corporate events, dinner galas, fundraisers, long service awards, grand openings, conferences and private events.

  We love details! And our commitment is to see each event through from start to finish while keeping the goals, vision, budget and client's needs in mind at all times. We are committed to following through on every detail so you don't have to. From a 1000 person dinner gala to a small intimate private party or meeting, Our Events has experienced it all.`,
    image: EM,
    label: "Event Management",
  },
  {
    key: "OPD",
    description: `We provide a comprehensive range of custom application development services that enable enterprises to exploit the power of custom applications to support new capabilities and enhance the customer and partner experience.

  We work with our clients to understand their business and devise customized solutions that maximize application availability, agility and predictability resulting in Lower costs, less risk, greater ROI, a faster response to market opportunities and the support our clients need to achieve their long-term objectives.
  
  Application Services are core to our strategy. We at SS cater selected verticals like Financial Services, Manufacturing, Retail & Consumer, Media & Entertainment, Life Sciences & Healthcare and other emerging verticals.`,
    image: OPD,
    label: "Outsourced Product Development",
    imageSide: "right",
  },
];

export const PRODUCTS_TABS_DATA: TabPropType[] = [
  {
    key: "DP",
    description: `DigiPoultry is our solution aimed to provide a 360° monitoring, visibility, control and data driven intelligence to the poultry sector. The solution is envisaged to evolve to handling all operations end to end such as:

    Poultry Environment Management
    Poultry Operations Management
    Poultry Water Management
    Data Driven Operations Automation
    The application is available on Desktop as well as Mobile Platforms and provides:
    
    Live Data Monitoring
    Alarms, Alerts & Notifications
    Chick Weight Monitoring
    Feed Tracking
    Calculation of Feed Conversion Ratio
    Complete Operations Tracking
    Reporting & Intelligence`,
    image: DP,
    label: "Digi Poultry",
  },
  {
    key: "YS",
    description: `YOSKOOL is a third party application we involve in marketing and sales.

    YOSKOOL is a great solution to all schools, colleges and any other academic institutes where these business entities to manage their operations over digital platform on Real-time.
    
    YOSKOOL functioning is avoiding the gap between the management, administrators, teachers and students/parents and providing all modules services under single umbrella.
    
    We are here for a very simple reason – to be the differentiator in redefining how schools are managed in the present and how to protect you in the future from the onslaught of technical advancements which is inevitable. A simple next gen fully automated ERP that can withstand future uncertainties with simple up gradations as an when required.
    
    Enhancing further YOSKOOL defined system of service delivery which is hands on and timely through our QRT (Quick response team) seamlessly achieve academic excellence with our one-on-one learning program that prioritizes deep understanding of concepts`,
    image: YS,
    label: "YOSKOOL(SALES)",
  },
];
