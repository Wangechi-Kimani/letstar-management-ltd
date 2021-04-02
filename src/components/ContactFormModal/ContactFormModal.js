import React, { useState, useReducer } from "react";
import { Modal } from "react-bootstrap";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

// Form
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "40ch",
      margin: "10px auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "60ch",
      margin: "10px auto",
    },
    border: "1px solid gray",
    margin: "10px auto",
    borderRadius: "10px",
    padding: theme.spacing(4),
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    textAlign: "center",
  },
  buttonModal: {
    // background: 'rgb(245, 231, 103)',
    // color: 'rgb(7, 53, 66)',
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderRadius: "5px",
      color: "rgb(255, 255, 255)",
      border: "1px solid rgb(255, 255, 255)",
    },
    color: "rgb(245, 231, 103)",
    borderRadius: "15px",
    border: "1px solid rgb(245, 231, 103)",
    textTransform: "lowercase",
    justifyContent: "flex-start",
  },
}));

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "gray",
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "gray",
      borderWidth: 1,
    },
    "& input:valid:hover + fieldset": {
      borderColor: "gray",
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      borderWidth: 1,
      borderColor: "gray",
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      firstName: "",
      lastName: "",
      email: "",
      mail_body: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};


const ContactForm = ({onSubmit}) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const classes = useStyles();

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    await fetch("/api/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    console.log(formData);
    onSubmit();
  };

  return (
    <div>
      <form className={classes.root} onSubmit={sendEmail}>
        <div disabled={submitting}>
          <div>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              Talk To Us
            </Typography>
          </div>
          <ValidationTextField
            className={classes.margin}
            label="First Name"
            required
            variant="outlined"
            fullWidth
            id="validation-outlined-input"
            color="secondary"
            size="small"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName || ""}
            disabled={submitting}
          />
          <ValidationTextField
            className={classes.margin}
            label="Last Name"
            required
            variant="outlined"
            fullWidth
            id="validation-outlined-input"
            color="secondary"
            size="small"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName || ""}
            disabled={submitting}
          />
          <ValidationTextField
            className={classes.margin}
            label="Email Address"
            required
            variant="outlined"
            fullWidth
            id="validation-outlined-input"
            color="secondary"
            size="small"
            name="email"
            onChange={handleChange}
            value={formData.email || ""}
            disabled={submitting}
          />
          <ValidationTextField
            className={classes.margin}
            label="Message"
            required
            variant="outlined"
            fullWidth
            id="validation-outlined-input"
            color="secondary"
            multiline
            rows={4}
            name="content"
            onChange={handleChange}
            value={formData.content || ""}
            disabled={submitting}
          />
          <div className={classes.button}>
            <Button
              type="submit"
              variant="outlined"
              size="medium"
              disabled={submitting}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};


// Modal
export default function ModalContactForm() {
  const [show, setShow] = useState(false);
  const classes = useStyles();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onContactFormSubmit = () => {
    // e.preventDefault();
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleShow}
        className={classes.buttonModal}
        fullWidth
      >
        Get In Touch
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <ContactForm onSubmit={onContactFormSubmit} />
        </Modal.Body>
      </Modal>
    </>
  );
}
