import React, { Component } from 'react'
import { connect } from 'react-redux'

import IndexRouter from './router/index'

import styles from './App.less'

class App extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <IndexRouter history={this.props.history} match={this.props.match} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginIn: (userInfo) => {
            dispatch({
                type: 'LOGIN_IN',
                userInfo
            })
        }
    }
}

export default connect( null, mapDispatchToProps)(App)
