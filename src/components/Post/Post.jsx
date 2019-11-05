import React, { Component } from "react";
import styles from "./Post.module.scss";

class Post extends Component {
  state = {};
  render() {
    return (
      <article className={styles[this.props.type]}>
        <p>{this.props.text}</p>
      </article>
    );
  }
}

export default Post;
