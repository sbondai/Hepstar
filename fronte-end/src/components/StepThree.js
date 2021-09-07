import React, { useState } from "react";
import {
  Typography,
  Button,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "grid",
    justifyContent: "center",
    position: "relative",
    zIndex: 3,
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "#49a6dd",
    },
  },
  btn: {
    width: "35%",
    height: "2.5rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    color: "#fff",
    borderRadius: "5em",
    background: "#49a6dd",
    "&:hover": {
      background: "#49a6dd",
    },
  },
  formControl: {
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const StepThree = ({
  activeStep,
  steps,
  handleNext,
  policyObj,
  someObj,
  requestProd,
}) => {
  const classes = useStyles();

  const [formValue, setFormValue] = useState({
    email: "",
    username: "",
    password: "",

    contactNumber: "",
    firstName: "",
    lastName: "",
    passportNumber: "",
  });

  const { gender, email, contactNumber, firstName, lastName, passportNumber } =
    formValue;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [dob, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    const requestProduct = {
      Authentication: requestProd.Authentication,
      RequestParameters: {
        PolicyRequests: {
          PolicyRequest: {
            ProductID: policyObj.PricedProduct.ProductInformation.ID,
            Insureds: {
              Insured: {
                ID: "1",
                Firstname: firstName,
                Surname: lastName,
                DOB: dob,
                NationalID: passportNumber,
                Residency: requestProd.RequestParameters.Insureds[0].Residency,
                TravelInformation: {
                  TravelItemValue: 1000,
                },
              },
            },
            ContactInformation: {
              Email: email,
            },
            TravelInformation: {
              StartDate:
                requestProd.RequestParameters.TravelInformation.StartDate,
              EndDate: requestProd.RequestParameters.TravelInformation.EndDate,
              DepartureCountry:
                requestProd.RequestParameters.TravelInformation
                  .DepartureCountry,
              CoverCountries:
                requestProd.RequestParameters.TravelInformation.CoverCountries,
              BookingValue: "1000",
              FlightInformations: {
                FlightInformation: {
                  Segment: "1",
                  FlightNumber: "XYZ",
                  StartDate:
                    requestProd.RequestParameters.TravelInformation.StartDate,
                  EndDate:
                    requestProd.RequestParameters.TravelInformation.EndDate,
                  CoverCountries:
                    requestProd.RequestParameters.TravelInformation
                      .CoverCountries,
                },
              },
            },
          },
        },
      },
    };

    await fetch("http://localhost:8080/api/v1/policyissue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestProduct),
    })
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1.Status.Code);
        // if (data1.Status.Code === "200") {
        //   handleNext("Success");
        // }
        handleNext(data1.Status.Code);
      })
      .catch((err) => handleNext("Error"));
  };

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" style={{ color: "#999", textAlign: "left" }}>
        Passenger Information
      </Typography>
      <Typography
        variant="overline"
        style={{ color: "#999", textAlign: "left", marginBottom: "1rem" }}
      >
        Passenger 1
      </Typography>

      <div className={classes.mainContainer}>
        <form>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={6}>
              <FormControl
                variant="outlined"
                size="small"
                className={classes.formControl}
              >
                <InputLabel id="genderLabel">Gender</InputLabel>
                <Select
                  labelId="genderLabel"
                  id="gender"
                  value={gender}
                  onChange={handleChange}
                  label="Gender"
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={6}>
              <TextField
                label="First Name"
                id="firstname"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                id="lastname"
                variant="outlined"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                size="small"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid
              item
              xs={6}
              style={{ color: "#999", textAlign: "left", marginTop: "1.6rem" }}
            >
              <TextField
                label="Passport Number"
                id="passportnumber"
                name="passportNumber"
                value={passportNumber}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction="row" justifyContent="space-between">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="dob"
                    value={dob}
                    name="dob"
                    onChange={handleDateChange}
                    label="Date of Birth"
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>

          <Typography
            variant="h6"
            style={{ color: "#999", textAlign: "left", marginBottom: "1rem" }}
          >
            Contact Information
          </Typography>

          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={6}>
              <TextField
                label="Email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Contact Number"
                id="contactnumber"
                name="contactNumber"
                value={contactNumber}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>

          <>
            <Button
              className={classes.btn}
              variant="contained"
              onClick={handleSubmit}
            >
              {activeStep === steps.length ? "Finish" : "Continue"}
            </Button>
          </>
        </form>
      </div>
    </div>
  );
};

export default StepThree;
