<template>
<!-- tablecommon -->
  <div class="commonBoxmp white-bg">
   123
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router'
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
 })


</script>

<style  scoped lang="scss" >

</style>
