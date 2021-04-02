import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { loremIpsum } from "lorem-ipsum";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const BuildingConstructionServices = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            color="secondary"
            style={{ marginBottom: "20px" }}
          >
            Building Construction Services
          </Typography>
            <Typography variant="body2" color="textSecondary" align="justify">
              {loremIpsum()}
              {loremIpsum()}
              {loremIpsum()}
              {loremIpsum()}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" align="justify">
              {loremIpsum()}
              {loremIpsum()}
              {loremIpsum()}
              {loremIpsum()}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" align="justify">
              {loremIpsum()}
              {loremIpsum()}
              {loremIpsum()}
              {loremIpsum()}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src="/images/construction-three.jpg"
              alt="Building Construction Services"
              width={500}
              height={400}
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default BuildingConstructionServices;
