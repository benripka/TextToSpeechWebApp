import React, { useState } from "react";
import { Stepper, Step, StepLabel, StepContent, Button, Paper, FormControl, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";

const FileFormatSelector = (props) => {

    const [currentSelection, changeSelection] = useState("pdf");

    const handleChange = event => {
        changeSelection(event.target.value);
    }

    return (
        <FormControl component="fieldset">
            <RadioGroup name="file type" value={currentSelection} onChange={handleChange} row>
                <FormControlLabel 
                    value="pdf"
                    control={<Radio color="primary" />}
                    label="PDF"
                    labelPlacement="top"
                />
                <FormControlLabel 
                    value="txt"
                    control={<Radio color="primary" />}
                    label="Text File (txt)"
                    labelPlacement="top"
                />  
                <FormControlLabel 
                    value="rtf"
                    control={<Radio color="primary" />}
                    label="Rich Text (rtf)"
                    labelPlacement="top"
                />
                <FormControlLabel 
                    value="docx"
                    control={<Radio color="primary" />}
                    label="Word File (docx)"
                    labelPlacement="top"
                />
            </RadioGroup>
        </FormControl>
    )
}

const getStepContent = (index) => {
    switch (index) {
        case 0:
            return <FileFormatSelector />
        case 1: 
            return <h1>Second Step Content</h1>
        case 2:
            return <h1>Third Step Content</h1>
        default:
            return <div></div>
    }
}

const getSteps = () => {
    return ["Select a File Type", "Upload the File", "Processing" , "Play or Download"];
}

export const PdfReader = (props) => {

    const [activeStep, changeStep] = useState(0);

    const steps = getSteps();

    const handleAdvance = (event) => {
        if(activeStep === 3) return;
        changeStep(activeStep + 1);
    }

    const handleBack = (event) => {

        if(activeStep === 0) return;

        changeStep(activeStep - 1);
    }

    return (
        <React.Fragment>
            <Stepper activeStep={activeStep} orientation="vertical">
                {
                    steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel >{label}</StepLabel>
                            <StepContent>
                                <Paper>
                                    {getStepContent(index)}
                                    <Button variant="contained" color="primary" onClick={handleAdvance}>Advance</Button>
                                    <Button variant="contained" color="secondary" onClick={handleBack}>Back</Button>
                                </Paper>
                            </StepContent>
                        </Step>
                    ))
                }
            </Stepper>
        </React.Fragment>
    )
}