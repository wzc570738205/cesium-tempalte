<template>
  <div>
      <HelloWorld/>
  </div>
</template>

<script setup>
import {ref,defineProps,reactive,getCurrentInstance } from 'vue';
    const internalInstance = getCurrentInstance();//获取当前实例
    const route = internalInstance?.appContext.config.globalProperties.$route;
import HelloWorld from '/@/components/HelloWorld.vue'
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

</style>
