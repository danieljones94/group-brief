import React, { Component } from "react";
import styles from "./Post.module.scss";

class Post extends Component {
  state = {};
  render() {
    return (
      <article className={styles[this.props.postData.type]}>
        <p>{this.props.postData.text}</p>
      </article>
    );
  }
}

export default Post;
