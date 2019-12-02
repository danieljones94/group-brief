import React, { Component } from "react";
import styles from "./App.module.scss";
import { firestore } from "../../firebase";
import Button from "../../components/Button";
import Posts from "../Posts";
import Buttons from "../Buttons";

class App extends Component {
  state = {
    posts: [],
    filterPosts: [],
    filterType: "all",
    colors: []
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
        const colors = [...new Set(posts.map(post => post.type))];
        this.setState({
          posts: posts,
          filterPosts: posts,
          colors
        });
      });
  }
  render() {
    return (
      <div className={styles.appContainer}>
        <header className={styles.appHeader}>
          <h1>
            <img
              src="https://fontmeme.com/permalink/191202/2e5bf93093ad800ccb36d7bafacecb8e.png"
              alt="nokia-font"
              border="0"
            />
          </h1>
          <Button buttonName="all" action={() => this.updatePosts("all")} />
          <Buttons
            buttonColors={this.state.colors}
            updatePosts={this.updatePosts}
          />
        </header>
        <main>
          <Posts posts={this.state.filterPosts} />
        </main>
      </div>
    );
  }
}

export default App;
