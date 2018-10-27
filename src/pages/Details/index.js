import React, { Component } from 'react'
import { connect } from 'react-redux';
import{getDetails} from '../../services'
import {uiChangeTitle, uiChangeStyle } from '../../actions/ui';

@connect(null, {uiChangeTitle, uiChangeStyle })
export default class Details extends Component {
  componentDidMount(){
     this.props.uiChangeStyle({
       title: '详情',
       isShowBack: true,
       isTabBarShow: false
     })

     console.log(this.props)
     console.log(this.props.match.params.id)

    getDetails()
    .then(resp =>{
      console.log(resp)
    })
  }
  render() {
    return (
      <div>
        详情
      </div>
    )
  }
}
