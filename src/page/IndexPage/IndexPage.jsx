import React, {Component} from 'react'
import Header from '../../components/Header/Header'
import IndexList from '../../components/IndexList/IndexList'
import AppTabBar from '../../components/TabBar/TabBar'
import Page from '../../components/Page/Page'

import style from './IndexPage.less'

export default class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '首页',
        }
    }
    render() {
        return (
            <Page title={this.state.title}>
                <IndexList />
            </Page>
        )
    }
}