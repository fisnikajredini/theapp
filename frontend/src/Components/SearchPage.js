import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { sampleProducts } from './dataSource.jsx';
import axios from "axios";


export default class SearchPage extends React.Component {
    gridPDFExport;
    total = sampleProducts.length;
    pageSize = 15;

    state = {
        data: sampleProducts.slice(0, this.pageSize),
        skip: 0,
        exporting: false
    };

    render() {
        const grid = (
            <Grid
                data={this.state.data}
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
                </GridToolbar>
                <Column field="ProductID" title="ID" width="50px" />
                <Column field="ProductName" title="Name" width="300px" />
                <Column field="Category.CategoryName" title="Category" />
                <Column field="UnitPrice" title="Price" />
                <Column field="UnitsInStock" title="In stock" />
                <Column field="Discontinued" title="Discontinued" />
            </Grid>
        );

        return (
          <div style={{ margin: "2%", marginTop: "3%", marginBottom: "5%" }}>
          <h2 style={styles.subheading}>Побарај Деловодник</h2>
          <br />
                {grid}
                <GridPDFExport
                    ref={pdfExport => this.gridPDFExport = pdfExport}
                >
                    {grid}
                </GridPDFExport>
            </div>
        );
    }

    pageChange = (event) => {
        this.setState(this.createState(event.page.skip, event.page.take));
    }

    createState(skip, take) {
        return {
            data: sampleProducts.slice(skip, skip + take),
            skip: skip
        };
    }

    exportPDF = () => {
        this.gridPDFExport.save(this.state.data, this.pdfExportDone);

        this.setState({ exporting: true });
    }

    pdfExportDone = () => {
        this.setState({ exporting: false });
    }
}

const styles = {
  subheading: {
    color: "rgb(136, 136, 136)",
    fontWeight: "600",
  },
};

