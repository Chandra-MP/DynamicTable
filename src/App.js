import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table.js";
import Footer from "./components/Footer.js";
import './fontawesome'

function App() {
  const [userData, setuserData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [loading, setLoading]=useState(false)


  useEffect(() => {
    getData((response) => {
      setuserData(response.data);
      setFilter(response.data);
      // console.log(response.data)
      setKeys(Object.keys(response.data[0]).map((key) => key));
    });
  }, []);

  const getData = async (callback) => {
    setLoading(true);
    await fetch("https://gorest.co.in/public/v1/users")
      .then((response) => {
        if (!response.ok) throw new Error("Http Error: ", response.status);
        return response.json();
      })
      .then((response) => {
        callback(response);
        return response;
      })
      .finally(console.log("successfully fetched!"),
      setLoading(false));
  };

  const handleChange = (e) => {
    
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());

    let filtered = [];
    // console.log(userData)
    filtered = searchTable(userData);
    console.log("this is filtered", filtered);
    setFilter(filtered);
  };


  function searchTable(rows) {
    if (!search) return rows;
    return rows.filter((row) => {
      return Object.values(row).join("").toLowerCase().includes(search);
    });
  }


  const orderASC=()=>
  {
    const sorted = [...userData].sort((a,b)=>
    {   
      return a >b ? 1 : -1;
    });
    setFilter(sorted)
  }

  const orderDSC = ()=>
  {
    const sorted = userData.sort((a, b) => {
      return a > b ? -1 : 1;
    });
    setFilter(sorted);
  }

  const sortNameASC= (col)=>
  {
    const sorted = userData.sort((a,b)=>
    {
      console.log(a[col].toLowerCase())
      return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    })
    setFilter(sorted);
  }
  const sortNameDSC=(col)=>
  {
    const sorted = userData.sort((a,b)=>
    {
      console.log(a[col].toLowerCase())
      return a[col].toLowerCase() > b[col].toLowerCase() ? -1 : 1
    })
    setFilter(sorted);
  }

  
  return (
    <div className="App container-fluid">
      <nav className="navbar bg-light">
        <div className="container-fluid nav-container">
          <a className="navbar-brand">Users</a>
          <form className="d-flex" role="search">
            <input
              type="text"
              placeholder="Search for ID, Name or Email"
              onChange={handleChange}
              value={search}
              className="search form-control"
            />
          </form>
        </div>
      </nav>
    

      <Table userData={filter} keys={keys} orderASC={orderASC} orderDSC={orderDSC} 
       sortNameASC={sortNameASC} sortNameDSC={sortNameDSC} loading={loading} 
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
