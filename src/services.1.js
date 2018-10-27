
import axios from 'axios';
import {
  Toast
} from 'antd-mobile';

console.log(process.env.NODE_ENV)
// 根据运行的环境变量来判断是不是开发模式
const isDev = process.env.NODE_ENV === 'development';
// 创建一个实例，在里面配置baseURL,方便后面的时候不需要再写一长串公共的URL
const ajax = axios.create({
  baseURL:  isDev ? 'http://rap2api.taobao.org/app/mock/25330/' : '你真实的线上地址'
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

// 获取首页的swiper图片的方法
export const getSwiper = () => {
  return ajax.get('api/v3/details')
}

// // 获取商品列表
// export const getGoodsList = ({offset, limited}) => {
//   return ajax.get(`/api/v2/goods?offset=${offset}&limited=${limited}`)
// }

// export const getProductDetail = (id) => {
//   return ajax.get(`/api/v2/goodDetail/${id}`)
// }

getDetails(
      
)
.then(resp =>{
  console.log(resp)
})


// 获取首页的swiper图片的方法
export const getDetails = (id) => {
  return ajax.get(`api/v3/details/${id}`)
}