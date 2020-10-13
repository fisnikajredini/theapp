import React from 'react';
import './App.css';
import {Route,Link} from "react-router-dom"
import AddPage from './Components/AddPage';
import MainPage from './Components/MainPage';
import SearchPage from './Components/SearchPage';
import AddCompany from './Components/AddCompany';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import axios from "axios"
let companyNames;
function App() {
    axios.get("/hello").then((response) => {
      companyNames = response.data.data;
    });
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
            <Route path="/AddPage"  render={()=>(<AddPage companyNames={companyNames}/>)}/>
            <Route path="/SearchPage" render={()=>(<SearchPage companyNames={companyNames}/>)}/>
            <Route path="/AddCompany" render={()=>(<AddCompany companyNames={companyNames}/>)}/>
          </div>
          <BottomNavigation className="footer">
            <p>Copyright <a href="https://www.linkedin.com/company/2b-media-company/" target="_blank">@2BMedia</a> 2020. All Rights Reserved</p>
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
