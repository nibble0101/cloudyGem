import React, { Component } from "react";

class Footer extends Component {
  render() {
    const date = new Date(),
      year = date.getFullYear();
    return (
      <footer className="footer">
        <div className="copyright-info">
          Copyright {"\u00A9"} Joseph Mawa{" "}
          {year > 2020 ? `2020 - ${year}` : year}
        </div>
      </footer>
    );
  }
}

export default Footer;
