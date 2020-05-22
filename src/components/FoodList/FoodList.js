import React from 'react';
import FoodListgenerator from './FoodListGenerator/FoodListGenerator';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {/* <Typography variant="h3" gutterBottom>
                        North Indian
                    </Typography> */}
                    <FoodListgenerator data={props.data} added={() => props.itemAdded(props.id)} removed={() => props.itemRemoved(props.id)} />
                </Grid>
            </Grid>
        </div>
    );
}
