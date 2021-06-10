<template>
  <div>
      <!-- 搜索 start -->
      <div class="  searchRoleBox white-bg">
        <RoleSearch />
      </div>
      <!-- 搜索 end-->
      <!-- 角色表格 start-->
      <div class="tableRoleBox">
          <RoleTable />
      </div>
      <!-- 角色表格 end-->
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,getCurrentInstance,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router';
import RoleSearch from '/@/views/sys/role/roleSearch.vue';
import RoleTable from '/@/views/sys/role/roleTable.vue';
import type { LltColumn } from './column'
import column from './column'
    const internalInstance = getCurrentInstance();//获取当前实例
    // const route = internalInstance?.appContext.config.globalProperties.$route;
   const router = useRouter()
   const route = useRoute()
    onMounted(()=>{
    })
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
 const count =ref(0);
 const state = reactive({
     formSearch:{
         region:"",
         user:""
     }
 })
const searchRole = () =>{
    console.log('state.formSearch :>> ', state.formSearch);
}

</script>

<style  scoped lang="scss" >
.searchRoleBox{
  margin: 20px;
  padding-top: 20px;
}
.tableRoleBox{
      margin: 20px;
}
</style>
