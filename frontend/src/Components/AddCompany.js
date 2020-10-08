import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Container from '@material-ui/core/Container';
import RaisedButton from "material-ui/RaisedButton";
import Grid from '@material-ui/core/Grid';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "./dropdown.css";
import TextField from '@material-ui/core/TextField';

const defaultItemCompany = { company_name: "Селектирај Фирма ..." };
let companyNames = [];

export class AddCompany extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                <React.Fragment> 
                    <Container maxWidth="md">
                        <h2 
                        style={styles.subheading}
                        >Додај Фирма</h2>
                        <br/>
                        <Grid container spacing={3} style={styles.fgrids}>
                            <Grid item xs={10} sm={10}>
                            <form className="input-firma" noValidate autoComplete="off">
                                <TextField
                                id="standard-textarea"
                                label="Внеси името на новата фирмата"
                                placeholder="Името на фирмата"
                                multiline
                                />
                            </form>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                            <RaisedButton
                                label="Додај"
                                id="button-add"
                                primary={true}
                                style={styles.button}
                                />
                            </Grid>
                        </Grid>
                        <br/>
                        <br/>
                        <br/>
                        <h2 
                        style={styles.subheading}
                        >Избриши Фирма</h2>
                        <br/>
                        <Grid container spacing={3} style={styles.fgrids}>
                            <Grid item xs={10} sm={10}>
                            <div className='company-dropdown' style={{ display: "inline-block" }}>
                                <DropDownList
                                data={this.props.companyNames}
                                textField="company_name"
                                //onChange={this.categoryChange}
                                defaultItem={defaultItemCompany}
                                // value={data}
                                />
                            </div>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                            <RaisedButton
                                label="Избриши"
                                id="button-delete"
                                primary={true}
                                style={styles.button}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

const styles ={
    button: {
        margin: 15,
    },
    banner:{
        backgroundColor: "#3257a8"
    },
    subheading: {
        color: "rgb(136, 136, 136)",
        fontWeight: "600"
    },
    
}

export default AddCompany
