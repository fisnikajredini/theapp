import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import AddPage from './Components/AddPage';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MainPage}/>
      <Route path="/AddPage" component={AddPage}/>
    </div>
  );
}

export default App;
