import React, { useState, useEffect } from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Filter,
  Inject,
  FilterSettingsModel,
  Grid,
  Toolbar,
  PdfExport,
  ExcelExport
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import './searchtable.css';

const App: React.FC = () => {
  const filterSettings: FilterSettingsModel = {
    ignoreAccent: true,
  };

    let grid: Grid | null;
    const toolbarClick = (args: any) => {
        if (grid) {
            if  (args.item.id.includes('pdfexport')) {
                grid.pdfExport({
                    fileName:'Delovodnik.pdf',
                    exportType: 'CurrentPage'
                });
            } else if(args.item.id.includes('excelexport')) {
                grid.excelExport({
                    fileName: 'delovodnik.xlsx',
                    header: {
                        headerRows: 1,
                        rows: [
                            {
                                cells: [{
                                    colSpan: 6,
                                    value: "Era Consulting",
                                    style: { fontColor: '#3257a8', fontSize: 20, hAlign: 'Center', bold: true,}
                                }]
                            }
                        ]
                    },
                    footer: {
                        footerRows: 1,
                        rows: [
                            { cells: [{ colSpan: 6, value: "Exported from Delovodnik Application", style: { hAlign: 'Center', bold: true}}]}
                        ]
                    }
                });
            }
        }    
    }

  return (

    <div style={{ margin: '10%', marginTop: '3%', marginBottom: '5%', }}>
        <h2 
        style={styles.subheading}
        >Побарај Деловодник</h2>
        <br/>
      <GridComponent dataSource={data}
      ref={g => grid = g}
        allowPaging={true}
        allowFiltering
        filterSettings={filterSettings}
        pageSettings={{ pageSize: 10 }}
        toolbar={['PdfExport', 'ExcelExport']}
        allowPdfExport={true}
        allowExcelExport
        toolbarClick={toolbarClick}
      >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='ID' textAlign='Right' width='100' isPrimaryKey={true} />
          <ColumnDirective field='CustomerID' headerText='Фирма' width='250' />
          <ColumnDirective field='ShipCountry' headerText='Категорија' />
          <ColumnDirective field='ShipName' headerText='Под-Категорија' />
          <ColumnDirective field='Freight' headerText='Датум' textAlign='Right' width='100' />
          <ColumnDirective field='Freight' headerText='Рок на чување' textAlign='Right' width='150' />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Toolbar, PdfExport, ExcelExport]} />
      </GridComponent>
    </div>
  );
}

const styles ={
    subheading: {
        color: "rgb(136, 136, 136)",
        fontWeight: "600"
    },
    
}

export default App;