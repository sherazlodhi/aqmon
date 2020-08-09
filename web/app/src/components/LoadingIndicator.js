import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';


const LoadingIndicator = props =>{
    const { promiseInProgress } = usePromiseTracker();
    //console.log(promiseInProgress);
    
    return (
        promiseInProgress && 
     <div
      style={{
        width: "100%",
        height: "100",
        left: "10px",
        bottom: "10px",
        display: "flex",
        position: "fixed",
        zIndex: 9
      }}
    >
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
    );
}

export default LoadingIndicator;