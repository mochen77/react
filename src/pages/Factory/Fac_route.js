import React, { Component,Fragment } from 'react'
import Facimg from './img/Fac.jpg';
import './Factory.less';
import {Button,WhiteSpace} from 'antd-mobile'
import {Faclist} from './services'

export default class Fac_route extends Component {
  constructor() {
    super();
    this.state = {
        page:1,
        limited:6,
        list: []
    }
}
componentDidMount() {
    this.getGoods();
  }
  getGoods() {
    Faclist({
      offset: (this.state.page - 1) * this.state.limited,
      limited: this.state.limited
    })
      .then(resp => {
        if (resp.data.res_code === 200) {
          this.setState({
            list: this.state.list.concat(resp.data.data),
            page: this.state.page + 1
          })
        }
      })
  }          
  render() {
    return (
      <Fragment>
        <div className="Facx"> 
          <div className="contents">
              <div className="Facimg">
                <img src={Facimg} alt='详情'/>
              </div> 
             <WhiteSpace/>       
              <h3>【火热限时39元】限时报名 优惠多多</h3>
              <p>本期公开课300名额已满</p>
              <p>限时推出友情价39元</p>
              <h4>9月21日之前报名仅需<span className='redfont'>99元</span></h4>
              <p>9月21日涨<span className='redfont'>69元</span></p>
              <p>9月28日后涨价为<span className='redfont'>9999元</span></p>
              <h4 className='redfont'>React带你装逼带你飞</h4>
              <div className="study">视频学习专栏</div> 
              {this.state.list.map(item => {
                  return (                    
                     <div className="menu_con" key={item.id}>
                          <p className='ittile'> {item.title}</p>
                         <img src={item.img} />
                        </div>
                                )
                            })
                        } 
            </div>   
          
              <WhiteSpace/>  
              <Button className="xbtn" type="warning">立即报名</Button> 
            
        </div>
       
       
      </Fragment>
    )
  }
}
