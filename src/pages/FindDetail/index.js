import React, { Component } from 'react'
import { connect } from 'react-redux';
import { uiChangeTitle, uiToggleHeaderBack } from '../../actions/ui'
import { getOptionDetails } from '../../servicesFind'
import { isEqual } from 'lodash';

import './findDetail.less'

@connect(null, { uiChangeTitle, uiToggleHeaderBack })
export default class index extends Component {
  constructor() {
    super()
    this.state = {
      optiondetails: {}
    }
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !isEqual(nextState.optiondetails === this.state.optiondetails);
    }
    componentDidMount() {
        this.props.uiChangeTitle('Option')
        this.props.uiToggleHeaderBack(true)

        getOptionDetails(this.props.match.params.id)
          .then(resp => {
            const pages=this.props.match.params.id
            const datas=resp.data.data.filter(function(data){
              return data.id==pages
            })
            if (resp.data.code === 200) {
              this.setState({
                optiondetails: datas[0]
              }, () => {
                this.props.uiChangeTitle(this.state.optiondetails.title);
              })
            }
      })
    }
    componentWillUnmount() {
      this.props.uiToggleHeaderBack()

      
    }
  render() {
    console.log(this.state.optiondetails)
    return (
      <div className = "findOptionDetail">
        <h2>{this.state.optiondetails.title}</h2>
        <div>{this.state.optiondetails.text}</div>
      </div>
    )
  }
}
