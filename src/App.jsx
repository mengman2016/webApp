import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import IndexPage from './page/IndexPage/IndexPage'
import HistoryPage from './page/HistoryPage/HistoryPage'
import styles from './App.less'

export default class App extends Component {
    render() {
        return (
            <div>
                <Route path="/index" component={IndexPage} />
                <Route path="/history" component={HistoryPage}/>
            </div>
        )
    }
}