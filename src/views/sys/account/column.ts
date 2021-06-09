export default [
    {
        label:"时间",
        prop:"date",
        show:true
    },
    {
        label:"昵称",
        prop:"name",
        show:true
    },
    {
        label:"地址",
        prop:"address",
        show:true
    },
]

export interface LltColumn {
    label:string,
    prop:string,
    show:boolean
}