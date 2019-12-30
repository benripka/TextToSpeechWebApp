import React, { useState } from "react";
import { Stepper } from "@material-ui/core";
import { ProjectFilter} from "./ProjectFilter";
import { PdfReader } from "./PdfReader";

export const ProjectsPage = (props) => {

    const [currentProject, changeProject] = useState(0);

    return (
        <React.Fragment>
            <ProjectFilter currentProject={currentProject} changeProject={changeProject}/>
            <PdfReader />
        </React.Fragment>
    )
}