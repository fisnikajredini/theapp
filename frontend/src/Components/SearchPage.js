import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { sampleProducts } from "./dataSource.jsx";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { Button } from "@progress/kendo-react-buttons";
import { MyCommandCell } from "./myComandCell";
import axios from "axios";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
    };
  }
  CommandCell = (props) => (
    <MyCommandCell
      {...props}
      edit={this.enterEdit}
      remove={this.remove}
      add={this.add}
      discard={this.discard}
      update={this.update}
      cancel={this.cancel}
      editField={this.editField}
    />
  );
  gridPDFExport;
  total = sampleProducts.length; //kjo a duhet t jese me datat e this.state.categories ?
  pageSize = 15;
  _export;
  export = () => {
    this._export.save();
  };
  state = {
    data: sampleProducts.slice(0, this.pageSize), // ene kjo a duhet t jese me datat e this.state.categories ?
    skip: 0,
    exporting: false,
  };
  componentDidMount = () => {
    axios.get("/getcategory").then((response) => {
      this.setState({
        categories: response.data.data,
      });
    });
  };

  render() {
    const grid = (
      <ExcelExport
        data={this.state.categories}
        ref={(exporter) => (this._export = exporter)}
      >
        <Grid
          data={this.state.categories}
          filterable={true}
          pageable={true}
          onPageChange={this.pageChange}
          pageSize={this.pageSize}
          total={this.total}
          skip={this.state.skip}
        >
          <GridToolbar>
            <button
              title="Export PDF"
              className="k-button k-primary"
              onClick={this.exportPDF}
              disabled={this.state.exporting}
            >
              Export PDF
            </button>
            <button
              title="Export Excel"
              className="k-button k-primary"
              onClick={this.export}
            >
              Export to Excel
            </button>
          </GridToolbar>
          <Column field="company_name" title="Фирма" width="150"/>
          <Column field="category" title="Категорија" width="200"/>
          <Column field="subCategory" title="Под-Категорија" />
          <Column field="subsubCategory" title="Под-Категориjа" />
          <Column field="date" title="Датум" width="150"/>
          <Column field="Life" title="Рок на чување" width="120"/>
          <Column cell={this.CommandCell} width="120px" />
        </Grid>
      </ExcelExport>
    );

    return (
      <div style={{ margin: "2%", marginTop: "3%", marginBottom: "5%" }}>
        <h2 style={styles.subheading}>Побарај Деловодник</h2>
        <br />
        {grid}
        <GridPDFExport ref={(pdfExport) => (this.gridPDFExport = pdfExport)}>
          {grid}
        </GridPDFExport>
      </div>
    );
  }

  pageChange = (event) => {
    this.setState(this.createState(event.page.skip, event.page.take));
  };

  createState(skip, take) {
    return {
      data: sampleProducts.slice(skip, skip + take),
      skip: skip,
    };
  };

  exportPDF = () => {
    this.gridPDFExport.save(this.state.data, this.pdfExportDone);

    this.setState({ exporting: true });
  };

  pdfExportDone = () => {
    this.setState({ exporting: false });
  };
}

const styles = {
  subheading: {
    color: "rgb(136, 136, 136)",
    fontWeight: "600",
  },
};
