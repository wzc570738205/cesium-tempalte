export default [
    {
        label:"创建时间",
        prop:"create_start",
    },
    {
        label:"部门名称",
        prop:"deptName",
        
    },
    {
        label:"状态",
        prop:"status",
        render:true
    },
  
    {
        label:"备注",
        prop:"remark",
    },
   

]

export interface LltColumn {
    label:string,
    prop:string,
    show:boolean
}