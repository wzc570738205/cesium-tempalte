<template>
  <div class="fd layouts">
    <div class="h100 hidden-md-and-down layouts-left">
      <LltMenu :isCollapse="isCollapse" />
    </div>
    <div class="layouts-right">
      <!-- <div
        :class="
          isCollapse ? 'menu-logo-collapse-true' : 'menu-logo-collapse-false'
        "
        class="hidden-md-and-down w100"
      ></div> -->
      <!-- <div class="aic fdc w100 h100 white-bg">
        
      </div> -->
      <LltHeader @handleCollapse="handleCollapse" :isCollapse="isCollapse" />
      <div class="llt-layouts-body">
        <!-- <transition v-if="!$store.state.refresh" name="list" mode="out-in">
               <router-view />
            </transition> -->
        <router-view v-slot="{ Component }">
          <template v-if="Component">
            <transition name="list" mode="out-in">
              <keep-alive>
                <suspense>
                  <component :is="Component"></component>
                  <template #fallback>
                    <div>Loading...</div>
                  </template>
                </suspense>
              </keep-alive>
            </transition>
          </template>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  getCurrentInstance,
  onMounted,
  toRef,
  toRefs,
  onBeforeMount,
  watch,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import LltMenu from "/@/layouts/components/menu.vue";
import LltHeader from "/@/layouts/components/header.vue";
import { store } from "/@ts/store";
import initTheme from "/@ts/hooks/theme";

onBeforeMount(() => {
  initTheme();
});
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

var isCollapse = ref(false);
const state = reactive({
  data: { a: 1 },
});
const handleCollapse = (e: boolean) => {
  isCollapse.value = !e;
};
</script>

<style scoped lang="scss">
.layouts {
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
}
.layouts-right {
  flex: 1;
  height: 100%;
}
.layouts-left {
  // flex-basis: 200px;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  max-width: 200px;
}

// .menu-logo-collapse-true {
//   min-width: 64px;
//   max-width: 64px;

// }
// .menu-logo-collapse-false {
//   min-width: 200px;
//   max-width: 200px;
// }

.llt-layouts-body {
  height: calc(100% - 95px);
  overflow-y: auto;
  background-color: #f0f2f5;
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
