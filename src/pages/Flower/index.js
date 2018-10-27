import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { uiChangeTitle, uiChangeStyle } from '../../actions/ui';
import axios from 'axios'

import { Tabs, WhiteSpace, Badge, Button } from 'antd-mobile';

import url from  './img/tx.jpg';
import Item from './Item'

const tabs = [
  { title: '综合' },
  { title: '最新' },
  { title: '精华' },
  { title: <Badge text={'新'}>热卖</Badge> },
  { title: '公告' },
];



@connect(null, { uiChangeTitle,uiChangeStyle })

export default class Factory extends Component {
  constructor(){
    super();
    this.state={
      list:[]
    }
  }

  componentDidMount() {
    // this.props.uiChangeStyle("手工圈");
    this.props.uiChangeStyle({
      title: '手工圈',
      isShowBack: false,
      isTabBarShow: true
    })

    axios.get(`http://rap2api.taobao.org/app/mock/25330/api/v2/item`)
    .then(resp => {     
     
      this.setState({
        list: resp.data.data
      })
      console.log(this.state.list)
    })
  }
  render() {
   
    return (
      <div>        
        <WhiteSpace />
        <div style={{ height: 600 }}>
          <Tabs tabs={tabs}
            initalPage={'t2'}
          >        
             <div className = "containers" style={{  height: '1000px', backgroundColor: '#fff' }}>
                  <Item></Item>
              </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
                  <Item></Item>
              </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
                <div>
                    <p>手工客是一款手工学习神器，手工爱好者必备应用，手工客网倾力打造。聚集了国内众多的手工艺人和手工爱好者，是一个学习手工和分享手工作品的互动社区。</p>
                    <img className ="img_b" src={require('./img/12.jpg')} alt=""/>
                  </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
              <div>
                    <p>手工客是一款手工学习神器，手工爱好者必备应用，手工客网倾力打造。聚集了国内众多的手工艺人和手工爱好者，是一个学习手工和分享手工作品的互动社区。</p>
                    <img className ="img_b" src={require('./img/12.jpg')} alt=""/>
                  </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
              <div>
                    <p>手工客是一款手工学习神器，手工爱好者必备应用，手工客网倾力打造。聚集了国内众多的手工艺人和手工爱好者，是一个学习手工和分享手工作品的互动社区。</p>
                    <img className ="img_b" src={require('./img/12.jpg')} alt=""/>
                  </div>
              </div>
              
          
          </Tabs>
        </div>
      </div>
    )
  }
}



