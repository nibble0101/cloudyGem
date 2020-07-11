import React, { Component } from "react";

class Search extends Component {
  componentDidMount() {
    document.getElementById("search-box").onkeyup = (e) => {
      if (e.code === "Enter") {
        this.props.handleSubmit();
      }
    };
  }
  render() {
    return (
      <div className="search">
        <input
          type="text"
          id="search-box"
          value={this.props.value}
          onChange={this.props.handleChange}
          placeholder="Enter city..."
        />
        <button className="submit" onClick={this.props.handleSubmit}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
