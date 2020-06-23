import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.post_id;
    Axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        this.setState({ post: res.data });
        console.log(res);
      });
  }

  render() {
    const post = this.state.post
      ? (
        <div className="post">
          <h4>{this.state.post.title}</h4>
          <div className="ui center aligned container">
            <p1>MARCH 2, 2016 | TRAVEL</p1>
          </div>
          <div className="ui divider" />
          <p2>{this.state.post.body}</p2>

        </div>
      )
      : (
        <div className="PostContainer">
          <div className="ui segment">
            <div className="ui active transition visible inverted dimmer">
              <div className="content">
                <div className="ui large text loader">Loading</div>
              </div>
            </div>
            <img
              src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
              alt="Loader"
              className="ui image"
            />
          </div>
        </div>
      );

    return (
      <div className="PostContainer">
        {post}
        <Link to="/home">
          <button type="button" className="ui basic button big">View all posts</button>
        </Link>
      </div>
    );
  }
}

export default Post;
