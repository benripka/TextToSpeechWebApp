import React, { useReducer } from 'react';
import './App.css';
import {InitialState, Reducer} from "./Reducer";
import {NavBar} from "./Components/NavBar";
import {Footer} from "./Components/Footer";
import {Body} from "./Components/Body";
import { Grid } from '@material-ui/core';


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

export default App;
