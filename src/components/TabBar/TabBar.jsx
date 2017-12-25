import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import style from './TabBar.less'
import { TabBar } from 'antd-mobile'

export default class AppTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: location.hash,
        };
    }
    renderContent(path) {
        location.replace(`#/${path}`)
    }

    componentDidMount() {
        this.refs.tabBar.addEventListener('touchmove', function (e) {
            e.preventDefault()
        }, false);
    }

    render() {
        return (
            <header className="tabBar" ref='tabBar'>
                <div style={{ height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            title="首页"
                            key="Index"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                            />
                            }
                            selected={this.state.selectedTab.indexOf('index') > -1}
                            badge={1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'index',
                                });
                                {this.renderContent('index')}
                            }}
                            data-seed="logId"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                                />
                            }
                            title="数据"
                            key="Data"
                            badge={'new'}
                            selected={this.state.selectedTab.indexOf('data') > -1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'data',
                                });
                                {this.renderContent('data')}
                            }}
                            data-seed="logId1"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                                />
                            }
                            title="消息"
                            key="Message"
                            dot
                            selected={this.state.selectedTab.indexOf('message') > -1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'message',
                                });
                                {this.renderContent('message')}
                            }}
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                            title="我"
                            key="my"
                            selected={this.state.selectedTab.indexOf('my')> -1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'my',
                                });
                                {this.renderContent('my')}
                            }}
                        >
                        </TabBar.Item>
                    </TabBar>
                </div>
            </header>
        );
    }
}