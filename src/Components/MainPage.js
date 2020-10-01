import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import img1 from './img/plus.png';
import img2 from './img/search.png';
import img3 from './img/company.png';
import Link from '@material-ui/core/Link'


export class MainPage extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar 
                    title="Era Consulting"
                    style={styles.banner}
                    id="banner"
                    />
                    <h2 
                    style={styles.subheading}
                    >Деловодник</h2>
                    <br/>
                    <Container maxWidth="sm">
                    <Grid container spacing={3} style={styles.fgrids}>
                        <Grid item xs={6} sm={6}>
                        <Link to="/addpage.js">
                            <Paper className="Grid">
                            <img src={img1} className="logo" alt="Plus" />
                            <p className="Title">Додај</p>
                            </Paper>
                        </Link>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                    <a href="#">   
                        <Paper className="Grid">
                        <img src={img2} className="logo" alt="Search" />
                        <p className="Title">Побарај</p>   
                        </Paper>
                    </a>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                    <a href="#">      
                        <Paper className="Grid">
                        <img src={img3} className="logo" alt="Company" />
                        <p className="Title">Додај/Избриши Фирма</p>   
                        </Paper>
                    </a>
                        </Grid>
                    </Grid>
                    </Container>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles ={
    banner:{
        backgroundColor: "#3257a8"
    },
    subheading: {
        color: "rgb(136, 136, 136)",
        fontWeight: "600"
    },
}

export default MainPage
