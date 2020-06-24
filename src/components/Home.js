import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      lenght: 7,
    };

    this.onLoadMore = this.onLoadMore.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        const newData = res.data.slice(0, this.state.lenght);
        this.setState({ posts: newData });
      })
      .catch((err) => console.log(`Couldn't fetch data. Error: ${err}`));
  }

  onLoadMore() {
    this.setState({ lenght: this.state.lenght + 9 });
    this.componentDidMount();
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="ArticleContainer">
        {posts.length === 0
          ? <div className="ui active centered inline loader" />
          : posts.map((post) => (
            <article key={post.id}>
              <h1>{post.title}</h1>
              <p className="dateA">MARCH 2, 2016 | TRAVEL</p>
              <p>{post.body}</p>
              <Link to={`/post/${post.id}`}>
                <button type="button" className="ui post button">Continue reading</button>
              </Link>
              <div className="ui divider" />
            </article>

          ))}
        <button type="button" className="ui basic button big" onClick={this.onLoadMore}>More posts</button>
      </div>
    );
  }
}

export default Home;
