import React, { Component } from "react";
import styles from "./Button.module.scss";
import { firestore } from "../../../firebase";

class Button extends Component {
  state = {};
  componentDidMount() {
    firestore
      .collection("posts")
      .get()
      .then(querySnapshot => {
        const posts = querySnapshot.docs.map(doc => {
          const data = { ...doc.data(), docId: doc.id };
          return data;
        });
      });
  }

  render() {
    return (
      <div>
        <button type="button" className={styles.filterButton} alt="button">
          Filter
        </button>
      </div>
    );
  }
}

export default Button;
