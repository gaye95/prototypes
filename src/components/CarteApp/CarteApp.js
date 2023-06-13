import React    from "react";
import template from "./CarteApp.jsx";

class CarteApp extends React.Component {
  render() {
    return template.call(this);
  }
}

export default CarteApp;
