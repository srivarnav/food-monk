import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header:{
        backgroundColor:'#4e004e',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar className={classes.header} position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        FOODMONK
                    </Typography>
                    <Button color="inherit" onClick={props.loginOpen}>Login</Button>
                </Toolbar>
            </AppBar>
            
        </div>
    );
}