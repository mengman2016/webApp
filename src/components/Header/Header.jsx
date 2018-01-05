import React, {Component} from 'react'
import style from './Header.less'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    handleClickOnImage() {
        history.go(-1)
    }

    componentDidMount() {
        this.refs.header.addEventListener('touchmove', function (e) {
            e.preventDefault()
        }, false)
    }

    render() {
        return (
            <header className='header' ref='header'>
                <h1>{this.props.title}</h1>
                {this.props.back ? <div className='back' onClick={this.handleClickOnImage.bind(this, null)} /> : null }
            </header>
        )
    }
}