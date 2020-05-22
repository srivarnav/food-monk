import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ContainedButtons(props) {
    const classes = useStyles();
    console.log(props);
    return (
        <div className={classes.root}>
            <Button  color={props.color} disabled={props.disabled} size={props.size} variant={props.variant}>{props.title}</Button>
        </div>
    );
}