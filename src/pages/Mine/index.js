import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { uiChangeTitle, uiChangeTabBar, uiChangeStyle } from '../../actions/ui';
import './Mine.less';
import {CheckAuth} from '../../containers';
import { Button,WhiteBlank } from 'antd-mobile'
@connect(null, { uiChangeTitle, uiChangeTabBar, uiChangeStyle })
export default class Mine extends Component {
  componentDidMount() {
    // this.props.uiChangeTitle("我的")
    // this.props.uiChangeTabBar(true)
    this.props.uiChangeStyle({
      title: '我的',
      isShowBack: false,
      isTabBarShow: true
    })
  }
  onlogout = () => {
    /* 实际上有个logout的api */
    window.localStorage.removeItem('user-token');
    this.props.history.push('/login');
  }

  render() {
    return (
      <Fragment>
      <CheckAuth/>
        <div className="touxiang">
          <div className="photo">
            <img src={require("./tx.png")} />
          </div>
          <div className="user">
            <p>德玛西亚 <br /> <span className="iconfont">&#xe6d0;</span><span>.1</span></p>
        

          </div>
          <span className="iconfont you ">&#xe643;</span>
        </div>
        
        <div className="vip">

          <div className="t">
            手工客会员尊享13大特权
        </div>
          <div className="kaitong">

            开通会员
        </div>

        </div>
        <div className="huizhang">
          <span className="iconfont">&#xe671;</span> 我的徽章
  
          <span className="iconfont xz">&#xe671;</span>
          <span className="iconfont y ">&#xe643;</span>
        </div>
        {/* body */}
        <div className="hljs">
          <ul>
            <li>
              <span className="iconfont h">&#xe65b;</span>
              <p>播放记录</p>
            </li>
            <li>
              <span className="iconfont h">&#xe603;</span>
              <p>手工圈订单</p>
            </li>
            <li>
              <span className="iconfont h">&#xe607;</span>
              <p>市集订单</p>
            </li>
            <li>
              <span className="iconfont h">&#xe624;</span>
              <p>教程订单</p>
            </li>
            <li>
              <span className="iconfont h">&#xe60b;</span>
              <p>众筹订单</p>
            </li>
            <li>
              <span className="iconfont h">&#xe60d;</span>
              <p>线下课订单</p>
            </li>
            <li>
              <span className="iconfont h">&#xe7777;</span>
              <p>我的优惠券</p>
            </li>
            <li>
              <span className="iconfont h">&#xe6fc;</span>
              <p>帮助中心</p>
            </li>
            <li>
              <span className="iconfont h">&#xe612;</span>
              <p>联系客服</p>
            </li>
            <li>
              <span className="iconfont h">&#xe60c;</span>
              <p>设置</p>
            </li>
            <li>

            </li>
            <li>

            </li>
          </ul>
        
          <div className="out">
              <Button type="warning" onClick={this.onlogout}>退出登录</Button>
            </div>
            
        </div>
      </Fragment>
    )
  }
}
