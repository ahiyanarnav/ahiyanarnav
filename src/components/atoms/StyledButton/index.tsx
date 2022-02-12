import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface StyledButtonProps {
  title: string;
  shape?: "sqaure" | "curved" | "normal";
  textColor?: string;
}

const useStyles = makeStyles({
  root: (props: any) => {
    const shape = props?.shape;
    const radius =
      shape === undefined ? "0.3rem" : shape === "sqaure" ? "0px" : "3rem";
    return {
      borderRadius: radius,
    };
  },
  textColor: (props: any) => {
    return {
      color: props.textColor,
    };
  },
});

const StyledButton: React.FC<StyledButtonProps> = (props) => {
  const { title, shape, textColor = "white" } = props;
  const classes = useStyles({ shape, textColor });
  return (
    <Button className={`${classes.root} ${classes.textColor}`} {...props}>
      {title}
    </Button>
  );
};

export default StyledButton;
