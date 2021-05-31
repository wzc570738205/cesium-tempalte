<template>
  <div class="w100 h100">

  <div class="aic">
    <div class="h100 ">
        <LltMenu :isCollapse="isCollapse"/>
    </div>
     <div :class="isCollapse?'menu-logo-collapse-true':'menu-logo-collapse-false'">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
    </div>
  </div>
  <!-- <RouterView /> -->
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,getCurrentInstance,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router'
import LltMenu from '/@/layouts/components/menu.vue'
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
 const isCollapse =ref(true);
 const state = reactive({
   data:{a:1}
 })


</script>

<style  scoped lang="scss" >
.left{
   transition: all 0.3s;
}
.menu-logo-collapse-true{
  margin-left: 64px;
    transition: all 0.3s;
}
.menu-logo-collapse-false{
  margin-left: 206px;
    transition: all 0.3s ;
}

</style>
