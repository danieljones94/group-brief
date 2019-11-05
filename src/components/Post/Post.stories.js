import React from "react";
import Post from "./Post";

const data = {
  text: "hello",
  type: "type1"
};

export default {
  title: "Post"
};

export const post = () => <Post postData={data} />;
