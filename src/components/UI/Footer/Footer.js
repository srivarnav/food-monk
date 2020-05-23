import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Summary from '../Checkout/Summary/Summary';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        bottom: 0,
        top: 'auto'
    },
    header: {
        backgroundColor: '#ffffff',
        bottom: 0,
        top: 'auto'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'black',
        float: 'right'
    },
    titleBill: {
        // flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    console.log(props);
    return (
        <div className={classes.root} >
            <AppBar className={classes.header} position="fixed">
                <Toolbar>
                    <Grid item xs={2}>
                        <Button variant="outlined" color="inherit" style={{ color: '#4e004e', float: 'right' }} onClick={handleClickOpen}>
                            <span className="material-icons">arrow_drop_up</span>
                        </Button>
                    </Grid>
                    <Grid item xs={7}>
                        {(fullScreen) ? <Typography variant="h5" className={classes.title} style={{float:'left', marginLeft:'15px'}}>
                                            &#x20b9; {props.totalPrice}
                                        </Typography>
                                        : <Typography variant="h5" className={classes.title} >
                                            Subtotal: &#x20b9; {props.totalPrice}
                                        </Typography>
                        }

                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" style={{ backgroundColor: '#4e004e', color: '#ffffff', float: 'right' }} onClick={props.checkoutOpen}>Continue</Button>
                    </Grid>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        style={{ width: '100%' }}
                    >
                        <DialogTitle id="responsive-dialog-title"></DialogTitle>
                        <DialogContent >
                            <DialogContentText id="alert-dialog-description">
                                <Typography component="h1" variant="h4" align="center">
                                    ------------Cart------------
                                </Typography>
                                <Summary purchasedItem={props.purchasedItem} totalPrice={props.totalPrice} />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} style={{ color: '#4e004e' }}>
                                Cancel
                            </Button>
                            <Button onClick={handleClose} style={{ color: '#4e004e' }} autoFocus>
                                continue
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
        </div>
    );
}