import React, {Component} from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom'

class Post extends Component{
    state={
        post: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post: res.data
            })
            console.log(res)
        })

    }

    render() {
        const post = this.state.post ? (
            <div className="post">
            <h4>{this.state.post.title}</h4>
            <p1>MARCH 2, 2016 | TRAVEL</p1>
            <p>{this.state.post.body}</p>
            <Link to={'/home'} >
                <button className="ReturnButton">View all posts</button>
            </Link>
        </div>
        ) :(
            <p>Loading Posts...</p>
        )

        return (
            <div className="PostContainer">
            {post}
            </div>
        )
    }
}

export default Post
