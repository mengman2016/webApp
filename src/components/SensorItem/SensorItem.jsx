import React, {Component} from 'react'
import styles from './SensorItem.less'

export default class SensorItem extends Component {
    constructor(props) {
        super(props)
        const percent = this.props.sensor.strain/this.props.sensor.limitValue;
        if(percent < 0.8){
            this.state = {
                color: '#52c41a',
                boxShadow: '#95de64'
            }
        }else if(percent >= 0.8 && percent < 1) {
            this.state = {
                color: '#d48806',
                boxShadow: '#fff1b8'
            }
        }else if(percent >= 1) {
            this.state = {
                color: '#f5222d',
                boxShadow: '#ffa39e'
            }
        }
    }

    render() {
        return (
            <div className='sensorItem' style={{backgroundColor: this.state.color, boxShadow: this.state.boxShadow}}>
                <div className='title'>{this.props.sensor.name}</div>
                <div className='percent'>{(this.props.sensor.strain*100/this.props.sensor.limitValue).toFixed(2)}%</div>
                <div className='strain'>{this.props.sensor.strain}{this.props.sensor.unit}</div>
                <div className='value'>预警值:{this.props.sensor.limitValue}{this.props.sensor.unit}</div>
                <div className='value'>历史最大值:{this.props.sensor.maxValue}{this.props.sensor.unit}</div>
            </div>
        )
    }
}