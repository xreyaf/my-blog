import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            lenght: 7
        };

        this.onLoadMore = this.onLoadMore.bind(this);
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                let newData = res.data.slice(0, this.state.lenght);
                this.setState({posts: newData})
            })
            .catch(err => console.log("Couldn't fetch data. Error: " + err))
    }

    onLoadMore() {
        this.setState({
            lenght: this.state.lenght + 7
        });
        console.log(this.state.lenght);
        this.componentDidMount();
    }

    render() {
        const {posts} = this.state;

        return (
            <div className='ArticleContainer'>
                {posts.length === 0
                    ? <div className="ui active centered inline loader"></div>
                    : posts.map((post) => (
                        <article key={post.id}>
                            <h1>{post.title}</h1>
                            <p1>MARCH 2, 2016 | TRAVEL</p1>
                            <p>{post.body}</p>
                            <Link to={'/post/' + post.id}>
                                <button className="ui post button">Continue reading</button>
                            </Link>
                            <div className="ui divider"></div>
                        </article>

                    ))
}
                <button className="ui basic button big" onClick={this.onLoadMore}>More posts</button>
            </div>
        )
    }
}

export default Home
