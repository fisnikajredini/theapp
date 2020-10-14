import React, { useState, useEffect, FC } from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Filter,
  Inject,
  FilterSettingsModel,
  EditSettingsModel,
  ToolbarItems,
  Grid,
  Toolbar,
  PdfExport,
  ExcelExport,
  dataSourceChanged,
} from "@syncfusion/ej2-react-grids";
import data from "./dataSource.json";
import "./searchtable.css";
import axios from "axios";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategory: null,
    };
  }
  componentDidMount = () => {
    axios.get("/getcategory").then((res) => {
        console.log(res.data.data)
        let readedData = res.data.data
      this.setState({
          dataCategory:readedData
      })
      console.log(this.state.dataCategory);
    });
    
  };
  render() {
    const filterSettings = {
      ignoreAccent: true,
    };
    const editOptions: EditSettingsModel = {allowDeleting: true}
    const toolbarOptions: ToolbarItems[] = ['PdfExport', 'ExcelExport', 'Delete'];

    let grid: Grid | null;
    const toolbarClick = (args: any) => {
      if (grid) {
        if (args.item.id.includes("pdfexport")) {
          grid.pdfExport({
            fileName: "Delovodnik.pdf",
            header: {
              fromTop: 0,
              height: 130,
              contents: [
                {
                  type: "Text",
                  value: "Era Consulting",
                  position: { x: 0, y: 50 },
                  style: { textBrushColor: "#00000", fontSize: 13 },
                },
              ],
            },
            footer: {
              contents: [
                {
                  type: "Text",
                  value: "Exported from Delovodnik Application",
                  position: { x: 0, y: 50 },
                  style: { textBrushColor: "#00000", fontSize: 13 },
                },
              ],
              fromBottom: 130,
              height: 130,
            },
          });
        } else if (args.item.id.includes("excelexport")) {
          grid.excelExport({
            fileName: "delovodnik.xlsx",
            header: {
              headerRows: 1,
              rows: [
                {
                  cells: [
                    {
                      colSpan: 6,
                      value: "Era Consulting",
                      style: {
                        fontColor: "#3257a8",
                        fontSize: 20,
                        hAlign: "Center",
                        bold: true,
                      },
                    },
                  ],
                },
              ],
            },
            footer: {
              footerRows: 1,
              rows: [
                {
                  cells: [
                    {
                      colSpan: 6,
                      value: "Exported from Delovodnik Application",
                      style: { hAlign: "Center", bold: true },
                    },
                  ],
                },
              ],
            },
          });
        }
      }
    };


    function dataSourceChanged(state) {
      console.log(state);
    }


    return (
      <div style={{ margin: "2%", marginTop: "3%", marginBottom: "5%" }}>
        <h2 style={styles.subheading}>Побарај Деловодник</h2>
        <br />
        <GridComponent
          dataSource={this.state.dataCategory}
          ref={(g) => (grid = g)}
          allowPaging={true}
          allowFiltering
          filterSettings={filterSettings}
          pageSettings={{ pageSize: 20 }}
          toolbar={toolbarOptions}
          allowPdfExport={true}
          allowExcelExport
          toolbarClick={toolbarClick}
          editSettings={editOptions}
          dataSourceChanged={dataSourceChanged}
        >
          <ColumnsDirective>
            { /*<ColumnDirective
              field="_id"
              headerText="ID"
              textAlign="Right"
              width="100"
              isPrimaryKey={true}
            /> */}
            <ColumnDirective
              field="company_name"
              headerText="Фирма"
              textAlign="Left"
              width="250"
            />
            <ColumnDirective field="category" headerText="Категорија" textAlign="Left" width="250" />
            <ColumnDirective field="subCategory" headerText="Под-Категорија" textAlign="Left" width="500" />
            <ColumnDirective
              field="date"
              headerText="Датум"
              textAlign="Left"
              width="130"
            />
            <ColumnDirective
              field="Life"
              headerText="Рок на чување"
              textAlign="Left"
              width="150"
            />
          </ColumnsDirective>
          <Inject services={[Page, Filter, Toolbar, PdfExport, ExcelExport]} />
        </GridComponent>
      </div>
    );
  }
}
const styles = {
  subheading: {
    color: "rgb(136, 136, 136)",
    fontWeight: "600",
  },
};
