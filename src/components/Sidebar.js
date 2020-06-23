import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <div className="s_content">
      <NavLink to="/home">
        <h1>My personal blog</h1>
      </NavLink>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, alias.
        Distinctio, quidem. Nisi hic asperiores unde quisquam, illum eligendi iste ad
        dolor consequuntur magni ut earum sapiente labore, ipsa non?
      </p>
      <div className="ui divider" />
      <div role="list" className="ui link list">
        <div role="listitem" className="item">
          <NavLink to="/home">HOME</NavLink>
        </div>
        <div role="listitem" className="item">
          <NavLink to="/about">ABOUT</NavLink>
        </div>
      </div>
      <div className="ui divider" />
      <div>
        <a
          className="SocialLinks"
          href="https://vk.com/boooo0_0oooom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i aria-hidden="true" className="vk big icon" />
        </a>

        <a
          className="SocialLinks"
          href="https://www.instagram.com/xreyaf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i aria-hidden="true" className="instagram big icon" />
        </a>

        <a
          className="SocialLinks"
          href="https://github.com/xreyaf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i aria-hidden="true" className="github big icon" />
        </a>

        <a
          className="SocialLinks"
          href="https://twitter.com/xreyaf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i aria-hidden="true" className="twitter big icon" />
        </a>
      </div>

    </div>
  </div>
);
export default Sidebar;
