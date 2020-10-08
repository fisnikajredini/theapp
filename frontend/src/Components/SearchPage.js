import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Container from '@material-ui/core/Container';
import RaisedButton from "material-ui/RaisedButton";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { dataCategories, dataSubcat } from "./data.js";
import "./dropdown.css";
import Grid from '@material-ui/core/Grid';

const defaultItemCompany = { company_name: "Селектирај Фирма ..." }; // Emrin e kopanis ktau de duet ta mare pi te tabela e 2 
const defaultItemCategory = { categoryName: "Селектирај Категорија ..." }; // Njejt ene ktau pi te tabela e 2 
const defaultItemSubcat = { subcatName: "Селектирај Под-Категорија ..." }; // Njejt ene ktau pi te tabela e 2 

class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: null,
            subcat: null,
            subcats: dataSubcat,
          };
    }

    categoryChange = (event) => {
        const category = event.target.value;
        const subcats = dataSubcat.filter(
          (subcat) => subcat.categoryId === category.categoryId
        );
    
        this.setState({
          category: category,
          subcats: subcats,
          subcat: null,
          name: null,
        });
      };
    
      subcatChange = (event) => {
        const subcat = event.target.value;
    
        this.setState({
          subcat: subcat,
        });
      };
    
      render() {
        const category = this.state.category;
        const subcat = this.state.subcat;
    
        const hasCategory = category && category !== defaultItemCategory;
        const hasSubcat = subcat && subcat !== defaultItemSubcat;

        return (
            <div>
                <MuiThemeProvider>
                <React.Fragment> 
                    <h2 
                    style={styles.subheading}
                    >Побарај Деловодник</h2>
                    <br/>
                    <Container maxWidth="lg">
                        <Grid className="searchpage-dd" container spacing={3} style={styles.fgrids}>
                            <Grid item xs={4} sm={4}>
                            <div style={{ display: "inline-block" }}>
                                <DropDownList
                                data={this.props.companyNames}
                                textField="company_name"
                                //onChange={this.categoryChange}
                                defaultItem={defaultItemCompany}
                                // value={data}
                                />
                            </div>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                            <div style={{ display: "inline-block" }}>
                                <DropDownList
                                data={dataCategories}
                                textField="categoryName"
                                onChange={this.categoryChange}
                                defaultItem={defaultItemCategory}
                                //value={category}
                                />
                            </div>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                            <div style={{ display: "inline-block" }}>
                                <DropDownList
                                disabled={!hasCategory}
                                data={this.state.subcats}
                                textField="subcatName"
                                onChange={this.subcatChange}
                                defaultItem={defaultItemSubcat}
                                value={subcat}
                                />
                            </div>
                            </Grid>
                        </Grid>
                        <br/>
                            <RaisedButton
                            label="Побарај"
                            id="button-search"
                            primary={true}
                            style={styles.button}
                            />
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
document.querySelector("my-app");

export default SearchPage
