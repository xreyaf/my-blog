import React from 'react';
import {NavLink} from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="s_content">
                    <NavLink to="/home">
                        <h1>My personal blog</h1>
                    </NavLink>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, alias.
                        Distinctio, quidem. Nisi hic asperiores unde quisquam, illum eligendi iste ad
                        dolor consequuntur magni ut earum sapiente labore, ipsa non?</p>
                    <div class="ui divider"></div>
                    <div role="list" class="ui link list">
                        <div role="listitem" class="item">
                            <NavLink to="/home">HOME</NavLink>
                        </div>
                        <a role="listitem" class="item">
                            <NavLink to="/about">ABOUT</NavLink>
                        </a>
                    </div>
                    <div class="ui divider"></div>
                    <div>
                        <a className="SocialLinks" href="https://vk.com/boooo0_0oooom" target="_blank" rel="noopener noreferrer" >
                            <i aria-hidden="true" class="vk big icon"></i>
                        </a>

                        <a className="SocialLinks" href="https://www.instagram.com/xreyaf" target="_blank" rel="noopener noreferrer" >
                            <i aria-hidden="true" class="instagram big icon"></i>
                        </a>

                        <a className="SocialLinks" href="https://github.com/xreyaf" target="_blank" rel="noopener noreferrer" >
                            <i aria-hidden="true" class="github big icon"></i>
                        </a>

                        <a className="SocialLinks" href="https://twitter.com/xreyaf" target="_blank" rel="noopener noreferrer" >
                            <i aria-hidden="true" class="twitter big icon"></i>
                        </a>

                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar