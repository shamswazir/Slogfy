import React, { Component } from "react";
import "./CalltoAction.css";
import Button from "../Button/Button";

export default class CalltoAction extends Component {
  render() {
    return (
      <div className="containerCTA">
        <div className="text_Container">
          <h3>Howdy Bring Awesomeness !!</h3>
          <div className="cTabtn">
            <Button title="CALL TO ACTION" />
          </div>
        </div>
      </div>
    );
  }
}
