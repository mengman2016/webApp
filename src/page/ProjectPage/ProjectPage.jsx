import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import SensorItem from '../../components/SensorItem/SensorItem'
import AppTabBar from '../../components/TabBar/TabBar'

import styles from './ProjectPage.less'

class ProjectPage extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            id: this.props.project.projectId,
            sensorList: []
        }
    }

    componentDidMount() {
        var sensorList = [{sensorId: 1, name: '轴力监测点1', strain: 50, unit: 'KN', limitValue: 130, maxValue: 61, },
                {sensorId: 2, name: '轴力监测点2', strain: 90, unit: 'KN', limitValue: 100, maxValue: 61, },
                {sensorId: 3, name: '位移监测点1',  strain: 15, unit: 'mm', limitValue: 12, maxValue: 15, },
                {sensorId: 4, name: '位移监测点2',  strain: 3, unit: 'mm', limitValue: 15, maxValue: 3, },
                {sensorId: 5, name: '位移监测点3',  strain: 3, unit: 'mm', limitValue: 15, maxValue: 3, },
                {sensorId: 6, name: '位移监测点4',  strain: 1, unit: 'mm', limitValue: 10, maxValue: 3, },
                {sensorId: 7, name: '位移监测点4',  strain: 1, unit: 'mm', limitValue: 10, maxValue: 3, },
                {sensorId: 7, name: '位移监测点4',  strain: 1, unit: 'mm', limitValue: 10, maxValue: 3, },
            ];
        setTimeout(()=> {
            this.setState({
                sensorList
            })
            console.log(this.state)
        }, 500)
    }

    selectItem(item) {
        this.props.selectItem(item)
        this.props.history.push('/sensor')
    }

    render() {
        return (
            <div ref="sensorpage" className="sensor-page">
                <Header title={ this.props.project.name } back={true}/>
                <div className="project-wrapper">
                    <ul>
                        {this.state.sensorList.map(item => {
                            return <li
                                className="index-list-item border-bottom-1px"
                                onClick={this.selectItem.bind(this, item)}
                            >
                                <SensorItem sensor={item}/>
                            </li>
                        })}
                    </ul>
                </div>
                <AppTabBar/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        project: state.ProjectReducer.project
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectItem: (item) => {
            dispatch({
                type: 'SELECT_ITEM',
                item: item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)
