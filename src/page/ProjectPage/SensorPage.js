import React, {Component} from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'

import style from './SensorPage.less'

class SensorPage extends Component {
    constructor(props) {
        super(props)
        //TODO 获取对应的数据

    }

    componentDidMount() {
        if(this.refs.table.offsetHeight + 84 > document.documentElement.clientHeight) {
            //超出屏幕高度，解除禁止
            this.refs.sensorpage.addEventListener('touchmove', function (e) {

            }, false)
        }else {
            this.refs.sensorpage.addEventListener('touchmove', function (e) {
                e.preventDefault()
            }, false)
        }
    }

    render() {
        const data = [
            {time: '2018.01.01', data: 24},
            {time: '2018.01.02', data: 25},
            {time: '2018.01.03', data: 26},
            {time: '2018.01.04', data: 27},
            {time: '2018.01.05', data: 27},
            {time: '2018.01.01', data: 24},
            {time: '2018.01.02', data: 25},
            {time: '2018.01.02', data: 25},
            {time: '2018.01.02', data: 25},
            {time: '2018.01.01', data: 24},
            {time: '2018.01.02', data: 25},
            {time: '2018.01.03', data: 26},
            {time: '2018.01.04', data: 27},
            {time: '2018.01.05', data: 27},
            {time: '2018.01.01', data: 24},
            {time: '2018.01.02', data: 25},
            {time: '2018.01.02', data: 25},
            {time: '2018.01.02', data: 25},
            {time: '2018.01.02', data: 25},
            {time: '2018.01.02', data: 25},
            {time: '2018.01.03', data: 26}
        ]
        return (
            <div ref="sensorpage" className="sensor-page">
                <Header back={true} title={this.props.item.name}/>
                <div className="sensor-wrapper">
                    <p></p>
                    <table ref='table' cellspacing="0px">
                        <thead>
                        <th>时间</th>
                        <th>数值</th>
                        <th>百分比</th>
                        </thead>
                        <tbody>
                        {data.map(item => {
                            return(<tr>
                                <td>{item.time}</td>
                                <td>{item.data + this.props.item.unit}</td>
                                <td>{(item.data/this.props.item.limitValue*100).toFixed(2)}%</td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
                <footer>
                    <div></div>
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.ProjectReducer.item
    }
}

export default connect(mapStateToProps)(SensorPage)