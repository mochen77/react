import {
    Find,
    Flower,
    Factory,
    Mine,
    Details,

    FindDetail
  } from './pages';

  import Fac_route from './pages/Factory/Fac_route'

  
  const routes = [
    {
      component: Find,
      path: '/find',
      text: '发现',
      icon: 'find-normal',
      activeIcon: 'find-active',
      isShowTabbar : true,
      isTabbarItem: true
    }, {
      component: Flower,
      path: '/flower',
      text: '手工圈',
      icon: 'flower-normal',
      activeIcon: 'flower-active',
      isShowTabbar : true,
      isTabbarItem: true
    }, {
      component: Factory,
      path: '/factory',
      text: '特训营',
      icon: 'factory-normal',
      activeIcon: 'factory-active',
      isShowTabbar : true,
      isTabbarItem: true
    }, {
      component: Mine,
      path: '/mine',
      text: '我的',
      icon: 'mine-normal',
      activeIcon: 'mine-active',
      isShowTabbar : true,
      isTabbarItem: true
    },
    {
      component: Details,
      path: '/details/:id/:type'
    },{   //不要删这个
      component: Fac_route,
      path: '/fac/:id',
      text: '特训营详情',
      // isTabbarItem: true
    }, {
      component: FindDetail,
      path: '/finddetail/:id',
      text: '详情',
      icon: 'mine-normal',
      activeIcon: 'mine-active'
    } 
  ]
  
  export default routes;