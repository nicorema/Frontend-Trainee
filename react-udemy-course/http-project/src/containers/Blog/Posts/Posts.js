import React from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("posts/")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Nico"
          };
        });
        this.setState({
          posts: updatedPosts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    let posts = this.state.posts.map(post => {
      return (
        // <Link key={post.id} to={"/" + post.id}>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        ></Post>
        //</Link>
      );
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>
    );
  }
  postSelectedHandler(id) {
    this.props.history.push({ pathname: "/posts/" + id });
  }
}

export default Posts;
