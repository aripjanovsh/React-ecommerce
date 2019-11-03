import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
}));

const Spinner = () => {
    const classes = useStyles();
    return (
        <CircularProgress className={classes.progress}/>
    )
};

export default Spinner;