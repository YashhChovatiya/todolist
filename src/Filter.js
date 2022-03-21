import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBar from "./components/SearchBar";

const Filter = () => {
  const[data,setData]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData,setFilteredData]=useState([])
  
    const getInitialData=async()=>{
      let res=await   axios.get("https://jsonplaceholder.typicode.com/todos");
      setData(res.data);
    }
      useEffect(()=>{
        getinitialData();
      },[])
 
    useEffect(()=>{
      
      const temp = (data).filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("temp",temp);
      setFilteredData(temp);
    },[searchTerm])

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
 
      
  return (
    <div>
    
          <div className="search">
            <SearchBar
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
            </div>
            

              
              {
               
                filteredData.map(item=>{
                  return(
                    <div>
                    <h1>{item.title}</h1>
                    </div>
                  )})
              }


  
            </div>
  )
}

export default Filter