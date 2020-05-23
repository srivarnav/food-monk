import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Address from './Address/Address';
import Payment from './Payment/Payment';
import Summary from './Summary/Summary';
import Aux from '../../../hoc/Aux/Aux';


const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        backgroundColor: '#4e004e',
        color: '#ffffff'
    },
}));

const steps = ['Shipping address', 'Review Cart', 'Payment details'];

function getStepContent(props, step) {
    console.log(props);
    switch (step) {
        case 0:
            return <Address />;
        case 1:
            return <Summary purchasedItem={props.purchasedItem} totalPrice={props.totalPrice} />;
        case 2:
            return <Payment />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Aux>
            <Typography component="h1" variant="h4" align="center">
                Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}  >
                {steps.map((label) => (
                    <Step key={label} >
                        <StepLabel >{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Aux>
                {activeStep === steps.length ? (
                    <Aux>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                                </Typography>
                        <Typography variant="subtitle1">
                            Your order number is #****#. We have emailed your order confirmation.
                        </Typography>
                    </Aux>
                ) : (
                        <Aux>
                            {getStepContent(props, activeStep)}
                            <div className={classes.buttons}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} className={classes.button}>
                                        Back
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </div>
                        </Aux>
                    )}
            </Aux>
        </Aux>
    );
}