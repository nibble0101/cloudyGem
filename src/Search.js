import React from "react";

function Search(props){
    return (
        <div className="search">
          <form onSubmit = {props.handleSubmit}>
            <input
              type="text"
              id="search-box"
              value={props.value}
              onChange={props.handleChange}
              placeholder="Enter city..."
            />
            <input type = "submit" className="submit" />
          </form> 
        </div>
      );
}

export default Search;
