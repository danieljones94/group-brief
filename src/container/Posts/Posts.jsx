import React, { Component } from "react";
import styles from "./Posts.module.scss";
import { firestore } from "../../../firebase";
import Post from "../../components/Post";

class Posts extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    firestore
      .collection("posts")
      .get()
      .then(querySnapshot => {
        const posts = querySnapshot.docs.map(doc => {
          const data = { ...doc.data(), docId: doc.id };
          return data;
        });
        console.log(posts);
        this.setState({
          posts: posts
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(postData => {
          return <Post text={postData.text} type={postData.type} />;
        })}
      </div>
    );
  }
}

export default Posts;
