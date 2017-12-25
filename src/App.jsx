import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import IndexPage from './page/IndexPage/IndexPage'
import ProjectPage from './page/ProjectPage/ProjectPage'
import DataPage from './page/DataPage/DataPage'
import MessagePage from './page/MessagePage/MessagePage'
import MyPage from './page/MyPage/MyPage'
import styles from './App.less'

export default class App extends Component {
    render() {
        return (
            <div>
                <Route path="/index" component={IndexPage} />
                <Route path='/project' component={ProjectPage} />
                <Route path="/data" component={DataPage}/>
                <Route path="/message" component={MessagePage}/>
                <Route path="/my" component={MyPage}/>
            </div>
        )
    }
}