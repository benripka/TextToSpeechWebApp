import React from "react";
import { Paper, Grid } from "@material-ui/core";
import {HomePage} from "./HomePage";
import {AboutPage} from  "./AboutPage";
import {ProjectsPage} from "./ProjectsPage";
import {NotesPage} from "./NotesPage";




export const Body = (props) => {

    const currentTab = props.currentTab;

    return (
        <Paper>
            {currentTab == 0 && <HomePage />}
            {currentTab == 1 && <NotesPage />}
            {currentTab == 2 && <AboutPage />}
            {currentTab == 3 && <ProjectsPage />}
        </Paper>    
    );
}