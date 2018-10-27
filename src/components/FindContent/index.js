import React, { Component } from 'react'
import { getContentDetails } from '../../servicesFind'
import {
    Button
} from 'antd-mobile'

import './index.less'

export default class FindContent extends Component {
    constructor() {
        super();
        this.state = {
          page: 1,
          limited: 10,
          content: []
        }
      }
    componentDidMount() {
        this.getContent();
    }

    getContent(){
        getContentDetails({
            offset: (this.state.page - 1) * this.state.limited,
            limited: this.state.limited
          })
            .then(resp => {
              if (resp.data.code === 200) {
                this.setState({
                  content: this.state.content.concat(resp.data.data),
                  page: this.state.page + 1
                })
              }
            })
    }

    onLoadMore = () => {
        this.getContent()
    }
    render() {
    return (
      <div>
        <div className = "contentTop">
            <p>教程精选</p>
            <p>也许是全球最大的手工教程库</p>
        </div>
        <div className = "contentCenter">
            <a href="">
                <span><i className="iconfont icon-fengjing"></i></span>
                <span>图文教程</span>
            </a>
            <a href="">
                <span><i className="iconfont icon-shipin"></i></span>
                <span>视频教程</span>
            </a>
        </div>
        <div className = "contentBottom">
            {
                
                this.state.content.map(data => {
                    return <a key={data.id} href="www.shougongke.com"><img src={data.img} alt=""/></a>
                })
            }
            <Button
            onClick = {this.onLoadMore}
            >点击加载更多...</Button>
        </div>
      </div>
    )
  }
}
