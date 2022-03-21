import React from "react";
import './SearchBar.css'
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";


function SearchBar(props) {
  return (
    <div className="app__header">
      <div className="whole">
      <span className="app__search" />
          <SearchRoundedIcon
            style={{ fontSize: 20 }}
            className="app__searchIcon"
          />
          <form>
            <input
              className="app__input"
              type="search"
              value={props.value}
              onChange={props.onChange}
              placeholder={props.placeholder}
            />
            <button type="submit">serach</button>
          </form>
      </div>
       
        
    
    </div>
    
  );
}

export default SearchBar;