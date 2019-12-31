import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, StepContent, Button, Paper, FormControl, RadioGroup, FormControlLabel, Radio, TextField} from "@material-ui/core";
import AWS from "aws-sdk";
import Sound from "react-sound";

const  tryPolly = (text, updateAudio) => {
}

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

const InputTextForTranslation = () => {

    const [value, changeValue] = useState("");
    const [isLoading, changeIsLoading] = useState(true);
    const [playing, changePlaying] = useState("STOPPED");
    const [audio, changeAudio] = useState(null);

    useEffect(() => {
        console.log(audio);
        if(audio !== null && audio !== undefined) {
            changePlaying("PLAYING");
            changeIsLoading(false);
            console.log("Playing!")
            console.log(isLoading)
            console.log(audio);
        }
    }, [audio]);

    const handleChange = (event) => {
        changeValue(event.target.value);
    }

    const handleClick = (event) => {
        
        // Set the region where your identity pool exists (us-east-1, eu-west-1)
        AWS.config.region = 'us-east-1';

        // Configure the credentials provider to use your identity pool
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:0e8a0974-f61c-4030-af4c-b2a6f0f71fca',
            Logins: { // optional tokens, used for authenticated login

            }
        });

        // Make the call to obtain credentials
        AWS.config.credentials.get(function(){

            // Credentials will be available when this function is called.
            var accessKeyId = AWS.config.credentials.accessKeyId;
            var secretAccessKey = AWS.config.credentials.secretAccessKey;
            var sessionToken = AWS.config.credentials.sessionToken;

        });

        var params = { 
            OutputFormat: "mp3", 
            SampleRate: "8000", 
            Text: value, 
            TextType: "text", 
            VoiceId: "Joanna"
        };

        var polly = new AWS.Polly();

        polly.synthesizeSpeech(params, (error, data) => {

            if(error) console.log("Error from polly: ", error);
            console.log(data);

            var uint8Array = new Uint8Array(data.AudioStream);
            var arrayBuffer = uint8Array.buffer;
            var blob = new Blob([arrayBuffer]);

            var url = URL.createObjectURL(blob);

            console.log(url)


            changeAudio(url);
        })
    }

    return (
        <div>
            <Paper>
            <form noValidate autoComplete="off">
                <TextField
                    id="text-input"
                    lable="Text to Vocalize"
                    multiline
                    rows="10"
                    value={value}
                    onChange={handleChange}
                />
            </form>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Read Out Loud
            </Button>
            </Paper>
            <Sound 
                url={audio}
                playStatus={playing}
            />
            </div>
    )
}

const getStepContent = (index) => {
    switch (index) {
        case 0:
            return <FileFormatSelector />
        case 1: 
            return <InputTextForTranslation /> 
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