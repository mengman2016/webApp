import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import LoginPage from './page/LoginPage/LoginPage'
import IndexPage from './page/IndexPage/IndexPage'
import ProjectPage from './page/ProjectPage/ProjectPage'
import SensorPage from './page/ProjectPage/SensorPage'
import DataPage from './page/DataPage/DataPage'
import MessagePage from './page/MessagePage/MessagePage'
import MyPage from './page/MyPage/MyPage'
import styles from './App.less'

export default class App extends Component {

    componentDidMount() {
        let userInfo = window.localStorage.getItem('userInfo')
        if(userInfo) {
            this.props.history.push('/index')
        }else {
            this.props.history.pushState('/login')
        }
    }

    render() {
        return (
            <div>
                <Route path="/login" component={LoginPage} />
                <Route path="/index" component={IndexPage} />
                <Route path='/project' component={ProjectPage} />
                <Route path='/sensor' component={SensorPage} />
                <Route path="/data" component={DataPage}/>
                <Route path="/message" component={MessagePage}/>
                <Route path="/my" component={MyPage}/>
            </div>
        )
    }
}