<template>
  <div class="h100 w100" >
    <!-- 大屏 start -->
    <div class="h100 w100 hidden-md-and-down">
        <div class="login-bg ">
        <div class="zIndex-2 login-box mxauto container aic">
          <div class="flex1">
            <loginLeft />
          </div>
          <div class="flex1 ">
            <loginRight />
          </div>
        </div>
      </div>
    </div>
      <!-- 大屏 end -->
      <!-- 小屏 start-->
       <div class="flex1  small-bg h100 w100 hidden-md-and-up1">
         <div  class="positionCenterTop ">
 <h1 class="white  login-box-title text-center animate__animated animate__bounceInRight">element-plus+vite+ts+script setup语法糖</h1>
            <loginRight />
         </div>
       </div>
      <!-- 小屏 end -->
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, getCurrentInstance, onMounted } from "vue";
import { key } from "/@ts/store/index";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import loginLeft from "/@/views/sys/login/login-left.vue";
import loginRight from "/@/views/sys/login//login-right.vue";
const internalInstance = getCurrentInstance(); //获取当前实例
// const route = internalInstance?.appContext.config.globalProperties.$route;
const router = useRouter();
const route = useRoute();
const store = useStore(key);
onMounted(() => {});
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const count = ref(0);
const state = reactive({
  data: { a: 1 },
});
</script>

<style  scoped lang="scss" >
.login-bg {
  position: relative;
  width: 100%;
  height: 100%;
}
.login-box {
  padding:0.5rem  2.5rem;
}
.login-bg::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: -48%;
  background-image: url("/src/assets/svg/login-bg.svg");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  content: "";
}
.zIndex-2 {
  z-index: 2;
  position: relative;
}
.small-bg{
  background-color: #293146;
}

</style>
