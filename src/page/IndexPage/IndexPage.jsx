import React, {Component} from 'react'
import Header from '../../components/Header/Header'
import IndexList from '../../components/IndexList/IndexList'
import AppTabBar from '../../components/TabBar/TabBar'

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
            <div className='page'>
                <Header title={this.state.title} />
                <div className='wrapper'>
                    <main className='content'>
                        <div className='split' />
                        <div className='view-wrapper'>
                            <div className='index-list-wrapper'>
                                <IndexList />
                            </div>
                        </div>
                    </main>
                </div>
                <AppTabBar/>
            </div>
        )
    }
}