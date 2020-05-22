import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Aux from '../../../hoc/Aux/Aux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

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
                        <Button variant="outlined" color="inherit" style={{ color: '#4e004e', float: 'right' }} onClick={handleClickOpen}><span className="material-icons">arrow_drop_up</span></Button>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h5" className={classes.title} >
                            Subtotal: &#x20b9; {props.totalPrice}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" style={{ backgroundColor: '#4e004e', color: '#ffffff', float: 'right' }}>Continue</Button>
                    </Grid>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" style={{textAlign:'center', backgroundColor:'#4e004e', color:'#ffffff'}}>{"SUMMARY CART"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Grid container spacing={3}>
                                    {
                                        (props.purchasedItem).map(pItem => {
                                            return (
                                                <>
                                                    <Grid item xs={6}>
                                                        <Typography variant="h6" style={{ textAlign: 'center' }}>
                                                            {pItem.title}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography variant="h6" style={{ textAlign: 'center' }}>
                                                            {pItem.count} x &#x20b9; {pItem.price}
                                                        </Typography>
                                                    </Grid>
                                                </>
                                            )
                                        })
                                    }
                                    <Grid item xs={12}>
                                        <hr/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" style={{ textAlign: 'center' }}>
                                            SubTotal
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" style={{ textAlign: 'center' }}>
                                            &#x20b9; {parseFloat(props.totalPrice).toFixed(2)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle2" style={{ textAlign: 'center' }}>
                                            Taxes
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle2" style={{ textAlign: 'center' }}>
                                            +  &#x20b9; {((props.totalPrice)*11/100).toFixed(2)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <hr/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" style={{ textAlign: 'center', color:'black' }}>
                                            Grand Total
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" style={{ textAlign: 'center', color:'black'}}>
                                            &#x20b9; {(props.totalPrice + (props.totalPrice)*11/100).toFixed(2)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                continue
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
        </div>
    );
}