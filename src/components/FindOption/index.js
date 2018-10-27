import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { getOption, getOptionDetails } from '../../servicesFind'

import './find.less'

@withRouter
export default class FindOption extends PureComponent {
    constructor() {
        super();
        this.state = {
            offset: 0,
            limited: 10,
            option: []
        }
    }
    componentDidMount() {
        this.gitOptionDetails();
    }
    gitOptionDetails() {
        getOptionDetails({
            offset: this.state.offset,
            limited: this.state.limited
        })
            .then(resp => {
                if(resp.data.code === 200 && Array.isArray(resp.data.data)) {
                    this.setState({
                        option: resp.data.data
                    })
                }
            }).catch(err => {
                console.log(err)
            })
    }
    optionDetails = (id) => {
        this.props.history.push(`/finddetail/${id}`)
    }
  render() {
    return (
      <div className = "findOption">
        {
            this.state.option.map(data => {
                return <div key={data.id} onClick = {this.optionDetails.bind(this,data.id)}><img id = {data.id} src={data.img} alt=""/></div>
            })
        }
      </div>
    )
  }
}
