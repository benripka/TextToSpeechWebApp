import React, { useReducer } from 'react';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports"; 
import { withAuthenticator} from "aws-amplify-react";
import './App.css';
import {InitialState, Reducer} from "./Reducer";
import {NavBar} from "./Components/NavBar";
import {Footer} from "./Components/Footer";
import {Body} from "./Components/Body";
import { Grid } from '@material-ui/core';

Amplify.configure(awsconfig); 



function App() {

  const [store, dispatch] = useReducer(Reducer, InitialState);

  return (
    <div className="App">
      <Grid container spacing={3} direction="column" justify="center">
        <Grid item xs={12}>
          <NavBar currentTab={store.CurrentTab} dispatch={dispatch}/>
        </Grid>
        <Grid item xs={12}>
          <Body currentTab={store.CurrentTab} />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
      <React.Fragment>
        
      </React.Fragment>
    </div>
  );
}

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'My user name',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
    {
      label: 'PhoneNumber',
      key: 'phone_number',
      required: true,
      displayOrder: 3,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 4,
      type: 'string'
    }
  ]
};
const usernameAttributes = 'My user name';

export default withAuthenticator(App, {
  signUpConfig,
  usernameAttributes
});

