import React, {Component} from 'react'
import { Button, Toast } from 'antd-mobile';
import { connect } from 'react-redux'
import styles from './LoginPage.less'

class DataPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            password: ''
        }
    }

    phoneChangeHandle(event) {
        this.setState({
            phone: event.target.value
        })
    }

    passwordChangeHandle(event) {
        this.setState({
            password: event.target.value
        })
    }

    clickHandle () {
        if(!this.state.phone) {
            Toast.info('请输入手机号码！')
            return
        }
        if(!this.state.password) {
            Toast.info('请输入密码！')
            return
        }
        if(!/^1\d{10}$/.test(this.state.phone)){
            Toast.info('手机号码格式错误！')
            return
        }
        //发请求
        //todo  待safari支持pwa时再改
        let userInfoString = JSON.stringify({
            phone: this.state.phone,
            token: this.state.token
        })
        window.localStorage.setItem('userInfo', userInfoString)
        this.props.loginIn({
            phone: this.state.phone,
            token: this.state.token
        })
        this.props.history.push('/index')
    }

    render() {
        return (
            <div className="login-page">
                <form className="login-form" action="login">
                    <input onChange={this.phoneChangeHandle.bind(this)} value={this.state.phone} type="tel" placeholder="请输入手机号"/>
                    <input onChange={this.passwordChangeHandle.bind(this)}  value={this.state.password} type="password" placeholder="请输入密码"/>
                    <Button onClick={this.clickHandle.bind(this)} type="primary">登录</Button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginIn: (userInfo) => {
            dispatch({
                type: 'LOGIN_IN',
                userInfo: userInfo})
        }
    }
}

export default connect( null,mapDispatchToProps)(DataPage)
