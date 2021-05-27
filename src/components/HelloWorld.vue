<template>
{{$store.state.loginModule.permissionList.length}}
  <h1><a href="">{{ count }}</a></h1>
  <h1>{{state.data.a}}</h1>
  <button @click="count++">count ++</button>
</template>

<script setup>
import {ref,defineProps,reactive,watch } from 'vue';
import {helloLog} from '/@/hooks/hello'
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
 let obj = {
   a:3,
   b:2
 }
 let objProxy = new Proxy(obj,{
   get(target,key){
     return target[key]
   }
 })
 objProxy.a=2;
 console.log('obj :>> ', obj);
  console.log('objProxy :>> ', objProxy);
 defineProps({
  msg:  {
      type: String,
      required: true
    }
})
watch(count,(e)=>{
console.log('count变化了:>> ', e);
})
function name(params) {
  console.log('原始html用法 ',helloLog());
}
// 
</script>

<style  scoped lang="scss" >
h1{
  a {
  color: #42b983;
}
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
