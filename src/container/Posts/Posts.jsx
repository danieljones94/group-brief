import React, { Component } from "react";
import styles from "./Posts.module.scss";
import { firestore } from "../../../firebase";

class Posts extends Component {
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
    return <div></div>;
  }
}

export default Posts;
