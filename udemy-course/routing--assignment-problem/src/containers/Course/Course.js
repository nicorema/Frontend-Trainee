import React, { Component } from "react";

class Course extends Component {
  state = {
    id: null,
    title: ""
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.state.id}</p>
      </div>
    );
  }
  componentDidMount() {
    this.loadData();
  }
  componentDidUpdate() {
    this.loadData();
  }
  loadData() {
    if (this.props.match.params.id) {
      const query = new URLSearchParams(this.props.location.search);
      let title;
      for (let param of query.entries()) {
        title = param[1].replace(/_/g, " "); // yields ['start', '5']
      }
      if (this.props.match.params.id != this.state.id) {
        this.setState({
          id: this.props.match.params.id,
          title: title
        });
      }
    }
  }
}

export default Course;
