import React from "react";

function Error(props) {
  return (
    <div>
      <p className="error-message dissapointed-face">
        OOOPS!
        <span role="img" aria-label="sad emoji">
          😞
        </span>
      </p>
      <p className="error-message">An Error occurred. Try again later!</p>
      <p className="error-message">
        You can also get in touch with me by opening an issue
        <a
          href="https://github.com/nibble0101/weather-app-revised"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>
      </p>
    </div>
  );
}

export default Error;