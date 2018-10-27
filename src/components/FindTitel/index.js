import React, { Component } from 'react'
import "./FindTitel.less"
import './find.less'

export default class FindTitel extends Component {
  render() {
    return (
      <div>
        <div className="findtitle">
            <a className="titleText" href="不知道跳哪里">
                <span><i className = "iconfont icon-shearfind"></i></span>
                <span className = "text">看教程</span>
            </a>
            <a className="titleText" href="路由在哪里呀">
                <span><i className = "iconfont icon-shop"></i></span>
                <span className = "text">买材料</span>
            </a>
            <a className="titleText" href="路由在哪里">
                <span><i className = "iconfont icon-box"></i></span>
                <span className = "text">逛市场</span>
            </a>
            <a className="titleText" href="路由在那程序猿的代码里">
                <span><i className = "iconfont icon-keep"></i></span>
                <span className = "text">线下课</span>
            </a>
        </div>
      </div>
    )
  }
}
