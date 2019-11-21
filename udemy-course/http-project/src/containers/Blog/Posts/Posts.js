import React from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import './Posts.css';
class Posts extends React.Component {
  state = {
    posts: [],
    
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
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          ></Post>
        );
      });
    
    return <section className="Posts">{posts}</section>;
  }
  postSelectedHandler(id) {
    this.setState({
      selectedPostId: id
    });
  }
}

export default Posts;
