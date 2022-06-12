export interface LandingPageProps {
  text?: string;
}

export interface ProfileProps {
  name: string;
  designation: string;
  education?: string;
  profilePic: string;
}

export interface TabPropType {
  key: string;
  label: string;
  description: string;
  image: string;
  imageSide?: "left" | "right";
}
