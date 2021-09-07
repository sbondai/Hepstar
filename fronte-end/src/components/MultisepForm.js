import React, { useState } from "react";
import { Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "6rem auto",

    border: "1px solid #999",
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "#49a6dd",
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#a7bd40",
    },
  },
});

const MultisepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [someObj, setSomeObj] = useState(null);
  const [policyObj, setPolicyObj] = useState(null);
  const [requestProd, setrequestProd] = useState(null);

  const handleNext = (data) => {
    // setFinalMsg(data);
    console.log(data);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBuy = (data) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setPolicyObj(data);
  };

  const handleRequest = async (data) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setrequestProd(data);
    fetch("http://localhost:8080/api/v1/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data1) => {
        setSomeObj(data1);
      })
      .catch((err) => console.log(err));
  };

  function getSteps() {
    return ["TRAVEL DETAILS", "CHOOSE A PRODUCT", "PASSENGER INFO"];
  }

  const steps = getSteps();

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <StepOne
            handleRequest={handleRequest}
            activeStep={activeStep}
            steps={steps}
          />
        );
      case 1:
        return someObj ? (
          <StepTwo
            handleBuy={handleBuy}
            activeStep={activeStep}
            steps={steps}
            someObj={someObj}
          />
        ) : null;
      case 2:
        return (
          <StepThree
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
            policyObj={policyObj}
            someObj={someObj}
            requestProd={requestProd}
          />
        );

      default:
        return "Unknown Step";
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <>
        {activeStep === steps.length ? (
          "Success"
        ) : (
          <>{getStepsContent(activeStep)}</>
        )}
      </>
    </div>
  );
};

export default MultisepForm;
