import React from 'react';
import {Link, NavLink} from 'react-router-dom'


class Sidebar extends React.Component {
  render() {
    return(
    <div className="sidebar">
      <div className="s_content">
        <h1>My personal blog</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, alias. Distinctio, quidem. Nisi hic asperiores unde quisquam, illum eligendi iste ad dolor consequuntur magni ut earum sapiente labore, ipsa non?</p>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </div> 
    )
  }
} 
export default Sidebar