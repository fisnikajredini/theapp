import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { dataCategories, dataSubcat } from './data.js';
import './dropdown.css';

const defaultItemCompany = { companyName: 'Селектирај Фирма ...' };
const defaultItemCategory = { categoryName: 'Селектирај Категорија ...' };
const defaultItemSubcat = { subcatName: 'Селектирај Под-Категорија ...' };

class AppComponent extends React.Component {
    state = {
        category: null,
        subcat: null,
        subcats: dataSubcat
    };

    categoryChange = (event) => {
        const category = event.target.value;
        const subcats = dataSubcat.filter(subcat => subcat.categoryId === category.categoryId);

        this.setState({
            category: category,
            subcats: subcats,
            subcat: null,
        });
    }

    subcatChange = (event) => {
        const subcat = event.target.value;

        this.setState({
            subcat: subcat,
        });
    }


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
                        >Додај</h2>
                        <br/>
                        <div className="dropdown">
                            <div style={{ display: 'inline-block' }}>
                                <p className="Title">Фирма</p>
                                <DropDownList
                                    //data={dataCategories}
                                    textField="defaultItemCompany"
                                    //onChange={this.categoryChange}
                                    defaultItem={defaultItemCompany}
                                    //value={category}
                                />
                            </div>
                            <br />
                            <div style={{ display: 'inline-block' }}>
                                <p className="Title">Категорија</p>
                                <DropDownList
                                    data={dataCategories}
                                    textField="categoryName"
                                    onChange={this.categoryChange}
                                    defaultItem={defaultItemCategory}
                                    value={category}
                                />
                            </div>
                            <br />
                            <div style={{ display: 'inline-block' }}>
                            <p className="Title">Под-Категорија</p>
                                <DropDownList
                                    disabled={!hasCategory}
                                    data={this.state.subcats}
                                    textField="subcatName"
                                    onChange={this.subcatChange}
                                    defaultItem={defaultItemSubcat}
                                    value={subcat}
                                />
                            </div>
                            <br />
                        </div>
                        <br/>
                        <Link to="/">
                        <RaisedButton 
                            label="Назад"
                            primary={false}
                            style={styles.button}
                        />
                        </Link>
                        <RaisedButton
                            label="Додај"
                            id="button-continue" 
                            primary={true}
                            style={styles.button}
                        />
                </React.Fragment>
                </MuiThemeProvider>
                </div>
            );
        
          
        
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
document.querySelector('my-app')


export default AppComponent
