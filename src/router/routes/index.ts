

import { RouteRecordRaw } from 'vue-router';
import { ROOT_PAGE_NAME } from '../constant';
import btn from './modules/btn';
import LoginRoute from './modules/login';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  // console.log('mod :>> ', mod);
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});
// 
const root: RouteRecordRaw = {
  path: '/',
  name: ROOT_PAGE_NAME,
  meta: {
    title: "首页",
  },
  redirect:"/btn",
};
routeModuleList.push(root)
export const basicRoutes:RouteRecordRaw[] =routeModuleList;