import { Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import useStyles from 'utils/styles';

export default function Checkoutwizard({ activeStep = 0 }) {
  console.log('activeStep', activeStep);
  const classes= useStyles();
  return (
    <Stepper 
    activeStep={activeStep} 
    alternativeLabel
    className={classes.transparentBackgroud}
    >
      {['Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}

