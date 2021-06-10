export default [
    {
        label:"时间",
        prop:"date",
    },
    {
        label:"昵称",
        prop:"name",
    },
    {
        label:"状态",
        prop:"name",
        render:true
    },
    
    {
        label:"地址",
        prop:"address",
    },
]

export interface LltColumn {
    label:string,
    prop:string,
    show:boolean
}