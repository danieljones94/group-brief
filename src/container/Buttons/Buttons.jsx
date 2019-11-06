import React, { Component } from "react";
import Button from "../../components/Button";

class Buttons extends Component {
  state = {};
  render() {
    return (
      <section>
        {this.props.buttonColors.map(color => {
          return <Button buttonName={color} key={color} />;
        })}
      </section>
    );
  }
}

export default Buttons;
