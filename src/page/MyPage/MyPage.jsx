import React, {Component} from 'react'
import Page from '../../components/Page/Page'

export default class MyPage extends Component {
    constructor(props){
        super(props)
        console.log('my page')
    }
    render() {
        return (
            <Page title='我的' />
        )
    }
}