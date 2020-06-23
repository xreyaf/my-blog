import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            lenght : 8
        };

        this.fetchMorePosts = this.fetchMorePosts.bind(this);
    }


    fetchMorePosts(){
        this.setState({lenght: this.state.lenght+8});
        console.log(this.state.lenght);
    }
    render() {

        const {posts, lenght} = this.state;
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            let newData = res
                .data
                .slice(0, this.state.lenght);
            this.setState({posts: newData})
        })
        .catch(err => console.log("Couldn't fetch data. Error: " + err))
        return (
            <div className='ArticleContainer'>
                {posts.length === 0
                    ? <div class="ui active centered inline loader"></div>
                    : posts.map((post) => (
                        <article key={post.id}>
                            <h1>{post.title}</h1>
                            <p1>MARCH 2, 2016 </p1>  
                            <p1 className="TagDivider"> | </p1>
                            <p1>TRAVEL</p1>
                            <p>{post.body}</p>
                            <Link to={'/post/' + post.id}>
                                <button class="button">Continue reading</button>
                            </Link>
                            <div class="ui divider"></div>
                        </article>

                    ))
                }
                <button class="ui basic button big" onClick={this.fetchMorePosts}>More posts</button>
            </div>
        )
    }
}

export default Home
