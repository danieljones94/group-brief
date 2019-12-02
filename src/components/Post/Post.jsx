import React, { Component } from "react";
import styles from "./Post.module.scss";

class Post extends Component {
  state = {};

  render() {
    const postStyle = {
      border: `${this.props.postData.type} solid 2px`,
      color: "#F5F5F5"
    };

    return (
      <article style={postStyle} className={styles.postContainer}>
        <p>{this.props.postData.text}</p>
      </article>
    );
  }
}

export default Post;
