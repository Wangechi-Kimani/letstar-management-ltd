import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(56),
      height: theme.spacing(34),
      padding: theme.spacing(10),
      color: "rgb(255, 255, 255)",
      backgroundColor: "rgb(7, 53, 66)"
    },
    textAlign: "center",
    justifyContent: "space-evenly",
    fontStyle: "italic",
  },
  companyTitle: {
    textAlign: "right",
    padding: "40px 0 0 0",
    fontSize: "13px",
    fontStyle: "normal"
  },

  title: {
    marginTop: '50px',
    paddingBottom: '20px'
  },

  titleStyle: {
    fontFamily: "Playfair Display",
    fontWeight: 'bolder',
    fontSize: '20px',
    color: "rgba(7, 53, 66, 0.719)"
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.title}>
        <hr />
        <Typography color="textSecondary" className={classes.titleStyle}> Testimonials</Typography>
      </div>
      <div className={classes.root}>
        <Paper>
          <Typography component="p" style={{ fontSize: "13px" }}>
            "Investax Capital has a great experience working with Letstar
            Management Ltd. They have worked successfully on our project and
            finished on time. They are trustworthy, reliable and very
            knowledgeable in their field of work."
          </Typography>
          <p className={classes.companyTitle}>
            Rural Electrification Authority(REA)
          </p>
        </Paper>
        <Paper>
          <Typography vacomponent="p" style={{ fontSize: "13px" }}>
            "Investax Capital has a great experience working with Letstar
            Management Ltd. They have worked successfully on our project and
            finished on time. They are trustworthy, reliable and very
            knowledgeable in their field of work."
          </Typography>
          <p className={classes.companyTitle}>
            Mutech Motors and Civil Engineering Contractors
          </p>
        </Paper>
        <Paper>
          <Typography component="p" style={{ fontSize: "13px" }}>
            "Investax Capital has a great experience working with Letstar
            Management Ltd. They have worked successfully on our project and
            finished on time. They are trustworthy, reliable and very
            knowledgeable in their field of work."
          </Typography>
          <p className={classes.companyTitle}>Investax Capital</p>
        </Paper>
        <Paper>
          <Typography component="p" style={{ fontSize: "13px" }}>
            "Investax Capital has a great experience working with Letstar
            Management Ltd. They have worked successfully on our project and
            finished on time. They are trustworthy, reliable and very
            knowledgeable in their field of work."
          </Typography>
          <p className={classes.companyTitle}>Leo Capital Holdings</p>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
