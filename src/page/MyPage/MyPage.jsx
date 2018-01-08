import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button, Toast } from 'antd-mobile';
import Page from '../../components/Page/Page'
import style from './MyPage.less'

class MyPage extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.refs.mypage.addEventListener('touchmove', function (e) {
            e.preventDefault()
        }, false)
    }

    loginOut() {
        fetch('/api/aaa', {method: 'get'}).then(function (res) {
            console.log(res)
        }, function (err) {
            console.log(err)
        })
        return;
        this.props.loginOut()
        window.localStorage.removeItem('userInfo')
        this.props.history.push('/login')
    }

    render() {
        return (
            <Page title='我的'>
                <div className="my-page" ref='mypage'>
                    <div className="my-item">
                        手机号: {this.props.userInfo ? this.props.userInfo.phone : ''}
                    </div>
                    <Button className="my-exit" onClick={this.loginOut.bind(this)} type="warning">退出</Button>
                </div>
            </Page>
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
        loginOut: () => {
            dispatch({
                type: 'LOGIN_OUT',
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)