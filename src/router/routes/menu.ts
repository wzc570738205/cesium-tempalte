import { AppRouteModule, AppRouteRecordRaw } from "/@ts/router/types";
// component: () => import('/@/layouts/index.vue'),
export const dashboard =  {
    path:"/dashboard",
    name:"dashboard",
    meta:{
        title:"仪表盘",
        icon:"el-icon-menu"
    },
    children:[
        {
            path:"/dashboard/analysis",
            name:"dashboardAnalysis",
            meta:{
                title:"分析页",
               
            },
            component: () => import('/@/views/sys/dashboard/analysis/analysis.vue'),
        },
        {
            path:"/dashboard/workbench",
            name:"dashboardWorkbench",
            meta:{
                title:"工作台",
               
            },
            component: () => import('/@/views/sys/dashboard/workbench/workbench.vue'),
        }
    ]
};
const routeMenuList: AppRouteRecordRaw[] = [
    dashboard,
    {
        path:"/README",
        name:"README",
        meta:{
            title:"关于",
            icon:"el-icon-s-custom"
        },
        component: () => import('/@/views/sys/readme/readme.vue'),
    }
];
export default routeMenuList