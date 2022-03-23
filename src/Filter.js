import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBar from "./components/SearchBar";
import useDebounce from './components/useDebounce';

const Filter = () => {
  const[data,setData]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData,setFilteredData]=useState([])
  const dobouncedSearchterm=useDebounce(searchTerm,1000);
    const getInitialData=async()=>{
      let res=await   axios.get("https://jsonplaceholder.typicode.com/todos");
      setData(res.data);
      setFilteredData(res.data);
    }
      useEffect(()=>{
        getInitialData();
      },[])
 
    useEffect(()=>{
      console.log("called");
      const temp = (data).filter((item) =>
      item.title.toLowerCase().includes(dobouncedSearchterm.toLowerCase())
      );
      
      setFilteredData(temp);
    },[dobouncedSearchterm])

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
            <ol>
            {
               
               filteredData.map(item=>(
                <li>{item.title}</li>
               )
                 
                )
             }
            </ol>
              

            </div>
  )
}

export default Filter