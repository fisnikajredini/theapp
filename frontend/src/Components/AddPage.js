import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { dataCategories, dataSubcat } from "./data.js";
import "./dropdown.css";
import axios from "axios";
import Swal from "sweetalert2";

const defaultItemCompany = { company_name: "Селектирај Фирма ..." };
const defaultItemCategory = { categoryName: "Селектирај Категорија ..." };
const defaultItemSubcat = { subcatName: "Селектирај Под-Категорија ..." };
let companyNames = [];
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyNames: this.props.companyNames,
      category: null,
      subcat: null,
      subcats: dataSubcat,
      categoryNode: null,
      subcategoryNode: null,
      companyNode: "FIRMA 7",
      company_name: null,
      subCategory: null,
      categoryLife: null,
    };
  }
  componentDidMount = () => {
    axios.get("/getcompany").then((response) => {
      this.setState({ companyNames: response.data.data });
    });
  };
  companyChange = (e) => {
    const companyChange = e.target.value.company_name;
    this.setState({
      company_name: companyChange,
    });
  };
  categoryChange = (event) => {
    const category = event.target.value;
    const subcats = dataSubcat.filter(
      (subcat) => subcat.categoryId === category.categoryId
    );

    this.setState({
      category: category,
      subcats: subcats,
      subcat: null,
    });
  };
  subcatChange = (event) => {
    const subcat = event.target.value;
    const subCategory = event.target.value.subcatName;
    const categoryLife = event.target.value.categoryTime;
    console.log(subcat);
    this.setState({
      subcat: subcat,
      subCategory: subCategory,
      categoryLife: categoryLife,
    });
  };
  addPage = () => {
    if (
      this.state.subCategory === null ||
      this.state.subCategory === "" ||
      this.state.subCategory === undefined
    ) {
      Swal.fire({
        icon: "error",
        confirmButtonText: `OK`,
        title: "Избирајте ги сите полња",
        showConfirmButton: true,
        timer: 1500,
      });
    } else {
      axios
        .post("/addcategory", {
          category: this.state.category,
          company_name: this.state.company_name,
          subCategory: this.state.subCategory,
          categoryLife: this.state.categoryLife,
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              confirmButtonText: `OK`,
              title: "Документот е Додаден",
              showConfirmButton: true,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.log(err));
    }
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
            <h2 style={styles.subheading}>Додај</h2>
            <br />
            <div className="dropdown">
              <div style={{ display: "inline-block" }}>
                <p className="Title">Фирма</p>
                <DropDownList
                  data={this.state.companyNames}
                  textField="company_name"
                  onChange={this.companyChange}
                  defaultItem={defaultItemCompany}
                  // value={data}
                />
              </div>
              <br />
              <div style={{ display: "inline-block" }}>
                <p className="Title">Категорија</p>
                <DropDownList
                  data={dataCategories}
                  textField="categoryName"
                  onChange={this.categoryChange}
                  defaultItem={defaultItemCategory}
                  // value={dataCategories}
                />
              </div>
              <br />
              <div style={{ display: "inline-block" }}>
                <p className="Title">Под-Категорија</p>
                <DropDownList
                  disabled={!hasCategory}
                  data={this.state.subcats}
                  textField="subcatName"
                  onChange={this.subcatChange}
                  defaultItem={defaultItemSubcat}
                  // value={dataSubcat}
                />
              </div>
              <br />
            </div>
            <br />
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
              onClick={this.addPage}
            />
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
  banner: {
    backgroundColor: "#3257a8",
  },
  subheading: {
    color: "rgb(136, 136, 136)",
    fontWeight: "600",
  },
};
document.querySelector("my-app");

export default AppComponent;
