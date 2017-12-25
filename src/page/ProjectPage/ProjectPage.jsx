import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BScroll from 'better-scroll'
import Header from '../../components/Header/Header'
import SensorItem from '../../components/SensorItem/SensorItem'

import styles from './ProjectPage.less'

class ProjectPage extends Component {
    constructor(props) {
        super(props);
        const arr = location.hash.split('=');
        this.state = {
            id: arr[1]
        }
    }

    componentDidMount() {
        new BScroll(this.refs.projectList, {
            useTransition: true
        })
    }

    render() {
        // const { project } = this.props
        const project =  {projectId: 1,name: "广州市天河区三诚金融中心一期工程",interval: 60,
            cities: [{sensorId: 1, name: '轴力监测点1', strain: 50, unit: 'KN', limitValue: 100, maxValue: 61, },
                {sensorId: 2, name: '轴力监测点2', strain: 90, unit: 'KN', limitValue: 100, maxValue: 61, },
                {sensorId: 3, name: '位移监测点1',  strain: 15, unit: 'mm', limitValue: 12, maxValue: 15, },
                {sensorId: 4, name: '位移监测点2',  strain: 3, unit: 'mm', limitValue: 15, maxValue: 3, },
                {sensorId: 5, name: '位移监测点3',  strain: 3, unit: 'mm', limitValue: 15, maxValue: 3, },
                {sensorId: 6, name: '位移监测点4',  strain: 1, unit: 'mm', limitValue: 10, maxValue: 3, },
                {sensorId: 7, name: '位移监测点4',  strain: 1, unit: 'mm', limitValue: 10, maxValue: 3, },
                // {sensorId: 8, name: '轴力监测点1', strain: 50, unit: 'KN', limitValue: 100, maxValue: 61, },
                // {sensorId: 9, name: '轴力监测点2', strain: 90, unit: 'KN', limitValue: 100, maxValue: 61, },
                // {sensorId: 10, name: '位移监测点1',  strain: 15, unit: 'mm', limitValue: 12, maxValue: 15, },
                // {sensorId: 11, name: '位移监测点2',  strain: 3, unit: 'mm', limitValue: 15, maxValue: 3, },
                // {sensorId: 12, name: '位移监测点3',  strain: 3, unit: 'mm', limitValue: 15, maxValue: 3, },
                // {sensorId: 13, name: '位移监测点4',  strain: 1, unit: 'mm', limitValue: 10, maxValue: 3, },
            ]}
        return (
            <div className="project-page">
                <Header title={ project.name } back={true}/>
                <div className='wrapper'>
                    <div className="content" ref='projectList'>
                        <div>
                            <div className='projectTitle'>项目监测间隔:{project.interval}分钟/次</div>
                            <main>
                                <ul>
                                    {project.cities.map(item => {
                                        return <li
                                            className="index-list-item border-bottom-1px"
                                        >
                                            <Link to={{
                                                pathname: '/project/sensor',
                                                search: `?id=${item.sensorId}`,
                                            }}>
                                                <SensorItem sensor={item}/>
                                            </Link>
                                        </li>
                                    })}
                                </ul>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        project: state.ProjectReducer.project
    }
}

export default connect(mapStateToProps)(ProjectPage)
