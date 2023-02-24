import React from "react";
import "./Button.css";

function Button() {
  // light/dark small/medium props
  return (
    <div className="button button-small button-light">
      <span className="button_text">Button</span>
      <span>+</span>
    </div>
  );
}

export default Button;
