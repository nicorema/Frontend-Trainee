import React, { Component } from "react";

import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Posts from "../Blog/Posts/Posts";
import "./Blog.css";
import axios from "axios";

//import NewPost from "../Blog/NewPost/NewPost";

import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
  return import("../Blog/NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth:  true
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to={{
                    pathname: "/new-post",
                    hash: "#sumbit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" exact component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from ="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
