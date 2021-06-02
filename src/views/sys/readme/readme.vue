<template>
  <div class="w100 h100">
    <div class="white-bg p20">
        <h2>关于</h2>
        <p class="readme-content">
          <el-link type="primary">{{$store.state.projectName}}</el-link>    是基于vite + ts + vue3.0 + script setup语法糖 + element-plus的后台解决方案，
          基于MIT开源协议。原则上不会限制任何代码用于商用。
         </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,getCurrentInstance,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router'
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
   data:{a:1}
 })


</script>

<style  scoped lang="scss" >
.readme-content{
    margin-top: 10px;
    line-height: 2.5rem;
}
</style>
