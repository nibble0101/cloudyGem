import React from "react";

function Search(props) {
  return (
    <div className="search">
      <form onSubmit={props.handleSubmit} id="form">
        <input
          type="text"
          id="search-box"
          placeholder="Enter city..."
          aria-label="Enter name of city"
          defaultValue={props.value}
          onChange={props.handleChange}
        />
        <input type="submit" className="submit" value="Search" />
      </form>
    </div>
  );
}

export default Search;
