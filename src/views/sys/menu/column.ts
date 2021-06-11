export default [
        
    {
        label:"图标",
        prop:"icon",
        render:true
    },
    {
        label:"名字",
        prop:"name",
    },
    {
        label:"路由名字",
        prop:"routerName",
    },
    {
        label:"路径",
        prop:"addressName",
    },

]

export interface LltColumn {
    label:string,
    prop:string,
    show:boolean
}