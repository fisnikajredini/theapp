import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Container from "@material-ui/core/Container";
import RaisedButton from "material-ui/RaisedButton";
import Grid from "@material-ui/core/Grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "./dropdown.css";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Swal from "sweetalert2";

const defaultItemCompany = { company_name: "Селектирај Фирма ..." };
let companyNames = [];

export class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CompanyAdd: "",
      CompanyDel: null,
      CompanyDelName: null,
      companyNames: this.props.companyNames,
    };
  }

  componentDidMount = () => {
    axios.get("/getcompany").then((response) => {
      this.setState({ companyNames: response.data.data });
    });
  };

  companyChange = (e) => {
    // Swal.fire('Any fool can use a computer')
    this.setState({
      CompanyDel: e.target.value._id,
      CompanyDelName: e.target.value.company_name,
    });
    console.log(this.state.CompanyDel);
  };
  deleteCompany = () => {
    Swal.fire({
      title:
        "Дали сакате да ја бришете фирмата: " +
        this.state.CompanyDelName +
        " ?",
      showDenyButton: true,
      confirmButtonText: `ДА`,
      denyButtonText: `НЕ`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("/deletecomp", { delfirma: this.state.CompanyDel }).then(
          axios.get("/getcompany").then((response) => {
            this.setState({ companyNames: response.data.data });
          })
        );
        Swal.fire("Фирмата е избршана!", "", "success").then();
      } else if (result.isDenied) {
        Swal.fire("Фирмата не е избришана!", "", "error");
      }
    });
  };

  handleinputchange = (e) => {
    this.setState({
      CompanyAdd: e.target.value,
    });
  };

  addCompany = () => {
    if (
      this.state.CompanyAdd != null &&
      this.state.CompanyAdd != "" &&
      this.state.CompanyAdd != undefined
    ) {
      axios.post("/adcompany", { firma: this.state.CompanyAdd }).then();
      Swal.fire({
        icon: "success",
        confirmButtonText: `OK`,
        title: "Фирмата е Додадена",
        showConfirmButton: true,
        timer: 1500,
      }).then((result) => {
          axios.get("/getcompany").then((response) => {
            this.setState({ companyNames: response.data.data, CompanyAdd: "" });
          });
        
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Внесете име на новата фирма",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>
            <Container maxWidth="md">
              <h2 style={styles.subheading}>Додај Фирма</h2>
              <br />
              <Grid container spacing={3} style={styles.fgrids}>
                <Grid item xs={10} sm={10}>
                  <form className="input-firma" noValidate autoComplete="off">
                    <TextField
                      id="standard-textarea"
                      label="Внеси името на новата фирмата"
                      placeholder="Името на фирмата"
                      onChange={this.handleinputchange}
                      value={this.state.CompanyAdd}
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
                    onClick={this.addCompany}
                  />
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
              <h2 style={styles.subheading}>Избриши Фирма</h2>
              <br />
              <Grid container spacing={3} style={styles.fgrids}>
                <Grid item xs={10} sm={10}>
                  <div
                    className="company-dropdown"
                    style={{ display: "inline-block" }}
                  >
                    <DropDownList
                      id="deletedropdown"
                      data={this.state.companyNames}
                      textField="company_name"
                      onChange={this.companyChange}
                      defaultItem={defaultItemCompany}
                      //   value={this.state.companyNames}
                    />
                  </div>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <RaisedButton
                    label="Избриши"
                    id="button-delete"
                    primary={true}
                    style={styles.button}
                    onClick={this.deleteCompany}
                  />
                </Grid>
              </Grid>
            </Container>
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

export default AddCompany;
