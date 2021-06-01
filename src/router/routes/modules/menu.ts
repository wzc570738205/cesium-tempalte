import { RouteRecordRaw } from "vue-router";
const routeMenuList:RouteRecordRaw[] =[
    {
        path: '/dashboard/analysis',
        name: "dashboardAnalysis",
        component: () => import('/@/views/sys/dashboard/analysis.vue'),
        meta: {
          title: "分析页",
        }
      }
];
export default routeMenuList;