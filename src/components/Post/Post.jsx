import React, { Component } from "react";

class Post extends Component {
  state = {};

  render() {
    const postStyle = {
      border: `${this.props.postData.type} solid 2px`
    };

    return (
      <article style={postStyle}>
        <p>{this.props.postData.text}</p>
      </article>
    );
  }
}

export default Post;
