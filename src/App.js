import React, { useReducer } from 'react';
import './App.css';
import {initialState, Reducer} from "./Reducer";


function App() {

  const [store, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="App">
      <React.Fragment>
        <NavBar currentTab={store.CurrentTab} dispatch={dispatch}/>
        <Body />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
