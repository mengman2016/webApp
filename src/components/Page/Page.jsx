import React, {Component} from 'react'
import Header from '../Header/Header'
import IndexList from '../IndexList/IndexList'
import AppTabBar from '../TabBar/TabBar'

import style from './Page.less'
export default class Page extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page'>
                <Header title={this.props.title} />
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



























