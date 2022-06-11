import { Grid, Typography } from "@mui/material";
import profiles from "../../../../shared/data/profilesData";
import { ProfileProps } from "../../../../shared/types";
import Profile from "../../Profile";

const ProfileComp = () => {
  const profileList: ProfileProps[] = profiles;
  return (
    <Grid item xs={12}>
      <Typography
        variant="h2"
        sx={{ fontWeight: 500, textAlign: "center", marginTop: "4rem" }}
        gutterBottom
      >
        Our Team
      </Typography>
      <Grid item container justifyContent="space-between" xs={12}>
        {profileList.map((profile) => (
          <Profile
            designation={profile.designation}
            name={profile.name}
            education={profile.education}
            profilePic={profile.profilePic}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default ProfileComp;
