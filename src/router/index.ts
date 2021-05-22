import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoutes } from './routes';

// app router
//   history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
//   strict: true,
//   scrollBehavior: () => ({ left: 0, top: 0 })
// app router
export const router = createRouter({
    history:createWebHashHistory(),
    routes:(basicRoutes as unknown) as RouteRecordRaw[]
});


// // config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
