import React, { Component } from "react";
import styles from "./Posts.module.scss";
import Post from "../../components/Post";

class Posts extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(postData => {
          return <Post postData={postData} key={postData.docId} />;
        })}
      </div>
    );
  }
}

export default Posts;
