<template>
  <div class="w100 h100" >
    <div class="aic  h100">
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
          <router-view v-slot="{ Component }">
          <transition v-if="!$store.state.refresh" name="list" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance, onMounted, toRef, toRefs, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import LltMenu from "/@/layouts/components/menu.vue";
import LltHeader from "/@/layouts/components/header.vue";
import {store} from '/@ts/store';
import initTheme from '/@ts/hooks/theme';

 onBeforeMount(()=>{
  console.log('"object" :>> ', "页面刷新了");
  initTheme()
 })
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
  margin-left: 64px;
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
// 路由切换动画
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

