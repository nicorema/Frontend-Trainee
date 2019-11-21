import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

import FullPost from "../Blog/FullPost/FullPost";
import NewPost from "../Blog/NewPost/NewPost";
import Posts from "../Blog/Posts/Posts";
import "./Blog.css";
import axios from "axios";
class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#sumbit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
