import { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import { store } from '/@ts/store';
import { FilterRouterArr, LOGIN, ROOT_PAGE_NAME } from '/@ts/router/constant';
import { basicRoutes } from '/@ts/router/routes';
import routeMenuList from '/@ts/router/routes/menu';
import { menuRouter } from "/@ts/router/routes";
import { ElMessage } from 'element-plus'
/**
 * 创建路由实例
 */
export const router = createRouter({
  history: createWebHashHistory(),
  routes: (basicRoutes as unknown) as RouteRecordRaw[]
});
/**
 * 路由拦截 LoginState
 */
const getFilterRouterName = (name: string): boolean => FilterRouterArr.includes(name);
router.afterEach((to, from) => {
  let name = to.name
  let routerItme = []
  /**
   * 获取面包屑数据
   */
  for (let index = 0; index < routeMenuList.length; index++) {
    const element = routeMenuList[index];
    if (element.name == name) {
      routerItme.push(element)
      break;
    } else if (element.children) {
      let a = element.children.filter(res => res.name == name)
      if (a.length != 0) {
        routerItme.push(element)
        routerItme.push(a[0])
        break;
      }
    }
  }
  store.commit('setBreadcrumbList', routerItme)//更新面包屑
  store.commit('setMenuActiveName', name)//激活菜单
  menuRouter.forEach(element => {
    if (element.name == name) {
      store.commit('setTagPages', element);//更新tab标签页
    }
  });
})
router.beforeEach((to, from, next) => {
  store.commit('loginModule/isLogin')
  const isloginPage: boolean = getFilterRouterName((to.name as string));
  let state: any = store.state
  if (to.matched.length === 0) {
    ElMessage.warning("当前路由不存在");
    next({ name: ROOT_PAGE_NAME })
  }
  if (isloginPage || state.loginModule.isLogin) {
    next()
  }
  else {
    next({ name: LOGIN })
  }
})
/**
 * 挂载到vue实例函数
 * @param app vue实例
 */
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
