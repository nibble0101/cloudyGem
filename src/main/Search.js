import React from "react";

function Search(props) {
  return (
    <div className="search">
      <form onSubmit={props.handleSubmit} id="form">
        <label htmlFor="search-box">
          <span className="label-text">Enter Query</span>
          <input
            type="text"
            id="search-box"
            placeholder="Enter city..."
            defaultValue={props.value}
            onChange={props.handleChange}
          />
        </label>

        <input type="submit" className="submit" />
      </form>
    </div>
  );
}

export default Search;
