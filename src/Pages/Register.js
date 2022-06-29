import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import {
  isEmailValid,
  isNumericField,
  isPanNumberValid,
} from "../utils/ValidationUtils";
import "./Register.css";

const Register = (props) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [isConsentChecked, setConsentChecked] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const errors = {};

  const handleChange = (e) => {
    const input = e.target.name;
    if (input === "username") {
      setUserName(e.target.value);
    }
    if (input === "email") {
      setEmail(e.target.value);
    }
    if (input === "mobileNumber" && isNumericField(e.target.value)) {
      setMobileNumber(e.target.value);
    }
    if (input === "panNumber") {
      setPanNumber(e.target.value);
    }
  };

  //validations
  const runValidations = () => {
    if (username.trim().length === 0) {
      errors.username = "Please enter name";
    }
    if (email.trim().length === 0) {
      errors.email = "Please enter email";
    } else if (isEmailValid(email) === false) {
      errors.email = "Please enter valid email";
    }
    if (mobileNumber.length === 0) {
      errors.mobileNumber = "Please enter mobile number";
    } else if (mobileNumber.length != 10) {
      errors.mobileNumber = "Mobile number must include 10 digits";
    }
    if (isPanNumberValid(panNumber) === false) {
      errors.panNumber = "Please enter PAN number";
    }
  };

  const handleConsentCheckboxChange = (event) => {
    setConsentChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runValidations();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }

    const formData = {
      username: username,
      email: email,
      mobileNumber: mobileNumber,
      panNumber: panNumber,
    };
    // setUserName('')
    // setEmail('')
    // setMobileNumber('')
    // setPanNumber('')
  };
  return (
    <div>
      <center>
        <Container maxWidth="md" style={{ paddingTop: "50px" }}>
          <Paper component={Box} width="50%" mx="auto" p={4}>
            <Typography variant="h4">Registration Form</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                placeholder="Enter your Name"
                margin="normal"
                variant="outlined"
                color="secondary"
                label="Name"
                value={username}
                name="username"
                onChange={handleChange}
              />
              {formErrors.username && (
                <span style={{ color: "red" }}>{formErrors.username}</span>
              )}
              <TextField
                fullWidth
                placeholder="Mobile Number"
                margin="normal"
                variant="outlined"
                color="secondary"
                label="Mobile Number"
                inputProps={{ maxLength: 10 }}
                value={mobileNumber}
                name="mobileNumber"
                error={formErrors.mobileNumber ? true : false}
                onChange={handleChange}
              />
              {formErrors.mobileNumber && (
                <span style={{ color: "red" }}>{formErrors.mobileNumber}</span>
              )}
              <TextField
                className="textfield-dimension"
                fullWidth
                placeholder="PAN Number"
                margin="normal"
                variant="outlined"
                color="secondary"
                label="PAN Number"
                value={panNumber}
                name="panNumber"
                inputProps={{ maxLength: 10 }}
                onChange={handleChange}
              />
              {formErrors.panNumber && (
                <span style={{ color: "red" }}>{formErrors.panNumber}</span>
              )}
              <p style={{ fontSize: "10px", marginTop: "8px" }}>
                Your PAN is required to check credit details and will help us in
                giving you an accurate offer
              </p>
              <TextField
                fullWidth
                placeholder="Enter your Email"
                margin="normal"
                variant="outlined"
                color="secondary"
                label="Email"
                value={email}
                name="email"
                onChange={handleChange}
              />
              {formErrors.email && (
                <span style={{ color: "red" }}>{formErrors.email}</span>
              )}
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                    onChange={handleConsentCheckboxChange}
                    checked={isConsentChecked}
                  />
                }
                label="Consent to override any DND subscription, Bussiness
                                Executive to contact and fetch CIBIL score to process loan
                                request"
              />
              <br />
              <Button
                disabled={isConsentChecked ? false : true}
                className="submit-btn"
                variant="contained"
                color="primary"
                float="left"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Container>
      </center>
    </div>
  );
};
export default Register;
