import React from 'react';
import PropTypes from 'prop-types';
import Chart from "react-google-charts";
import SideBar from "./SideBar"
import * as api from "../api"
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from './LoadingIndicator';


class  App extends React.Component {

  constructor(props){
    super(props);
    
  }   
  

  fetchData =(range)=>{
    //console.log(range);
    let data = '';
    const startOfToday = new Date().setHours(0,0,0);
    const endOfToday = new Date().setHours(23,59,59);
    let start = startOfToday;
    switch(range){
      case "week":
         start = new Date(startOfToday).setDate(new Date(startOfToday).getDate() - 7);
         
      break;
      case "month":
         start = new Date(startOfToday).setDate(new Date(startOfToday).getMonth() -1);
         
      break;
      case "year":
         start = new Date(startOfToday).setFullYear(new Date(startOfToday).getFullYear()  - 1);
        
      break;
      default:
        
        break;
    }

     api.fetchData(start,endOfToday).then( data=>{
      this.setState( {pmReadings:data.pmReadings});
     }
    );
  }
componentDidMount(){
  api.fetchData( new Date().setHours(0,0,0), new Date().setHours(23,59,59)).then( data=>{
    this.setState( {pmReadings:data.pmReadings});
   }
  );
}
render(){

  if(this.state == null)
  return (<div>Loading ...</div>);


  var { cols, rows, ChartOptions, TableCols, TableRows, TableOptions } = this.GetDataForCharts();

  return (
    <div className="container-fluid" className="App">
    <div className="row">
      <SideBar OnMenuClick={this.fetchData} />
<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
<div style={{height:  '900px'}} >
   <Chart
    height={'900px'}
    chartType="LineChart"
    
    loader={<div>Loading...</div>}
    data={[cols, ...rows]}
    options ={ChartOptions}
  />
  </div>
  <Chart
    width ={'100%'}
    chartType="Table"
    data={[TableCols, ...TableRows]}
    options ={TableOptions}
    formatters={[
      {

        type: 'ColorFormat',
        column: 1,
        options: {
          width: 120,
        },
        ranges: [
          [10,100, 'red'],
          [0,10, 'green'],
        ],
      },
      {
        type: 'ColorFormat',
        column: 2,
        options: {
          width: 120,
        },
        ranges: [
          [50,1000, 'red'],
          [0,50, 'green'],
        ],
      },
    ]}
  />

<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    </div>
</main>
</div>
</div>
  );
}

  GetDataForCharts() {

    let data = this.state.pmReadings;

    const ChartOptions = {
      title: "Particulate Matter values",
      curveType: "function",
      fontSize: '7px',
      chartArea: { width: '100%', height: '80%' },
      legend: { position: 'in' },
      titlePosition: 'out', axisTitlesPosition: 'in',
      pointSize: 2,
      hAxis: {
        gridlines: {
          count: -1,
          units: {
            days: { format: ['MMM dd'] },
            hours: { format: ['HH:mm', 'ha'] },
          }
        },
        minorGridlines: {
          units: {
            hours: { format: ['hh:mm:ss a', 'ha'] },
            minutes: { format: ['HH:mm a Z', ':mm'] }
          }
        }
      },
      vAxis: { textPosition: 'in' },
      series: {
        0: { color: 'red', lineWidth: 1 },
        1: { color: 'blue', lineWidth: 1 },
        2: { color: 'red', lineWidth: 3 },
        3: { color: 'blue', lineWidth: 3 },
      }
    };

    const TableOptions = {
      title: "Particulate Matter values",
      allowHtml: true,
      showRowNumber: true,
      width: '100%',
      sortColumn: 0,
      sortAscending: false
    };

    let rows = [];
    let TableRows = [];
    const cols = [{ type: 'datetime', label: 'Time' }, { type: 'number', label: 'PM 2.5' }, { type: 'number', label: 'PM 10' }, "Ideal PM2.5", "Ideal PM10"];
    const TableCols = [{ type: 'datetime', label: 'Time' }, { type: 'number', label: 'PM 2.5' }, { type: 'number', label: 'PM 10' }];

    for (let row of data) {

      const { datetime, pm25, pm10, ipm25, ipm10 } = row;
      rows.push([new Date(Date.parse(row[0])), row[1], row[2], 10, 50]);
      TableRows.push([new Date(Date.parse(row[0])), row[1], row[2]]);
    }
    return { cols, rows, ChartOptions, TableCols, TableRows, TableOptions };
  }
}

export default App;