import React, { Component } from "react";
import loading from "../loading.gif";

export default class extends Component {
  render() {
    return (
      <div id="loading">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
