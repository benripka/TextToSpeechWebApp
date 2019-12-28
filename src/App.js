import React, { useReducer } from 'react';
import './App.css';
import {InitialState, Reducer} from "./Reducer";
import {NavBar} from "./Components/NavBar";
import {Footer} from "./Components/Footer";
import {Body} from "./Components/Body";


function App() {

  const [store, dispatch] = useReducer(Reducer, InitialState);

  return (
    <div className="App">
      <React.Fragment>
        <NavBar currentTab={store.CurrentTab} dispatch={dispatch}/>
        <Body currentTab={store.CurrentTab} />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
