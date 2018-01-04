import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'

import style from './index.less'

import LoginPage from '../page/LoginPage/LoginPage'
import IndexPage from '../page/IndexPage/IndexPage'
import ProjectPage from '../page/ProjectPage/ProjectPage'
import SensorPage from '../page/ProjectPage/SensorPage'
import DataPage from '../page/DataPage/DataPage'
import MessagePage from '../page/MessagePage/MessagePage'
import MyPage from '../page/MyPage/MyPage'

/**
 * Authentication 是否需要登录
 */
const RouteList = [
    {
        page: LoginPage,
        path: '/login',
        Authentication: false
    },{
        page: IndexPage,
        path: '/index',
        Authentication: true
    },{
        page: ProjectPage,
        path: '/project',
        Authentication: true
    },{
        page: SensorPage,
        path: '/sensor',
        Authentication: true
    },{
        page: DataPage,
        path: '/data',
        Authentication: true
    },{
        page: MessagePage,
        path: '/message',
        Authentication: true
    },{
        page: MyPage,
        path: '/my',
        Authentication: true
    }
]

class IndexRouter extends React.Component{

    constructor(props) {
        super(props)
        let userInfo = this.props.userInfo || window.localStorage.getItem('userInfo')
        this.props.loginIn(JSON.parse(userInfo))
        if(userInfo) {
            this.props.history.push('/index')
        }
    }

    componentWillMount() {
    }

    render() {
        return (
            <div>
                {RouteList.map((item) => {
                    if (this.props.userInfo) {
                        return <Route path={item.path} key={item.path} component={item.page} />
                    }else if(!item.Authentication){
                        return <Route path={item.path} key={item.path} component={item.page} />
                    }
                }) }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.LoginReducer.userInfo
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


export default connect( mapStateToProps, mapDispatchToProps)(IndexRouter)