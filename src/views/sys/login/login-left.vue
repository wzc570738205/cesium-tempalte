<template>
  <div class="login-left animate__animated animate__bounceInLeft">
       <h1 class="white hidden-md-and-down login-box-title">element-plus+vite+ts+script setup语法糖</h1>
       <div class="fdc jcc login-left-readme hidden-md-and-down ">
           <img class="login-box-bg   " src="/src/assets/svg/login-box-bg.svg" alt="">
          <div class="white mt60 first">
              本产项目用于案例模板、教学规范
          </div>
            <div class="white mt30 secound">
             提供纯洁的教学案例也可以用于实战
          </div>
       </div>
  </div>
</template>

<script setup lang="ts">
import {ref,defineProps,reactive,getCurrentInstance } from 'vue';
    const internalInstance = getCurrentInstance();//获取当前实例
    const route = internalInstance?.appContext.config.globalProperties.$route;

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

 defineProps({
  msg:  {
      type: String,
      required: true
    }
})

</script>

<style  scoped lang="scss" >
.login-left-readme{
   margin-top: 300px;
     line-height: 1rem;
     margin-left: 60px;
   .first{
       font-size: 26px;
       margin-top:70px ;
   }
   .secound{
       font-size: 16px;
     
   }
}
.login-box-bg{
    width: 42%;
}
.login-box-title{
    position: relative;
    width: 100%;
    top: 50px;left: 60px;
}
</style>
