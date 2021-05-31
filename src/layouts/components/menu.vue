<template>
  <div class="h100 llt-menu-box">
    <!-- 缩小 -->
    <div v-show="isCollapse" class="menu-logo-box-icon">icon</div>
    <!-- 缩小 -->
    <div v-show="!isCollapse" class="menu-logo-box">展开了</div>
    <div v-show="!isCollapse" class="menu-logo-hidden-box"></div>
    <el-menu
      :collapse-transition="false"
      default-active="1-4-1"
      class="el-menu-vertical-demo scroll-style"
      @open="handleOpen"
      @close="handleClose"
      background-color="#001529"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="11">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="111">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="1111">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="11111">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <template #title>导航四5</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <template #title>导航四5</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <template #title>导航四5</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, reactive, getCurrentInstance } from "vue";
const internalInstance = getCurrentInstance(); //获取当前实例
const route = internalInstance?.appContext.config.globalProperties.$route;

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
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: Array<string>) => {
  console.log(key, keyPath);
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
  border-bottom: 1px solid #fff;
  color: #fff;
}
.menu-logo-box {
}
.menu-logo-box {
  height: 80px;
  background-color: #c48;
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
