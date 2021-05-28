import  { App,getCurrentInstance } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import {store} from '../store';
import { LoginState } from '../store/modules/login';
import { FilterRouterArr, LOGIN } from './constant';
import { basicRoutes } from './routes';
/**
 * 创建路由实例
 */
export const router = createRouter({
    history:createWebHashHistory(),
    routes:(basicRoutes as unknown) as RouteRecordRaw[]
});
/**
 * 路由拦截 LoginState
 */
const getFilterRouterName=(name:string):boolean=>FilterRouterArr.includes(name);
// router.beforeEach((to,from,next)=>{
//   store.commit('loginModule/isLogin')
//   const isloginPage:boolean = getFilterRouterName((to.name as string));
//   let  state:any = store.state
//   if(isloginPage||state.loginModule.isLogin){
//     next()
//   }else{
//     next({name:LOGIN})
//   }
// })
/**
 * 挂载到vue实例函数
 * @param app vue实例
 */
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
