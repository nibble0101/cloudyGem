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
    </div>
  );
}

export default Error;