import React, { Component } from "react";
import styles from "./App.module.scss";
import { firestore } from "../../firebase";
import Button from "../../components/Button";
import Posts from "../Posts";

class App extends Component {
  state = {
    posts: [],
    filterPosts: [],
    filterType: "all"
  };

  updatePosts = filterType => {
    const filterPosts = this.state.posts.filter(
      post => post.type === filterType || filterType === "all"
    );
    this.setState({
      filterType: filterType,
      filterPosts: filterPosts
    });
  };

  componentDidMount() {
    firestore
      .collection("posts")
      .get()
      .then(querySnapshot => {
        let posts = querySnapshot.docs.map(doc => {
          const data = { ...doc.data(), docId: doc.id };
          return data;
        });
        this.setState({
          posts: posts,
          filterPosts: posts
        });
      });
  }
  render() {
    return (
      <div className="App">
        <header className={styles.appHeader}>
          <Button buttonName="all" action={() => this.updatePosts("all")} />
          <Button buttonName="type1" action={() => this.updatePosts("type1")} />
          <Button buttonName="type2" action={() => this.updatePosts("type2")} />
          <Button buttonName="type3" action={() => this.updatePosts("type3")} />
        </header>
        <main>
          <Posts posts={this.state.filterPosts} />
        </main>
      </div>
    );
  }
}

export default App;
