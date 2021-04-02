import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '30px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  titleStyle: {
    fontFamily: "Playfair Display",
    fontWeight: "bolder",
    fontSize: "19px",
    color: "rgba(7, 53, 66, 0.719)",
    marginBottom: '20px'
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <hr />
        <div>
        <Typography color="textSecondary" className={classes.titleStyle}>
          Our Clients
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={1}>
            {" "}
            <Image
              src="/clients/delmonte.png"
              alt="Delmonte"
              width={150}
              height={150}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={1}>
            {/* <img src="/clients/WU_YI.jfif" /> */}
            <Image
              src="/clients/WU_YI.jfif"
              alt="Delmonte"
              width={200}
              height={150}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={1}>
            <Image
              src="/clients/kpa.png"
              alt="Delmonte"
              width={200}
              height={150}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={1}>
            <Image
              src="/clients/total-logo.png"
              alt="Delmonte"
              width={250}
              height={150}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={1}>
            <Image
              src="/clients/REA.jfif"
              alt="Delmonte"
              width={250}
              height={150}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
