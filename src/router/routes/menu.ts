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
const routeComponents : AppRouteRecordRaw[] = [
    {
        path:"/demo",
        name:"demo",
            
        meta:{
            title:"案例演示",
            icon:"el-icon-s-grid"
        },
        children:[
            {
                path:"/demo/gaode3D",
                name:"gaode3D",
                meta:{
                    title:"3D 高德 地球",
                   
                },
                component: () => import('/@/components/cesium/gaodeMaps.vue'),
            },
            {
                path:"/demo/BingMaps",
                name:"BingMaps",
                meta:{
                    title:"3D BingMaps 地球",
                   
                },
                component: () => import('/@/components/cesium/BingMaps.vue'),
            },
            {
                path:"/demo/mapDemo1",
                name:"mapDemo1",
                meta:{
                    title:"中国地图事件统计",
                   
                },
                component: () => import('/@/components/echarts/mapDemo1.vue'),
            },
            {
                path:"/demo/mapDemo2",
                name:"mapDemo2",
                meta:{
                    title:"中国地图市场统计图",
                },
                component: () => import('/@/components/echarts/mapDemo2.vue'),
            }
        ]
    },
    {
        path:"/components",
        name:"components",
            
        meta:{
            title:"组件库",
            icon:"el-icon-s-grid"
        },
        children:[
            {
                path:"/components/bingMaps",
                name:"bingMapsComponents",
                meta:{
                    title:"bingMaps地图",
                   
                },
                component: () => import('/@/views/component/map/bingMaps.vue'),
            },
            {
                path:"/components/AutoNaviMap",
                name:"AutoNaviMapComponents",
                meta:{
                    title:"高德地图",
                   
                },
                component: () => import('/@/views/component/map/AutoNaviMap.vue'),
            },
            {
                path:"/components/SelectsArea",
                name:"SelectsAreaComponents",
                meta:{
                    title:"区域选择器",
                },
                component: () => import('/@/views/component/SelectsArea.vue'),
            },
            {
                path:"/components/vueCropper",
                name:"vueCropperComponents",
                meta:{
                    title:"图片裁剪",
                },
                component: () => import('/@/views/component/vueCropper.vue'),
            },
        ]
    },
    {
        path:"/data",
        name:"data",
            
        meta:{
            title:"数据库",
            icon:"el-icon-s-grid"
        },
        component: () => import('/@/views/component/datas.vue'),
    }
]
const routeMenuList: AppRouteRecordRaw[] = [
   
    dashboard,
    ...routeComponents,
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
                component: () => import('/@/views/sys/menu/menu.vue'),
            },
            {
                path:"/system/dept",
                name:"systemDept",
                meta:{
                    title:"部门管理",
                   
                },
                component: () => import('/@/views/sys/dept/dept.vue'),
            },
            {
                path:"/system/changePassword",
                name:"systemChangePassword",
                meta:{
                    title:"修改密码",
                   
                },
                component: () => import('/@/views/sys/changePassword/changePassword.vue'),
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