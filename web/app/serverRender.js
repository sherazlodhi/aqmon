
import React from 'react';
import reactDOMServer from 'react-dom/server';
import App from './src/components/App'
import axios from 'axios';
import config from './config';
import { json } from 'express';

const startOfDay = new Date().setHours(0,0,0,0);
const endOfDay = new Date().setHours(23,59,59,0);

const serverRender=() =>
{
     
    return axios.get(getApiUrl(startOfDay,endOfDay))
     .then(resp => {
      const initialData = getInitialData(resp.data);
      return {
            initialMarkup : reactDOMServer.renderToString(
            <App initialData={initialData} />
            ),
            initialData : initialData
      };

     });
 
}


const getApiUrl=  (start,end) =>{
      const url = `${config.serverUrl}/api/GetPMData?start=`+parseInt(start/1000)+'&end='+parseInt(end/1000);
      //console.log(url);
      return url;
    };
const getInitialData = (apiData) => {

      const label_array = [];
      const data_array =[];
      const pm10_array =[];
      
      apiData.forEach((item,i)=>{
            data_array.push([new Date(item.epoch_timestamp*1000), parseFloat(item.pm25),parseFloat(item.pm10),10,50]);
      }
      );

      return  {pmReadings : data_array};
}

export default serverRender;