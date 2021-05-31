import { RouteRecordRaw } from "vue-router";

// component: () => import('/@/layouts/index.vue'),
const routeMenuList: RouteRecordRaw[] = [
    {
        path:"/dashboard/analysis",
        name:"dashboardAnalysis",
        meta:{
            title:"分析页"
        },
        component: () => import('/@/views/sys/dashboard/analysis.vue'),
    }
];
export default routeMenuList