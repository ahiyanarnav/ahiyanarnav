import Carousel from "react-material-ui-carousel";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import IMG_1 from "../../../../assets/images/Info/Clients/3.png";
import IMG_2 from "../../../../assets/images/Info/Clients/1519909457618.png";
import IMG_3 from "../../../../assets/images/Info/Clients/1605854639103.jpeg";
import IMG_4 from "../../../../assets/images/Info/Clients/cloudhedge-logo.png";
import IMG_5 from "../../../../assets/images/Info/Clients/CW_Final-01.png";
import IMG_6 from "../../../../assets/images/Info/Clients/exp.jpeg";
import IMG_7 from "../../../../assets/images/Info/Clients/header-logo.png";
import IMG_8 from "../../../../assets/images/Info/Clients/ilbil-logo-min.png";
import IMG_9 from "../../../../assets/images/Info/Clients/image002.png";
import IMG_10 from "../../../../assets/images/Info/Clients/logo-triaero.jpeg";
import IMG_11 from "../../../../assets/images/Info/Clients/logo.png";
import IMG_12 from "../../../../assets/images/Info/Clients/logo1.png";
import IMG_13 from "../../../../assets/images/Info/Clients/logo2.png";
import IMG_14 from "../../../../assets/images/Info/Clients/Lulu-Hypermarket-2.jpeg";
import IMG_15 from "../../../../assets/images/Info/Clients/og_image.jpeg";
import IMG_16 from "../../../../assets/images/Info/Clients/sedin.png";
import IMG_17 from "../../../../assets/images/Info/Clients/unnamed.png";
import IMG_18 from "../../../../assets/images/Info/Clients/xtr.png";
import IMG_19 from "../../../../assets/images/Info/Clients/yoskool.png";
import InfoTitle from "../../../atoms/InfoTitle";

const useStyles = makeStyles({
  carousel: { width: "90%", margin: "auto", height: "50%", marginTop: "50px" },
  image: {
    backgroundColor: "white",
    height: "15rem",
    borderRadius: 15,
    border: "4px solid orange",
  },
});

const OurClients = () => {
  const images = [
    IMG_1,
    IMG_2,
    IMG_3,
    IMG_4,
    IMG_5,
    IMG_6,
    IMG_7,
    IMG_8,
    IMG_9,
    IMG_10,
    IMG_11,
    IMG_12,
    IMG_13,
    IMG_14,
    IMG_15,
    IMG_16,
    IMG_17,
    IMG_18,
    IMG_19,
  ];
  const classes = useStyles();
  return (
    <>
      <InfoTitle title="Our Clients" />
      <Carousel
        className={classes.carousel}
        animation="slide"
        stopAutoPlayOnHover
      >
        {images.map((image) => (
          <Grid container item justifyContent="center">
            <img src={image} alt="" className={classes.image} />
          </Grid>
        ))}
      </Carousel>
    </>
  );
};
export default OurClients;
