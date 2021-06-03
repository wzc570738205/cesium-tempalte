<template>
  <div class="llt-header w100">
    <div class="aic jcb top w100">
      <!-- 一级导航左边 start -->
      <div class="aic">
        <div class="" @click="handleCollapse">
          <i v-show="!isCollapse" class="el-icon-s-fold llt-icon-size p10"></i>
          <i
            v-show="isCollapse"
            class="el-icon-s-unfold llt-icon-size p10"
          ></i>
        </div>
        <div class="mx15">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
            <el-breadcrumb-item
            v-for="(item,index) in $store.state.BreadcrumbList" :key="index">
            {{item.meta.title}}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <!-- 一级导航左边 end -->
      <!-- 二级导航左边 start -->
      <div class="aic">
        <div class="">
          <el-tooltip
            class="item"
            effect="dark"
            content="搜索菜单"
            placement="bottom"
          >
            <i class="el-icon-search llt-icon-size p10"></i>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="消息"
            placement="bottom"
          >
            <i class="el-icon-bell llt-icon-size p10 positionRelat">
              <div class="llt-badge"></div>
            </i>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            :content="!isFullscreen?'全屏':'退出全屏'"
            placement="bottom"
          >
            <i @click="toggle" v-if="!isFullscreen"  class="el-icon-full-screen llt-icon-size p10"></i>
            <i @click="toggle" v-else class="el-icon-rank llt-icon-size p10"></i>
          </el-tooltip>
        </div>
        <el-dropdown trigger="hover" :show-timeout="0" class="mx15 cP">
          <span class="el-dropdown-link">
            <div class="aic">
              <el-avatar
                size="small"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <div class="llt-default-font-color mx15">刘蓝天</div>
            </div>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-s-custom">个人中心</el-dropdown-item>
              <el-dropdown-item icon="el-icon-s-release" divided>退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-tooltip
          class="item"
          effect="dark"
          content="主题配置"
          placement="bottom"
        >
          <i  class="el-icon-setting llt-icon-size p10"></i>
        </el-tooltip>
      </div>
      <!-- 二级导航左边 end -->
    </div>
    <!-- 上下分割线 -->
    <div class="bottom w100 jcb aic">
         <LltTags
         @handleClose="handleClose"
         @handleOpen="handleOpen"
          :currentTag="$store.state.currentTag" :tagsData="$store.state.tagPages" />
          <div class="aic">
          <el-tooltip
              class="item"
              effect="dark"
              content="刷新页面"
              placement="bottom"
            >
              <i class="el-icon-refresh llt-icon-size p10"></i>
            </el-tooltip>
          </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  ref,
  defineProps,
  reactive,
  getCurrentInstance,
  useContext,
  watch,watchEffect
} from "vue";
import {
  useFullscreen,
} from "@vueuse/core";
import {store} from '/@ts/store';
import LltTags from '/@/layouts/components/llt-tags.vue';
import type{ AppRouteModule } from '/@ts/router/types';
import {useRouter } from "vue-router";
const { isFullscreen, toggle } = useFullscreen();
const router = useRouter()
const internalInstance = getCurrentInstance(); //获取当前实例
// const route = internalInstance?.appContext.config.globalProperties;
const context = useContext();
const props = defineProps({
  isCollapse: {
    type: Boolean,
    required: true,
  },
});
const handleCollapse = () => {
  context.emit("handleCollapse", props.isCollapse);
};
const handleClose = (e:number) => {
  store.commit('setCloseTagPages',e)
};
interface LltTags {
  index:number,
  routerItem:AppRouteModule
} 
const handleOpen = (e:LltTags) => {
  /**
   * 1. 获取数据 对比是否是当前激活 标签
   * 2. 如果是激活就不处理 不是激活标签就处理激活内容
   */
  store.commit('setMenuActiveName',e.routerItem.name)
  if(store.state.currentTag==e.index)return
  else store.commit('setCurrentTag',e.index);router.push({name:e.routerItem.name});
  
};

/*
基本数据类型引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const handleSelect = () => {};
</script>

<style  scoped lang="scss" >
.llt-header {
  .top{
    position: relative;z-index: 10000;
  border-top: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
  padding: 5px 10px;
  box-sizing: border-box;
  }
  .bottom{
 border-bottom: solid 1px #e6e6e6;
  }
} 

.llt-badge {
  position: absolute;
  top: 10%;
  right: 11%;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: red;
}
</style>
