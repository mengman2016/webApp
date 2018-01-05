import React, {Component} from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'

import style from './SensorPage.less'

const data = [
    {time: '2018-01-01', value: 24},
    {time: '2018-01-02', value: 25},
    {time: '2018-01-03', value: 26},
    {time: '2018-01-04', value: 27},
    {time: '2018-01-05', value: 27},
    {time: '2018-01-06', value: 24},
    {time: '2018-01-07', value: 25},
    {time: '2018-01-08', value: 25},
    {time: '2018-01-09', value: 25},
    {time: '2018-01-10', value: 24},
    {time: '2018-01-11', value: 24},
    {time: '2018-01-12', value: 25},
    {time: '2018-01-13', value: 26},
    {time: '2018-01-14', value: 27},
    {time: '2018-01-15', value: 27},
    {time: '2018-01-16', value: 24},
    {time: '2018-01-17', value: 25},
    {time: '2018-01-18', value: 25},
    {time: '2018-01-19', value: 25},
    {time: '2018-01-20', value: 25},
    {time: '2018-01-21', value: 25},
    {time: '2018-01-22', value: 25},
    {time: '2018-01-22', value: 25},
    {time: '2018-01-23', value: 26}
]

function initChart(el, data, limitValue) {

}

class SensorPage extends Component {
    constructor(props) {
        super(props)
        //TODO 获取对应的数据

    }

    componentDidMount() {
        //初始化判断是否禁用touchmove
        if(this.refs.table.offsetHeight + 84 > document.documentElement.clientHeight) {
            //超出屏幕高度，解除禁止
            this.refs.sensorpage.addEventListener('touchmove', function (e) {

            }, false)
        }else {
            this.refs.sensorpage.addEventListener('touchmove', function (e) {
                e.preventDefault()
            }, false)
        }
        //初始化图表

    }

    render() {
        return (
            <div ref="sensorpage" className="sensor-page">
                <Header back={true} title={this.props.item.name}/>
                <div className="sensor-wrapper">
                    <canvas ref="sensorChart" style={{width: '100%'}}></canvas>
                    <table ref='table' cellSpacing="0px">
                        <thead>
                        <th>时间</th>
                        <th>数值</th>
                        <th>百分比</th>
                        </thead>
                        <tbody>
                        {data.map(item => {
                            return(<tr>
                                <td>{item.time}</td>
                                <td>{item.value + this.props.item.unit}</td>
                                <td>{(item.value/this.props.item.limitValue*100).toFixed(2)}%</td>
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