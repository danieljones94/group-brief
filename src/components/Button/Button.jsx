import React, { Component } from "react";
import styles from "./Button.module.scss";

class Button extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className={styles[this.props.buttonName]}
          alt={this.props.buttonName}
          onClick={this.props.action}
        >
          {this.props.buttonName}
        </button>
      </div>
    );
  }
}

export default Button;
