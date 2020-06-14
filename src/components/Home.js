import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 7)
                })
            })
            .catch(err => console.log("Couldn't fetch data. Error: " + err))
    }

    render() {
        const {posts} = this.state;
        return (
            <div className='ArticleContainer'>
                {posts.length === 0
                    ? <div class="ui segment">
                            <div class="ui active transition visible inverted dimmer">
                                <div class="content">
                                    <div class="ui small text loader">Loading posts</div>
                                </div>
                            </div>
                            <img
                                src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                                class="ui image"/>
                        </div>
                    : posts.map((post) => (
                        <article key={post.id}>
                            <h2>{post.title}</h2>
                            <p1>MARCH 2, 2016 | TRAVEL</p1>
                            <p>{post.body}</p>
                            <Link to={'/post/' + post.id}>
                                <button class="ui button">Continue reading</button>
                            </Link>
                            <div class="ui divider"></div>
                        </article>

                    ))
}
                <button class="ui basic button big">More posts</button>
            </div>
        )
    }
}

export default Home
