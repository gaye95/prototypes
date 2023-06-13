import React    from "react";
import template from "./CardClient.jsx";

class CardClient extends React.Component {
  render() {
    return template.call(this);
  }
}

export default CardClient;
