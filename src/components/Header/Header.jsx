import React, {Component} from 'react'
import style from './Header.less'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    handleClickOnImage() {
        history.go(-1)
    }

    render() {
        return (
            <header className='header'>
                <h1>{this.props.title}</h1>
                {this.props.back ? <img className='back' src="../../../assets/back.svg" onClick={this.handleClickOnImage.bind(this, null)} /> : null }
            </header>
        )
    }
}