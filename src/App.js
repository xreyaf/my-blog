import React, {Component} from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Sidebar/>
                <div className='Main'>
                    <Switch>
                        <Redirect exact from="/" to="Home"/>
                        <Route path='/home' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/post/:post_id' component={Post}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}

export default App;