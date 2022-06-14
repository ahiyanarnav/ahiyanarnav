import { Grid } from "@mui/material";
import PROCESS_DATA from "../../../../shared/data/PorcessData";
import InfoTitle from "../../../atoms/InfoTitle";
import ProcessCard from "../../../molecules/ProcessCard";

const ProcessComp = () => {
  const data = PROCESS_DATA;
  return (
    <Grid
      container
      width="90%"
      margin="auto"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <InfoTitle title="Process We Follow" />
      {data.map(({ title, description, image }) => (
        <ProcessCard title={title} description={description} image={image} />
      ))}
    </Grid>
  );
};
export default ProcessComp;
