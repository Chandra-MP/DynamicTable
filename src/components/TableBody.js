import React from "react";
import "../App.css";
import '../fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableBody = (props) => {
  const renderData = () => {
    return props.userData.map((item, key) => {
      return (
        <tr key={item.id} className="tableRow">
          <td className="tableCol">{item.id}</td>
          <td className="tableCol">{item.name}</td>
          <td className="tableCol">
            <span style={{margin: '8px'}}><FontAwesomeIcon icon="fa-solid fa-paper-plane" /></span>
            {item.email}</td>
          <td className="tableCol">
          <span style={{margin: '8px'}}><FontAwesomeIcon icon="fa-solid fa-person" /></span>
              {item.gender}</td>
          <td className="tableCol" style={item.status==='active' 
          ? {backgroundColor:'#B8F1B0', border: '2px solid green', borderRadius: '5px'} 
          : {backgroundColor:'#FFC3C3', border: '2px solid red', borderRadius: '5px' }}>{item.status}</td>
        </tr>
      );
    });
  };

  return <>{renderData()}</>;
};

export default TableBody;
