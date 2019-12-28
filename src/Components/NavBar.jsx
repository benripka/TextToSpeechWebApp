import React from "react";
import {Tabs, Tab, Button, Grid, AppBar, makeStyles, Paper } from "@material-ui/core";

export const NavBar = (props) => {

    const tabValue = props.currentTab;
    const dispatch = props.dispatch;

    const handleChange = (event, value) => {
        dispatch({ type : "changeTab", payload : value });
    }

    return (
        <Paper square>
            <Grid container row justify="center" xs={12}>
                <Grid item justify="center">
                    <Tabs
                        value={tabValue}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        position="center"
                    >
                        <Tab label="Home" />
                        <Tab label="Notes" />
                        <Tab label="About" />
                        <Tab label="Projects" />
                    </Tabs>
                </Grid>
            </Grid>
        </Paper>
    );  
}