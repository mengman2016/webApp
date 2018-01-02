import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './IndexList.less'

const data = [
    {projectId: 1,name: "广州市天河区三诚金融中心一期工程",interval: 60, cities: [{sensorId: 1, name: '轴力监测点1'}, {sensorId: 2, name: '位移监测点1'}]},
    {projectId: 2, cities: [{sensorId: 3, name: '鞍山市', tag:"鞍山"}, {sensorId: 4, name: '安庆市', tag:"安庆"}],name: "A"},
    {projectId: 3, cities: [{sensorId: 1, name: '北京市', tag:"北京"}, {sensorId: 5, name: '巴音郭楞州', tag:"巴音郭楞州"}, {sensorId: 6, name: '博尔塔拉州', tag: '博尔塔拉州'}],name: "B"},
    {projectId: 4, cities: [{sensorId: 7, name: '成都市', tag:"成都"}],name: "C"},
    {projectId: 5, cities: [{sensorId: 8, name: '鄂尔多斯市', tag:"鄂尔多斯市"}, {sensorId: 9, name: '鄂州市', tag:"鄂州市"}, {sensorId: 10, name: '恩施州', tag: "恩施州"}],name: "E"},
    {projectId: 6, cities: [{sensorId: 11, name: '福州市', tag:"福州"}, {sensorId: 12, name: '佛山市', tag:"佛山"}, {sensorId: 13, name: '防城港市', tag: '防城港市'}],name: "F"},
    {projectId: 7, cities: [{sensorId: 14, name: '中山', tag:"中山"}, {sensorId: 15, name: '郑州', tag:"郑州"}, {sensorId: 16, name: '张家界', tag: '张家界'},{sensorId: 17, name: '珠海',tag: '珠海'},
    {sensorId: 18, name: '自贡',tag: '自贡'},{sensorId: 19, name: '枣庄',tag: '枣庄'},{sensorId: 20, name: '资阳',tag: '资阳'},{sensorId: 21, name: '舟山',tag: '舟山'},],name: "Z"},
]

class IndexList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        new BScroll(this.refs.wrapper, {})
    }

    addActiveCls(event) {
    }

    render() {
        const { SelectProject } = this.props;
        return (
            <div className="index-list">
                <div ref="wrapper" className="list-wrapper">
                    <div className="scroll-content">
                        <div ref="listWrapper">
                            <div className="index-list-content" ref="content">
                                <ul ref="groups">
                                    {data.map(project => {
                                        return <li ref="listGroup">
                                            <h2 className="index-list-anchor">{project.name}</h2>
                                            <ul>
                                                {project.cities.map(item => {
                                                    return <li
                                                        className="index-list-item border-bottom-1px"
                                                        onTouchStart={() => SelectProject(project)}
                                                        onClick={() => SelectProject(project)}>
                                                        <Link to={{
                                                            pathname: '/project'
                                                        }}>
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                })}
                                            </ul>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        SelectProject: (project) => {
            dispatch({
            type: 'SELECT_PROJECT',
            project: project})
        }
    }
}

export default connect( null,mapDispatchToProps)(IndexList)