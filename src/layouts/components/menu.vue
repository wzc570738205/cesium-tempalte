<template>
  <div class="h100 llt-menu-box">
    <!-- 缩小 -->
    <div v-show="isCollapse"  class="menu-logo-box-icon  aic jcc">
      <img src="/src/assets/svg/login-box-bg.svg" alt="">
    </div>
    <!-- 缩小 -->
    <div v-show="!isCollapse" class="menu-logo-box  aic jcc">
        <img src="/src/assets/svg/login-box-bg.svg" alt="">
        <div class="">
          {{$store.state.projectName}}
        </div>
    </div>
    <div v-show="!isCollapse" class="menu-logo-hidden-box " ></div>
    <el-menu
      :collapse-transition="false"
      class="el-menu-vertical-demo scroll-style"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      background-color="#001529"
      :collapse="isCollapse"
    >
    <div
     v-for="(item,index) in routeMenuList"
     :key="index"
    >
       <el-submenu :index="item.name"
       v-if="item.children"
       >
        <template #title>
            <i :class="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
        </template>
         
        <el-menu-item
            v-for="(childrenItem,childrenIndex) in item.children"
     :key="childrenIndex"
         :index="childrenItem.name">{{childrenItem.meta.title}}</el-menu-item>
       
      </el-submenu>
        <el-menu-item v-else
         
         :index="item.name">
         
          <i :class="item.meta.icon"></i>
        <template #title>  {{item.meta.title}}</template>
       </el-menu-item>
    </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, reactive, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { menuRouter } from "/@ts/router/routes";
import routeMenuList from '/@ts/router/routes/menu';
  const router = useRouter()
   const route = useRoute()
// const internalInstance = getCurrentInstance(); //获取当前实例
// const route = internalInstance?.appContext.config.globalProperties.$route;

/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const activeIndex = ref(0);
const state = reactive({
  data: { a: 1 },
});
console.log('menuRouter :>> ', menuRouter);
const handleOpen = (key: string, keyPath: Array<string>) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: Array<string>) => {
  console.log(key, keyPath);
};
const handleSelect = (key: string, keyPath: Array<string>) => {
  console.log(key, keyPath);
  router.push({name:key})
};

defineProps({
  isCollapse: {
    type: Boolean,
    required: true,
  },
});
</script>

<style   lang="scss" >
.menu-logo-box-icon {
  width: 64px;
  height: 64px;
  background-color: #001529;
  color: #fff;
   img{
    width: 45px;
  }
}

.menu-logo-box {
  height: 54px;
  background-color: #001529;
 
  img{
    width: 45px;
  }
  div{
    font-size: 22px;
    color: #fff;
    font-weight: bold;
    margin-left: 15px;
  }
}
.el-menu {
  border: none;
}
.llt-menu-box {
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
	 
}

.el-menu-vertical-demo {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
// 选中菜单
.el-submenu__title {
  color: #fff !important;
}
.el-menu-item {
  color: #b7bdc3;
}
.el-menu-item:hover {
  color: #fff;
  background-color: rgba($color: #006fe6, $alpha: 0.6) !important;
}
.el-menu-item.is-active {
  color: #fff;
  background-color: #006fe6 !important;
}
</style>
