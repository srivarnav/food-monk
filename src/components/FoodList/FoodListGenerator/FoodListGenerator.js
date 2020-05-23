import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid(props) {
    const classes = useStyles();
    const button = (!props.data.count>0)?
        <Button variant="outlined" size="small" onClick={props.added}>Add+</Button>:
        <ButtonGroup size="small" aria-label="small outlined button group">
            <Button onClick={props.removed}>-</Button>
            <Button>{props.data.count}</Button>
            <Button onClick={props.added}>+</Button>
        </ButtonGroup>

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    {/* <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="../../../assets/image/idli.jpg" />
                        </ButtonBase>
                    </Grid> */}
                    <Grid item xs={12} md container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            {(props.data.type === "veg")?<Icon style={{ color: green[500] }}>add_circle</Icon>:<Icon color="secondary">add_circle</Icon> }

                                <Typography gutterBottom variant="subtitle1">
                                    {props.data.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <Rating name="half-rating-read" defaultValue={props.data.rating} precision={0.5} size="small" readOnly />
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {props.data.description}
                                </Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant="subtitle1">&#x20b9; {props.data.price}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Grid item>
                            </Grid>
                            <Grid item>
                                {button}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
