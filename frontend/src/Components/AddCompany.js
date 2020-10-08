import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class AddCompany extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                <React.Fragment> 
                        <h2 
                        style={styles.subheading}
                        >Додај</h2>
                        <br/>
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
