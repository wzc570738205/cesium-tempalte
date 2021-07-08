<template>
  <div class="h100 llt-menu-box">

    <el-menu
      :collapse-transition="true"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      :default-active="$store.state.menuActiveName"
      @close="handleClose"
      @select="handleSelect"
      :background-color="$store.state.themeCurrentMenuItem.ColorBg"
      :collapse="isCollapse"
    >
        <!-- 缩小 -->
    <div v-show="isCollapse" 
      :style="{
          background:$store.state.isFull?'var(--navColorBg)':$store.state.themeCurrentMenuItem.ColorBg
          }"
     class="menu-logo-box-icon  aic jcc">
      <img src="/src/assets/svg/login-box-bg.svg" alt="">
    </div>
    <!--放大 -->
    <div v-show="!isCollapse"
     class="menu-logo-box  aic jcc"
    :style="{
          background:$store.state.isFull?'var(--navColorBg)':$store.state.themeCurrentMenuItem.ColorBg
          }"
    >
        <img src="/src/assets/svg/login-box-bg.svg" alt="">
        <div class=""
     
          :style="{
          color:$store.state.isFull?'var(--navColorFont)':$store.state.themeCurrentMenuItem.ColorFont
          }">
          {{$store.state.projectName}}
        </div>
    </div>
    <div v-show="isCollapse" class="menu-logo-hidden-box " ></div>
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
const handleOpen = (key: string, keyPath: Array<string>) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: Array<string>) => {
  // console.log(key, keyPath);
};
const handleSelect = (key: string, keyPath: Array<string>) => {
  // console.log(key, keyPath);
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
.menu-logo-hidden-box{
  height: 54px;
}
.menu-logo-box-icon,.menu-logo-box {
  position: fixed;
top: 0;left: 0;z-index: 2;
  width: 64px;
  height: 54px;
   img{
    width: 45px;
  }
}

.menu-logo-box {
  height: 54px;
  width: 200px;
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
  position: fixed;
  left: 0;
  top: 0;
}
.el-menu-vertical-demo {
  height: 100%;
  overflow-y: auto;
  position: relative;

  overflow-x: hidden;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px; 
    min-height: 400px;
  }
// 选中菜单
.el-submenu__title {
  color: #fff !important;
     
}
.el-menu-item {
  color: #b7bdc3;
}


 .el-menu--collapse .el-submenu .el-submenu__title span{
 height: 0  ;
    width: 0  ;
    overflow: hidden  ;
    visibility: hidden;
    display: inline-block  ;
}
</style>
