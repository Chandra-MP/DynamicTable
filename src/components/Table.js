import React from "react";
import { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "./Pagination";
import "../App.css";
import "../fontawesome";

const Table = (props) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(6);

  //Change Page
  const paginate = (number)=> setCurrentPage(number)

  //Get CurrentPage UserData
  const indexofLastUser = currentPage * userPerPage;
  const indexofFirstUser = indexofLastUser - userPerPage;
  const currentUsers = props.userData.slice(indexofFirstUser, indexofLastUser);

  
  // console.log(props.userData)
  if (props.loading) {
    return <h1>...Loading</h1>;
  }
  return (
    <>
      <div className="tableWrapper table-responsive">
        <table id="table" className="table table-striped table-hover">
          <thead className="tableHeaders">
            <TableHead
              userData={props.userData}
              keys={props.keys}
              orderASC={props.orderASC}
              orderDSC={props.orderDSC}
              sortNameASC={props.sortNameASC}
              sortNameDSC={props.sortNameDSC}
            />
          </thead>
          <tbody className="tableBody">
            <TableBody userData={currentUsers} />
          </tbody>
        </table>
      </div>
      <Pagination
        userPerPage={userPerPage}
        totalUsers={props.userData.length}
        paginate={paginate}
      />
    </>
  );
};

export default Table;
