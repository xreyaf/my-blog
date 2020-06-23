import React, {Component} from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom'

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        Axios
            .get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({post: res.data})
                console.log(res)
            })

    }
    render() {
        const post = this.state.post
            ? (
                <div className="post">
                    <h4>{this.state.post.title}</h4>
                    <div class="ui center aligned container">
                    <p1>MARCH 2, 2016 </p1>  
                    <p1 className="TagDivider"> | </p1>
                    <p1>TRAVEL</p1>
                    </div>
                    <div class="ui divider"></div>
                    <p2>{this.state.post.body}</p2>

                </div>
            )
            : (
                <div className="PostContainer">
                    <div class="ui segment">
                        <div class="ui active transition visible inverted dimmer">
                            <div class="content">
                                <div class="ui large text loader">Loading</div>
                            </div>
                        </div>
                        <img
                            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                            alt="Loader"
                            class="ui image"/>
                    </div>
                </div>
            )

        return (
            <div className="PostContainer">
                {post}
                <Link to={'/home'}>
                    <button class="ui basic button big">View all posts</button>
                </Link>
            </div>
        )
    }
}

export default Post
