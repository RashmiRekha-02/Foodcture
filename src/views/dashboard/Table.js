import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import "./table.css"




const Demo = () => {


  const originalRows = [
    { sl:1, name:"Amit" , date:"May 18 2022 15:10:39", foodStatus:true , org:"HRC" },
    { sl:2, name:"Ayush" , date:"May 18 2022 15:10:39", foodStatus:false, org:"DE SHAW" },
    { sl:3, name:"Trideep" , date:"May 18 2022 15:10:39", foodStatus:true , org:"STPI" },
    { sl:4, name:"Rashmi" , date:"May 18 2022 15:10:39", foodStatus:false , org:"Incture" },
    { sl:5, name:"Prajojita" , date:"May 18 2022 15:10:39", foodStatus:true , org:"Incture" },
    { sl:6, name:"Shruti" , date:"May 18 2022 15:10:39", foodStatus:false , org:"STPI" },
    { sl:7, name:"Rajjyoti" , date:"May 18 2022 15:10:39", foodStatus:true , org:"Incture" },
    { sl:8, name:"Ashish" , date:"May 18 2022 15:10:39", foodStatus:false, org:"Incture" },
    { sl:9, name:"Anup" , date:"May 18 2022 15:10:39", foodStatus:true , org:"Incture" },
    { sl:10, name:"Anisha" , date:"May 18 2022 15:10:39", foodStatus:false , org:"Incture" },
    { sl:11, name:"Silpa" , date:"May 18 2022 15:10:39", foodStatus:true , org:"Incture" },
    
    
  ];

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleChange=(sl)=>
  {
    const tempRows = rows.map(function(row){
        if(row.sl===sl){
          row.foodStatus=!row.foodStatus;
        }
        return row;

    })

    setRows(tempRows);
  }

  return (
    <>
    <p>
    {sessionStorage.getItem("FcEmail")}
    </p>
      <Paper className="container">
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
         />
        <TableContainer className="table">
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell >Status</TableCell>
                <TableCell >Status</TableCell>
             
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  
                  <TableCell >
                  <FormGroup >
                          <FormControlLabel control={<Checkbox defaultUnChecked  onClick={() => handleChange(row.sl)} />} />   
                   </FormGroup>    


                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.foodStatus?"true":"false"}
                  </TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Demo;
