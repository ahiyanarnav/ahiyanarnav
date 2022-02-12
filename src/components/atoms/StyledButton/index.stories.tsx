import StyledButton from ".";

export default {
  title: "atoms/StyledButton",
  component: StyledButton,
};

export const Primary = () => <StyledButton title="Hello" />;
export const Curved = () => <StyledButton title="Hello" shape="curved" />;
export const Square = () => <StyledButton title="Hello" shape="sqaure" />;
export const BlackText = () => (
  <StyledButton title="Hello" shape="sqaure" textColor="black" />
);
