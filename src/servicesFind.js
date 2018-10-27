
import axios from 'axios';
import {
  Toast
} from 'antd-mobile';

// 根据运行的环境变量来判断是不是开发模式
const isDev = process.env.NODE_ENV === 'development';
// 创建一个实例，在里面配置baseURL,方便后面的时候不需要再写一长串公共的URL
const ajax = axios.create({
  baseURL:  isDev ? 'http://rap2api.taobao.org/app/mock/data' : '你真实的线上地址'
});

// 拦截请求，在请求发送之前显示一个Toast
ajax.interceptors.request.use((config) => {
  Toast.loading('加载中……', 0);
  return config;
});

// 拦截响应，在响应之后隐藏Toast
ajax.interceptors.response.use((resp) => {
  Toast.hide();
  return resp;
});

// 获取首页的option图片的方法
export const getOption = () => {
  return ajax.get("/432700")
}

// 获取首页的content图片的方法
export const getContent = () => {
  return ajax.get("/432875")
}
// 获取option的详情页
export const getOptionDetails = ({offset, limited}) => {
  return ajax.get(`/432700?offset=${offset}&limited=${limited}`)
}
// 获取Content的详情页
export const getContentDetails = ({offset, limited}) => {
  return ajax.get(`/432875?offset=${offset}&limited=${limited}`)
}