import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import url from './img/tx.jpg';
import { Tabs, WhiteSpace, Badge, Button } from 'antd-mobile';
import './flower.less';

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }

  }

  componentDidMount() {
    axios.get(`http://rap2api.taobao.org/app/mock/25330/api/v2/item`)
      .then(resp => {

        this.setState({
          list: resp.data.data
        })
        console.log(this.state.list)
      });


  }

  onListClick = () => {
    function handleClick(e) {
      e.preventDefault();
      console.log('链接被点击');
    }
  }



  render() {
    return (
      <div>
        {
          this.state.list.map(item => {
            return (
              <div key={item.id}>
                <Link to={"/details/"+item.id+'/1'} onClick={this.onListClick} id={item.id}>
                  <div className="user" key={item.id}>
                    <img className="img_a" src={url} alt="" />
                    <div className="dong_tai">
                      <div className='name'>
                        <span>{item.name}</span>
                        <Badge text={'顶'}> <span className='din'></span></Badge>
                      </div>
                      <div className='time'>
                        <span>{item.time}分钟前</span>
                        <span >来自市集专题</span>
                      </div>
                    </div>

                  </div>
                  <div>
                    <p>{item.des}</p>
                    <img className="img_b" src={require('./img/11.webp')} alt="" />
                  </div>
                </Link>
              </div>

            )
          })
        }

      </div>
    )
  }
}
