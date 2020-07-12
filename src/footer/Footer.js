import React from "react";
const year = (new Date()).getFullYear();
function Footer(props) {
  return (
    <footer className="footer">
      <div className="copyright-info">
        Copyright {"\u00A9"} Joseph Mawa {year > 2020 ? `2020 - ${year}` : year}
      </div>
    </footer>
  );
}
export default Footer;
