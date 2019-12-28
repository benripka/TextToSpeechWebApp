import React from "react";
import {Tabs, Tab, Button, Grid } from "@material-ui/core";

export const NavBar = (props) => {

    const tabValue = props.currentTab;
    const dispatch = props.dispatch;

    const handleChange = (event, value) => {
        dispatch({ type : "changeTab", payload : value });
    }

    return (
        <Tabs
            value={tabValue}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
        >
            <Tab value="Home" />
            <Tab value="Notes" />
            <Tab value="About" />
            <Tab value="Projects" />
        </Tabs>
    );
}