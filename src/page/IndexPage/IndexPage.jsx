import React, {Component} from 'react'
import Page from '../../components/Page/Page'

import style from './IndexPage.less'

const data = [
    {projectId: 1,name: "广州市天河区三诚金融中心一期工程",interval: 60, sensorList: [{sensorId: 11, name: '轴力监测点1'}, {sensorId: 12, name: '位移监测点1'}]},
    {projectId: 2,name: "广州市天河区三诚金融中心二期工程",interval: 60, sensorList: [{sensorId: 21, name: '轴力监测点1'}, {sensorId: 22, name: '位移监测点1'}]},
    {projectId: 3,name: "广州市天河区三诚金融中心三期工程",interval: 60, sensorList: [{sensorId: 31, name: '轴力监测点1'}, {sensorId: 32, name: '位移监测点1'}]},
    {projectId: 4,name: "广州市天河区三诚金融中心四期工程",interval: 60, sensorList: [{sensorId: 41, name: '轴力监测点1'}, {sensorId: 42, name: '位移监测点1'}]},
    {projectId: 5,name: "广州市天河区三诚金融中心五期工程",interval: 60, sensorList: [{sensorId: 51, name: '轴力监测点1'}, {sensorId: 52, name: '位移监测点1'}]},
    {projectId: 6,name: "广州市天河区三诚金融中心六期工程",interval: 60, sensorList: [{sensorId: 61, name: '轴力监测点1'}, {sensorId: 62, name: '位移监测点1'}]},
    {projectId: 7,name: "广州市天河区三诚金融中心七期工程",interval: 60, sensorList: [{sensorId: 71, name: '轴力监测点1'}, {sensorId: 72, name: '位移监测点1'}]},
    {projectId: 8,name: "广州市天河区三诚金融中心八期工程",interval: 60, sensorList: [{sensorId: 81, name: '轴力监测点1'}, {sensorId: 82, name: '位移监测点1'}]},
    {projectId: 9,name: "广州市天河区三诚金融中心九期工程",interval: 60, sensorList: [{sensorId: 91, name: '轴力监测点1'}, {sensorId: 92, name: '位移监测点1'}]},
    {projectId: 10,name: "广州市天河区三诚金融中心十期工程",interval: 60, sensorList: [{sensorId: 101, name: '轴力监测点1'}, {sensorId: 102, name: '位移监测点1'}]}
]

export default class IndexPage extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            title: '首页',
            data: data
        }
    }
    render() {
        return (
            <Page title={this.state.title}>
                <div className="index-wrapper">
                    <ul className="index-ul">
                        {this.state.data.map(project => {
                            return <li key={project.projectId}>
                                <span className="index-title">{project.name}</span>
                                {project.sensorList.map(sensor => {
                                    return <div key={sensor.sensorId}>{sensor.name}</div>
                                })}
                                <div className="px_line"></div>
                            </li>
                        })}
                    </ul>
                </div>
            </Page>
        )

    }
}
