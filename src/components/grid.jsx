import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function NestedGrid() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>平记包点(6am-5pm)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>粿條汤(6am-10am)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>经济炒米粉/粿條/面(5:30am-9am)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>糕点(6.30am-11am)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Roti Canai(6:30am-2pm)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Nasi Lemak/Tosai/Chappati/Puri/Idli/咖喱饭.(6:30am-11am)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>炒粿条(7am-2pm)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>鸡饭(7am-2pm)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>云吞面(7:30am-2pm)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>鸭饭/鸭粥(9am-2pm)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>水果档(9am-5pm)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>印度糕/炸香蕉/Nasi Lemak(11:30am-2pm)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>叻沙(12pm-5pm)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>阿权小炒-碟炒饭(7am-3pm)</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>炸鸡肉(3pm-晚上卖完为此)</Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}
