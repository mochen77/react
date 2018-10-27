

import axios from 'axios';
import {
  Toast
} from 'antd-mobile';

console.log(process.env.NODE_ENV)
// 根据运行的环境变量来判断是不是开发模式
const isDev = process.env.NODE_ENV === 'development';
// 创建一个实例，在里面配置baseURL,方便后面的时候不需要再写一长串公共的URL
const ajax = axios.create({
  baseURL:  isDev ? 'http://rap2api.taobao.org/app/mock/85095' : '你真实的线上地址'
});

// 拦截请求，在请求发送之前显示一个Toast
ajax.interceptors.request.use((config) => {
  Toast.loading('加载中……', 0); // 传0 不会自动消失
  return config;
});

// 拦截响应，在响应之后隐藏Toast
ajax.interceptors.response.use((resp) => {
  setTimeout(()=>{
    Toast.hide();  
  },500)
 // 手动配置隐藏Toast
  return resp;
});


// 获取Fac商品列表
export const Faclist = ({offset, limited}) => {
  return ajax.get(`api/tyx?offset=${offset}&limited=${limited}`)
}

