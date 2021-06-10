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
            component: () => import('/@/views/dashboard/analysis/analysis.vue'),
        },
        {
            path:"/dashboard/workbench",
            name:"dashboardWorkbench",
            meta:{
                title:"工作台",
               
            },
            component: () => import('/@/views/dashboard/workbench/workbench.vue'),
        }
    ]
};
const routeMenuList: AppRouteRecordRaw[] = [
    dashboard,
   
    {
        path:"/system",
        name:"system",
        meta:{
            title:"系统管理",
            icon:"el-icon-s-tools"
        },
        children:[
            {
                path:"/system/account",
                name:"systemAccount",
                meta:{
                    title:"账号管理",
                   
                },
                component: () => import('/@/views/sys/account/account.vue'),
            },
            {
                path:"/system/role",
                name:"systemRole",
                meta:{
                    title:"角色管理",
                   
                },
                component: () => import('/@/views/sys/role/role.vue'),
            },
            {
                path:"/system/menu",
                name:"systemMenu",
                meta:{
                    title:"菜单管理",
                   
                },
                component: () => import('/@/views/sys/account/account.vue'),
            },
            {
                path:"/system/dept",
                name:"systemDept",
                meta:{
                    title:"部门管理",
                   
                },
                component: () => import('/@/views/sys/account/account.vue'),
            },
            {
                path:"/system/changePassword",
                name:"systemChangePassword",
                meta:{
                    title:"修改密码",
                   
                },
                component: () => import('/@/views/sys/account/account.vue'),
            }
        ]
    },
    {
        path:"/README",
        name:"README",
        meta:{
            title:"关于",
            icon:"el-icon-s-custom"
        },
        component: () => import('/@/views/readme/readme.vue'),
    },
];
export default routeMenuList