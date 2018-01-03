import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button, Toast } from 'antd-mobile';
import Page from '../../components/Page/Page'

class MyPage extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    loginOut() {
        this.props.loginOut()
        window.localStorage.removeItem('userInfo')
        this.props.history.push('/login')
    }

    render() {
        return (
            <Page  title='我的'>
                <div>
                    手机号: {this.props.userInfo ? this.props.userInfo.phone : ''}
                </div>
                <Button onClick={this.loginOut.bind(this)} type="default">退出</Button>
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