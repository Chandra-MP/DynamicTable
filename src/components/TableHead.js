import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css";
import "../fontawesome";

const TableHead = (props) => {

  return (
    <tr className="headerRow">
      <th>
        <div className="heading">
          <h4 style={{ display: "inline", margin: 0 }}># ID</h4>
          <div className="caretDiv" style={{margin: '10px'}}>
            <span className="CaretUp" style={{margin: '3px'}} onClick={props.orderASC}>
              <FontAwesomeIcon icon="fa-solid fa-caret-up" />
            </span>
            <span className="CaretDown" onClick={props.orderDSC}>
              <FontAwesomeIcon icon="fa-solid fa-caret-down" />
            </span>
          </div>
        </div>
      </th>
      <th>
        <div className="heading">
        <h4 style={{ display: "inline", margin: 0 }}>NAME</h4>
        <div className="caretDiv"  style={{margin: '10px'}}>
        <span className="caretUp" style={{margin: '3px'}} onClick={()=>props.sortNameASC('name')}> 
          <FontAwesomeIcon icon="fa-solid fa-caret-up" />
        </span>
        <span className="caretDown" onClick={()=>props.sortNameDSC('name')}>
          <FontAwesomeIcon icon="fa-solid fa-caret-down" />
        </span>
        </div>
        </div>
      </th>
      <th>
        <h4 style={{ display: "inline" }}>EMAIL</h4>
      </th>
      <th>
        <h4 style={{ display: "inline" }}>GENDER</h4>
      </th>
      <th>
        <h4 style={{ display: "inline" }}>STATUS</h4>
      </th>
    </tr>
  );
};

export default TableHead;
