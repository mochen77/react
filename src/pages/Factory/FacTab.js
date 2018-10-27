import React, { Component ,Fragment } from 'react'
import { Tabs, Badge, Toast,Button,WhiteSpace } from 'antd-mobile';
import './Factory.less';
import { withRouter, Switch } from 'react-router-dom';
import {Faclist} from './services'

const tabs = [
    { title: <Badge text={''}>视屏专栏</Badge> },
    { title: <Badge text={'优惠'}>特训营</Badge> },
    { title: <Badge text={''}>短训班</Badge> },
    { title: <Badge text={''}>1元体验</Badge> },
    { title: <Badge text={'热'}>VIP年卡</Badge> },
    { title: <Badge text={'抢'}>高阶班</Badge> }
];/*  */

@withRouter

export default class FacTab extends Component {
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
   
    FacHandler = () => {
        this.props.history.push(`/fac/1`)
    }

     loadMore = ()=>{
        this.getGoods()
    }
    render() {
        return (
            <Fragment>

            <div className="Fac_menu">
                <Tabs tabs={tabs}
                    initalPage={'t2'}
                >
                    <div className="sec_menu" >
                        {
                            this.state.list.map(item => {
                                return (                    
                                        <div className="menu_con" key={item.id} onClick={this.FacHandler}>
                                            <img src={item.img} />
                                        </div>
                                )
                            })
                        }
                        <WhiteSpace />
                        <Button  
                        type="primary" 
                        onClick={this.loadMore}
                        > 点击加载更多</Button>
                        
                    </div>
                        
                </Tabs>     
            </div>
            
            </Fragment>
        )
    }
}
