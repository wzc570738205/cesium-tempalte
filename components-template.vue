<template>
  <div>
  </div>
</template>

<script setup lang="ts">
import {ref,defineProps,reactive,defineEmits, onMounted } from 'vue';
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/

 const state = reactive({
 })

 defineProps({
  msg:  {
      type: String,
      required: true
    }
})

</script>

<style  scoped lang="scss" >

</style>
