import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Aux from '../../../../hoc/Aux/Aux';


const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review(props) {
    const classes = useStyles();
    console.log(props);

    return (
        <Aux>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {
                    props.purchasedItem.map((pItem) => (
                        <ListItem className={classes.listItem} key={pItem.title}>
                            <ListItemText primary={pItem.title} secondary={null} />
                            <Typography variant="body2">{pItem.count} x &#x20b9; {pItem.price}</Typography>
                        </ListItem>
                    ))
                }
                <Divider/>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Sub Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        &#x20b9; {parseFloat(props.totalPrice).toFixed(2)}
                    </Typography>
                </ListItem>

                <ListItem className={classes.listItem}>
                    <ListItemText primary="Taxes" />
                    <Typography variant="body2" className={classes.total}>
                        +  &#x20b9; {((props.totalPrice) * 11 / 100).toFixed(2)}
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem className={classes.listItem}>
                    <ListItemText variant="h5" primary="Grand Total" />
                    
                    <Typography variant="h5" className={classes.total}>
                        &#x20b9; {(props.totalPrice + (props.totalPrice) * 11 / 100).toFixed(2)}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
            </Grid>
        </Aux>
    );
}