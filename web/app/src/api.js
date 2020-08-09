import axios from 'axios';



export const fetchData = (start,end) =>{
  return axios.get(`/api/getPMData/?start=${start/1000}&end=${end/1000}`)
    .then(resp=> getFormattedData(resp.data));
};

const getFormattedData = (apiData) => {

  const label_array = [];
  const data_array =[];
  const pm10_array =[];
  
  //data_array.push([{ type: 'datetime', label: 'time' }, { type: 'number', label: 'PM2.5' },{ type: 'number', label: 'PM10' },"Ideal PM2.5","Ideal PM10"]);
//console.log(apiData);

  apiData.forEach((item,i)=>{
   // console.log(item);
        if(item.epoch_timestamp !== null)
        data_array.push([new Date(item.epoch_timestamp*1000), parseFloat(item.pm25),parseFloat(item.pm10),10,50]);
  }

  );

  return  {pmReadings : data_array};
}