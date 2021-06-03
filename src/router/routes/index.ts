

import LoginRoute from '/@ts/router/routes/login';
import { ROOT_PAGE_NAME } from '/@ts/router/constant';
import routeMenuList from '/@ts/router/routes/menu';
import { AppRouteModule } from "/@ts/router/types";
import {store} from '/@ts/store';
const modules = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: AppRouteModule[] = [];
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});
// 
let formatRouteMenuList:AppRouteModule[]=[]
 for (let index = 0; index < routeMenuList.length; index++) {
   const element:AppRouteModule = routeMenuList[index];
   if(element.children) formatRouteMenuList =formatRouteMenuList.concat(element.children)
   else formatRouteMenuList.push(element)
 }
export const menuRouter = formatRouteMenuList;
const root: AppRouteModule = {
  path: '/',
  name: ROOT_PAGE_NAME,
  meta: {
    title: "首页",
  },
  component: () => import('/@/layouts/index.vue'),
  children:formatRouteMenuList
};
// routeModuleList.push(root)
export const basicRoutes:AppRouteModule[] =[root,LoginRoute];