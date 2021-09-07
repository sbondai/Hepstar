import React from "react";
import {
  Typography,
  Button,
  Grid,
  FormControlLabel,
  Radio,
  RadioGroup,
  makeStyles,
} from "@material-ui/core";
import CountrySelect from "./CountrySelect";
import Travellers from "./Travellers";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles({
  mainContainer: {
    display: "grid",
    justifyContent: "center",
    position: "relative",
    zIndex: 5,
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
});

const StepOne = ({ activeStep, steps, handleRequest }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState("return");
  const [enable, setEnable] = React.useState(true);

  const handleRadioChange = (event) => {
    setValue(event.target.value);

    setEnable(false);
    event.preventDefault();

    if (value === "return") {
      setEnable(false);
    } else if (value === "oneway") {
      setEnable(true);
    } else {
      setEnable(true);
    }
  };

  const today = new Date();

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedDate2, setSelectedDate2] = React.useState(new Date());
  const [country, setSelectCountry] = React.useState("ZA");
  const [destination, setSelectDestination] = React.useState("ZA");
  const [residence, setSelectResidence] = React.useState("ZA");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleDateChange2(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestProduct = {
      Authentication: {
        Channel: "API",
        Username: "impdistributor",
        Password: "FFRyEGGmMJYHA",
      },
      RequestParameters: {
        Insureds: [
          {
            ID: "1",
            DOB: "1983-09-25",
            Residency: residence,
          },
        ],
        TravelInformation: {
          StartDate: selectedDate,
          EndDate: selectedDate2,
          DepartureCountry: country,
          CoverCountries: {
            CoverCountry: destination,
          },
        },
      },
    };
    handleRequest(requestProduct);
    //handleNext();
  };

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h3" style={{ color: "#999", textAlign: "left" }}>
        Travel Details
      </Typography>
      <Typography
        variant="overline"
        style={{ color: "#999", textAlign: "left", marginBottom: "1rem" }}
      >
        Tell us a little about your trip and we'll find just the right cover for
        you.
      </Typography>
      <div className={classes.mainContainer}>
        <form>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <RadioGroup row value={value} onChange={handleRadioChange}>
              <FormControlLabel
                value="return"
                control={<Radio />}
                label="Return"
              />
              <FormControlLabel
                value="oneway"
                control={<Radio />}
                label="One way"
              />
            </RadioGroup>{" "}
            <Travellers />
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <CountrySelect
                onChange={(event, value) => {
                  if (!value) {
                    return;
                  }
                  setSelectCountry(value.code);
                }}
                label="Departure country"
              />
              <CountrySelect
                label="Country of residence"
                onChange={(event, value) => {
                  if (!value) {
                    return;
                  }
                  setSelectResidence(value.code);
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <CountrySelect
                label="Destination"
                onChange={(event, value) => {
                  if (!value) {
                    return;
                  }
                  setSelectDestination(value.code);
                }}
              />
            </Grid>
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <KeyboardDatePicker
                minDate={today}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Departure Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              {enable && (
                <KeyboardDatePicker
                  minDate={selectedDate}
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline2"
                  label="Return Date"
                  value={selectedDate2}
                  onChange={handleDateChange2}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              )}
            </Grid>
          </MuiPickersUtilsProvider>
          <>
            <Button
              className={classes.btn}
              variant="contained"
              onClick={handleSubmit}
            >
              {activeStep === steps.length ? "Finish" : "Find travel insurance"}
            </Button>
          </>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
