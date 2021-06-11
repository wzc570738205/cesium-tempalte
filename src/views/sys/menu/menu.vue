<template>
  <div class="">
      <!-- 搜索 start -->
      <div class="  searchMenuBox white-bg">
        <MenuSearch />
      </div>
      <!-- 搜索 end-->
      <!-- 菜单表格 start-->
      <div class="tableMenuBox ">
          <MenuTable />
      </div>
      <!-- 菜单表格 end-->

  </div>
</template>

<script setup lang="ts">
import {ref,reactive,getCurrentInstance,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router';
import MenuSearch from '/@/views/sys/menu/menuSearch.vue';
import MenuTable from '/@/views/sys/menu/menuTable.vue';
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

 const state = reactive({
     formSearch:{
         region:"",
         user:""
     }
 })

 /**
  * 搜索关键词
  */
const searchMenu = () =>{
    console.log('state.formSearch :>> ', state.formSearch);
}

</script>

<style  scoped lang="scss" >
.searchMenuBox{
  margin: 20px;
  padding-top: 20px;
}
.tableMenuBox{
  padding: 20px;
 width: 100px;
   min-width: calc(100% - 0px);
  max-width: calc(100% - 0px);
 
}
</style>
