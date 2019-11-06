import React, { Component } from "react";
import Button from "../../components/Button";
import styles from "./Buttons.module.scss";

class Buttons extends Component {
  state = {};
  render() {
    return (
      <section className={styles.buttonColors}>
        {this.props.buttonColors.map(color => {
          return (
            <Button
              buttonName={color}
              key={color}
              action={() => this.props.updatePosts(color)}
            />
          );
        })}
      </section>
    );
  }
}

export default Buttons;
