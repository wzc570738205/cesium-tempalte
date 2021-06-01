<template>
  <div class="w100 h100">
    <div class="aic w100 h100">
      <div class="h100">
        <LltMenu :isCollapse="isCollapse" />
      </div>
      <div
        :class="
          isCollapse ? 'menu-logo-collapse-true' : 'menu-logo-collapse-false'
        "
        class="aic fdc w100 h100"
      >
        <LltHeader @handleCollapse="handleCollapse"  :isCollapse="isCollapse"/>
        <div class="llt-layouts-body">
           <RouterView />
        </div>
      </div>
    </div>
   
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance, onMounted, toRef, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import LltMenu from "/@/layouts/components/menu.vue";
import LltHeader from "/@/layouts/components/header.vue";
const internalInstance = getCurrentInstance(); //获取当前实例
// const route = internalInstance?.appContext.config.globalProperties.$route;
const router = useRouter();
const route = useRoute();
onMounted(() => {});
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
let isCollapse = ref(false);
const state = reactive({
  data: { a: 1 },
  isCollapse:false
});
const handleCollapse = (e:boolean)=>{
  isCollapse.value=!e;
}
</script>

<style  scoped lang="scss" >
.menu-logo-collapse-true,.menu-logo-collapse-false {
  min-width: 691px;
}
.menu-logo-collapse-true {
  margin-left: 65px;
}
.menu-logo-collapse-false {
  margin-left: 200px;
}

.llt-layouts-body{
  width: 100%;
  
 height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #F0F2F5;
}
</style>
