import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '50px 0 0 0',
    textAlign: 'center',
    fontFamily: 'Playfair Display',
    fontSize: '22px',
    fontWeight: 'bold',
    color: "rgba(7, 53, 66, 0.719)"
  },
  rootContent: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      // margin: theme.spacing(1),
      width: theme.spacing(40),
      margin: '5px auto',
      textAlign: 'center',
      padding: theme.spacing(5)
    },
    padding: theme.spacing(6),
    // backgroundColor: 'rgb(7, 53, 66)'
  },
  paper: {
    backgroundColor: 'rgb(7, 53, 66)',
  },
  paperContent: {
    color: 'rgb(252, 255, 255)',
    fontSize: '0.85rem'
  }
}));

const Mission = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <hr />
        <Typography color="textSecondary" className={classes.title}>
          Our Mission Statement
        </Typography>
      </div>
      <div className={classes.rootContent}>
          <Paper elevation={0} className={classes.paper}>
            <img src="/mission/Mission_Gray.png" alt="Mission Statement" />
            <Typography variant="h6" color="secondary" style={{margin: '20px 0 20px 0', color: 'rgb(255, 255, 255)'}}>
              Mission
            </Typography>
            <Typography variant="body2" color="textSecondary" className={classes.paperContent}>
              We aim to be a world class engineering Construction Company
              providing efficient affordable, sustainable, cost effective
              services of highest level of quality
            </Typography>
          </Paper>
          <Paper elevation={0} className={classes.paper}>
            <img src="/mission/Vision_Gray.png" alt="Vision Gray" />
            <Typography variant="h6" color="secondary" style={{margin: '20px 0 20px 0', color: 'rgb(255, 255, 255)'}}>Vision</Typography>
            <Typography variant="body2" color="textSecondary" className={classes.paperContent}>
              A regional market leader in provision of civil engineering and
              building construction activities
            </Typography>
          </Paper>
          
          <Paper elevation={0} className={classes.paper}>
            <img src="/mission/Core_Values_Gray.png" alt="Our Core Values" />
            <Typography variant="h6" color="secondary" style={{margin: '20px 0 20px 0', color: 'rgb(255, 255, 255)'}}>Core Values</Typography>
            <Typography variant="body2" color="textSecondary" className={classes.paperContent}>
              We believe in mainatining the highest standard of professionalis,
              loyalty integrity, creativity, positive attitude, delivery that
              meets and surpass expectations while offering prompt and lasting
              solutions that stand the test of time.
            </Typography>
          </Paper>
      </div>
    </React.Fragment>
  );
};

export default Mission;
