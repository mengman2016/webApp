import React, {Component} from 'react'
import Page from '../../components/Page/Page'

export default class DataPage extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <Page  title='数据中心' />
        )
    }
}

