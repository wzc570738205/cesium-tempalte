import  { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import {store} from '/@ts/store';
import { FilterRouterArr, LOGIN } from '/@ts/router/constant';
import { basicRoutes } from '/@ts/router/routes';
import routeMenuList from '/@ts/router/routes/menu';
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
router.afterEach((to,from)=>{
  let name = to.name
  let routerItme=[]
  for (let index = 0; index < routeMenuList.length; index++) {
    const element = routeMenuList[index];
    if(element.name == name){
      routerItme.push(element)
    }else if(element.children){
     let a = element.children.filter(res=>res.name==name)
     if(a.length!=0){
      routerItme.push(element)
      routerItme.push(a[0])
     }
    }
  }
  store.commit('setBreadcrumbList',routerItme)

})
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
