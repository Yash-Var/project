import React from "react";
import ReactDOM from "react-dom";

// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "thus is yash varshney from kiet")
//   );
// }


function Greeting() {
  return <h1>this is yash varshney</h1>;
}


ReactDOM.render(<Greeting />, document.getElementById("root"));
