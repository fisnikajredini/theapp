import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import AddPage from './Components/AddPage';
import MainPage from './Components/MainPage';
import SearchPage from './Components/SearchPage';
import AddCompany from './Components/AddCompany';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';

function App() {
  return (
    <MuiThemeProvider>
      <React.Fragment>
          <AppBar 
          title="Era Consulting"
          style={styles.banner}
          id="banner"
          />
          <div className="App">
            <Route exact path="/" component={MainPage}/>
            <Route path="/AddPage" component={AddPage}/>
            <Route path="/SearchPage" component={SearchPage}/>
            <Route path="/AddCompany" component={AddCompany}/>
          </div>
          <BottomNavigation className="footer">
            <p>Copyright @ 2B Media 2020. All Rights Reserved</p>
          </BottomNavigation>
      </React.Fragment>
    </MuiThemeProvider>
  );
}

const styles ={
  banner:{
      backgroundColor: "#3257a8"
  }
}

export default App;
