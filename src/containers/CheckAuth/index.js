import React from 'react'
import { withRouter } from 'react-router-dom';
import { checkToken } from '../../pages/Login/servicesLogin'
@withRouter

export default class CheckAuth extends React.Component {

    componentDidMount(){
        this.authCheck()/* 调用 */
    }

    componentDidupdate(){
        this.authCheck()
    }
    authCheck () {
        if (this.props.location.pathname === './login'){
            return;
        }
        const token = (window.localStorage.getItem('user-token'))
        if(!Boolean(token)) {
            this.props.history.push('./login');
            return;
        }

        if (Boolean(token)){
            checkToken(token)
            .then(resp => {
                if(resp.data.code === 200 && resp.data.errMsg === 'SUCCESS') {
                    window.localStorage.setItem('user-token',resp.data.token)
                }else{
                    window.localStorage.removeItem('user-token');/* 把本地cookie清空 */
                    this.props.history.push('./login');
                }
            })
        }
    } 

  render() {
    return null;
  }
}
