import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideBar extends Component{
  
    constructor(props){
      super(props);
    }

    render(){

        return (<nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="sidebar-sticky pt-3">
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Reports</span>
          </h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a data-toggle="collapse" data-target="#sidebarMenu" className="nav-link" href="#" onClick={()=>this.props.OnMenuClick("today")}>
                Today's Readings
              </a>
            </li>
            <li className="nav-item">
              <a data-toggle="collapse" data-target="#sidebarMenu" className="nav-link" href="#" onClick={()=>this.props.OnMenuClick("week")}>
                This Week's Readings
                
              </a>
            </li>
            <li className="nav-item">
              <a data-toggle="collapse" data-target="#sidebarMenu" className="nav-link" href="#" onClick={()=>this.props.OnMenuClick("month")}>
                This Month's Readings
              </a>
            </li>
            <li className="nav-item">
              <a data-toggle="collapse" data-target="#sidebarMenu" className="nav-link" href="#" onClick={()=>this.props.OnMenuClick("year")}>
                This Year's Readings
              </a>
            </li>
          </ul>
        </div>
      </nav>);
    }
}

SideBar.propTypes={
OnMenuClick :PropTypes.func.isRequired
}

export default SideBar;