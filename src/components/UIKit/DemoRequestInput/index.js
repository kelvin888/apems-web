import React from "react";
import PropTypes from "prop-types";

export const DemoRequestInput = (props) => {
  return (
    <form
      className={`form-container ${
        props.borderType === "gray" ? "gray-border" : ""
      }`}
    >
      <input placeholder="Email address" />
      <button type="submit">Request for Demo</button>
    </form>
  );
};

DemoRequestInput.defaultProps = {
  borderType: "pink",
};

DemoRequestInput.propTypes = {
  borderType: PropTypes.oneOf(["pink", "gray"]),
};
