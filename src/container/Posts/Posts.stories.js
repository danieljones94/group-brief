import React from "react";
import Posts from "./Posts";

const data = {
  text: "hello",
  type: "type1"
};

export default {
  title: "Posts"
};

export const posts = () => <Posts postData={data} />;
