import React, { Component,} from 'react'
import logo from '../Mine/tx.png';
import './login.less';
import { WingBlank, WhiteSpace, List, InputItem, Toast,  Button } from 'antd-mobile';
import Joi from 'joi';/* 用于验证的库 */
import { login } from './servicesLogin';
/* 用户名验证 */
/* 验证规则 */
const usernameText = Joi.string().min(6).max(25).required().label('用户名');
const passwordText = Joi.string().min(6).max(25).required().label('密码');
/* const usernameErrorMsg = "用户名必须为6-25位字符串"; */
export default class Login extends Component {
  constructor(){/* 构造函数 */
    super();/* 固定写法 */
  this.state = {/* state是一个状态管理器，以对象的方式表示，可以理解为设置一个对象 */
    username: '',
    hasUsernameError: false,
    usernameErrorMsg:'', 
    password: '',
    hasPasswordError: false,
    passwordErrorMsg:'',
    isButtonDisabled:true
  }
}
/* 用户名 */
  onUsernameError = () => {
      Toast.fail(this.state.userNameErrorMsg);
  }   

  onUsernameChange = (username) => {
              this.setState({
                username
              },()=>{
                this.validatePassword();
                this.validateUserName()
              })

  
  }  
  /* 密码 */
  onPasswordError = () => {
    Toast.fail(this.state.passwordErrorMsg);
}                                                                                                         
  onPasswordChange = (password) => {
  this.setState({
    password
  },()=>{
    this.validatePassword();
    this.validateUserName()
  })
} 


/* 用户名 */
  validateUserName(){
    
    Joi.validate(this.state.username,usernameText,{
      language: {
        string: {
          min:'必须要大于 {{limit}} 个字符',
          max:'必须小于 {{limit}} 个字符',
        }
      }
    },(err)=>{

        if(err){
          console.log(err.details)
              this.setState({
                hasUsernameError:true,
                userNameErrorMsg:err.message
              })
        }else{
          this.setState({
            hasUsernameError:false,
            userNameErrorMsg:''

          })
        }
    }) 
  }
  /* 密码 */
  validatePassword(){
    
    Joi.validate(this.state.password,passwordText,{
      language: {
        string: {
          min:'必须要大于 {{limit}} 个字符',
          max:'必须小于 {{limit}} 个字符',
        }
      }
    },(err)=>{

        if(err){
          console.log(err.details)
              this.setState({
                hasPasswordError:true,
               passwordErrorMsg:err.message
              })
        }else{
          this.setState({
            hasPasswordError:false,
            passwordErrorMsg:''

          })
        }
    }) 
  }

  onSubmit = () => {
    const {
      username,
      password
    } = this.state;
    login({
      username,
      password
    }).then(resp => {
      if(resp.data.code === 200 && resp.data.errMsg === 'SUCCESS') {
        window.localStorage.setItem('user-token',resp.data.token);
        this.props.history.push('./find');
    }else{
        window.localStorage.removeItem('user-token');/* 把本地cookie清空 */

    }
    })
  }

componentDidUpdate(){
const isButtonDisabled = (this.state.hasPasswordError || this.state.hasUsernameError);
if(isButtonDisabled !== this.state.isButtonDisabled){
  this.setState({
    isButtonDisabled
  })
}
}
  render() {
    return (
      <WingBlank> 
      <div className="img"> 
       <img className="loginImg" src={logo} alt=""/>
      </div>
        <WhiteSpace size="lg"/>
  
 <div className="ipt">
        <List>
          <InputItem
            type="text"
            placeholder="请输入用户名"
            error={this.state.hasUsernameError}
            onErrorClick={this.onUsernameError}
            onChange={this.onUsernameChange}
            value={this.state.username}
          >用户名</InputItem>
           </List>
           <List>
                    <InputItem
            type="password"
            placeholder="请输入密码"
            error={this.state.hasPasswordError}
            onErrorClick={this.onPasswordError}
            onChange={this.onPasswordChange}
            value={this.state.password}
          >密码</InputItem>
        </List>
      
      </div>   
      <WhiteSpace size="lg"/>
      <Button 
      type="primary" 
      disabled={this.state.isButtonDisabled}
      onClick={this.onSubmit}
      >登录</Button>
      </WingBlank>

    )
  }
}

