import React, {Component} from 'react'
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom'

class Home extends Component{
    state = {
        posts:[ ]
      }

      componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          this.setState({
            posts: res.data.slice(0,7)
        })
      //.catch(err => console.log("Couldn't fetch data. Error: " + err))
      })
    }

      render() {
          const {posts} = this.state;
          return(
            <div className='ArticleContainer'>
            {
              posts.length === 0 ?
                <p>Loading Posts...</p>
              :
                posts.map((post) => (
                  <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p1>MARCH 2, 2016 | TRAVEL</p1>
                    <p>{post.body}</p>
                    <Link to={'/post/' + post.id} >
                    <button >Continue reading</button>
                    </Link>
                  </article>
                ))
            }
            <button className="ReturnButton">More posts</button>
            </div>
          )
      }
}

export default Home

