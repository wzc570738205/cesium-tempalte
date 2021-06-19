<template>
  <div class="llt-header w100" >
    <div class="aic jcb top w100" style="background:var(--navColorBg);">
      <!-- 一级导航左边 start -->
      <div class="aic">
        <!-- 大屏按钮 start -->
        <div class="hidden-md-and-down "  @click="handleCollapse" >
          <i v-show="!isCollapse"
          style="color: var(--navColorFont)"
           class="el-icon-s-fold llt-icon-size p10"></i>
          <i
          style="color: var(--navColorFont)"
            v-show="isCollapse"
            class="el-icon-s-unfold llt-icon-size p10"
          ></i>
        </div>
           <!-- 大屏按钮 end -->
           <div class="hidden-md-and-up1 " @click="handleshowMenu">
        <i style="color: var(--navColorFont)" class="el-icon-s-operation llt-icon-size p10 "/>
           </div>
        <div class="mx15 aic">
          <div style="color: var(--navColorFont)"
            v-for="(item,index) in $store.state.BreadcrumbList" :key="index">
            <span  > {{item.meta.title}}</span>
            <i
            v-if="index<$store.state.BreadcrumbList.length-1"
            class="el-icon-arrow-right mx5"
          ></i>
          </div>
        </div>
      </div>
      <!-- 一级导航左边 end -->
      <!-- 二级导航左边 start -->
      <div class="aic">
        <div class="aic">
          <el-tooltip
            class="item"
            effect="dark"
            content="搜索菜单"
            placement="bottom"
          >
            <i style="color: var(--navColorFont)" @click="handleSearch" class="el-icon-search llt-icon-size p10"></i>
          </el-tooltip>
        <el-dropdown trigger="hover" :show-timeout="0" class="mx15 cP">
           <span>
              <i style="color: var(--navColorFont)" class="el-icon-bell llt-icon-size p10 position-relative">
              <div class="llt-badge"></div>
            </i>
           </span>
          <template #dropdown>
            <el-dropdown-menu >
              <el-tabs class="header-message-tabs p20"  v-model="activeName"
               @tab-click="handleTagMessageClick">
              <el-tab-pane label="通知(1)" name="first">
                <el-scrollbar height="200px">
                <p class="item" v-for="item in 20" :key="item">
                  <p>你收到了{{item+1}}的周报</p>
                  <p class="time">
                    2020-1-1
                  </p>
                </p>
              </el-scrollbar>
              </el-tab-pane>
              <el-tab-pane label="代办(1)" name="third">
                <el-scrollbar height="200px">
                <p class="item" v-for="item in 20" :key="item">{{ item }}</p>
              </el-scrollbar>
              </el-tab-pane>
            </el-tabs>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
          <el-tooltip
            class="item"
            effect="dark"
            :content="!isFullscreen?'全屏':'退出全屏'"
            placement="bottom"
          >
            <i  style="color: var(--navColorFont)" @click="toggle" v-if="!isFullscreen"  class="el-icon-full-screen llt-icon-size p10"></i>
            <i  style="color: var(--navColorFont)" @click="toggle" v-else class="el-icon-rank llt-icon-size p10"></i>
          </el-tooltip>
        </div>
        <el-dropdown trigger="hover"
        @command="hanldeUserCenter"
         :show-timeout="0" class="mx15 cP">
          <span class="el-dropdown-link">
            <div class="aic">
              <el-avatar
                size="small"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <div  style="color: var(--navColorFont)" class="llt-default-font-color mx15">刘蓝天</div>
            </div>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="1" icon="el-icon-s-custom">个人中心</el-dropdown-item>
              <el-dropdown-item command="2" icon="el-icon-s-release" divided>退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-tooltip
          class="item"
          effect="dark"
          content="主题配置"
          placement="bottom"
        >
          <i  style="color: var(--navColorFont)" @click="openSetting" class="el-icon-setting llt-icon-size p10"></i>
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
              <i @click="handleRefresh"   class="el-icon-refresh llt-icon-size p10"></i>
            </el-tooltip>
          </div>
          
    </div>
    <Search @handleHide="handleHide" :show="searchBool" />
    <!-- 系统配置 end -->
   <el-drawer
  title="项目配置"
  v-model="drawerBool"
 >
  <div class="header-setting-drawer">
     <el-divider content-position="center"><h4>是否通栏</h4></el-divider>
      <div class="aic jcc mt30">
             <el-switch :model-value="$store.state.isFull"
             @change="changeIsFull"
              >
</el-switch>
      </div>
         <el-divider content-position="center"><h4>主题颜色</h4></el-divider>
      <div class="mt30 ">
        <!-- 颜色选择器 -->
          <el-color-picker
        popper-class="header-el-color-picker"
        color-format="rgb"
           v-model="state.colors.primary" @change='changeThemeColor'></el-color-picker>
           
      </div>
     <el-divider content-position="center"><h4>顶栏主题颜色</h4></el-divider>

     <div class="mt30 header-theme-color-box aic">
        <div class="header-theme-color-item aic jcc"
        v-for="item,index in $store.state.theme.themeNav" :key="index"
        @click="handleCurrentNavIndex(index)"
         :style="{
              background:item.ColorBg
            }">
         <i v-if="currentNavIndex==index" class="el-icon-check"></i>
        </div>
     </div>
          <el-divider content-position="center"><h4>左侧菜单主题颜色</h4></el-divider>

     <div class="mt30 header-theme-color-box aic">
        <div class="header-theme-color-item aic jcc"
        v-for="item,index in $store.state.theme.themeMenu" :key="index"
        @click="handleCurrentMenuIndex(index)"
         :style="{
              background:item.ColorBg
            }">
         <i v-if="currentMenuIndex==index" class="el-icon-check"></i>
        </div>
     </div>
      <div class="mt30">
  <el-button type="primary" class="w100 "
    
     @click="handleInitThemeColor">初始化配色方案</el-button>
      </div>
  </div>
</el-drawer>
<!-- 系统配置 end -->
<!-- 菜单导航 start -->
<div  class="llt-drawaer">
   <el-drawer
 
    direction="ltr"
   :with-header="false"
  v-model="showMenuBool"
 >
    

   <Menu />
   
</el-drawer>
</div>

<!-- 菜单导航 start -->
  </div>
</template>
<script setup lang="ts">
import {
  ref,
  defineProps,
  reactive,
  getCurrentInstance,
  useContext,
  watch,
  watchEffect,
  onMounted,
} from "vue";
import { useFullscreen } from "@vueuse/core";
import { store } from "/@ts/store";

import LltTags from "/@/layouts/components/llt-tags.vue";
import Menu from "/@/layouts/components/menu.vue";
import Search from "/@/components/search/search.vue";
import type { AppRouteModule } from "/@ts/router/types";
import { useRouter } from "vue-router";
import { switchColorMenu, switchColorNav } from "/@ts/hooks/theme";
import { ElLoading } from "element-plus";
import {themeColor, theme} from '/@ts/store';
const { isFullscreen, toggle } = useFullscreen();
const router = useRouter();
const internalInstance = getCurrentInstance(); //获取当前实例
const globalProperties = internalInstance?.appContext.config.globalProperties;
const context = useContext();
interface HeaderColors {
  [key: string]: string;
}
interface StateHeader {
  colors: HeaderColors;
}
const state: StateHeader = reactive({
  colors: { primary: "#409eff" },
});
const props = defineProps({
  isCollapse: {
    type: Boolean,
    required: true,
  },
});
let searchBool = ref(false);
let drawerBool = ref(false);
let showMenuBool = ref(false);


//用户头像菜单
const hanldeUserCenter = (e: string) => {
 console.log('e :>> ', e);
 switch (e) {
   case "1":
     //个人中心
     break;
 
   default:
      //退出
      localStorage.clear()
      router.push("/login")
     break;
 }
};
/**
 * 颜色选择索引值
 */
let currentMenuIndex = ref(
  Number(JSON.parse(localStorage.getItem("currentMenuIndex") || "0"))
);
let currentNavIndex = ref(
  Number(JSON.parse(localStorage.getItem("currentNavIndex") || "0"))
);
//当前导航主题配色索引值
const handleCurrentNavIndex = (e: number) => {
  localStorage.setItem("currentNavIndex", String(e));
  currentNavIndex.value = e;
  switchColorNav(store.state.theme.themeNav[e]);
};
//初始化配色方案
const handleInitThemeColor = () => {
    let loadingInstance = ElLoading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      store.commit("setThemeColor",themeColor)
            switchColorNav(store.state.theme.themeNav[0]);
        switchColorMenu(store.state.theme.themeMenu[0]);
        store.commit("setIsFull",false)
      setTimeout(() => {
         loadingInstance.close();
      }, 1000);
};

//更换主题颜色
const changeThemeColor = (e: string) => {
  let numArr: string[] = [];
  e.match(/\d+/g)?.forEach((res: string) => {
    numArr.push(res);
  });
 store.commit("setThemeColor",numArr)

};

const handleCurrentMenuIndex = (e: number) => {
  localStorage.setItem("currentMenuIndex", String(e));
  currentMenuIndex.value = e;
  switchColorMenu(store.state.theme.themeMenu[e]);
};
//消息 tabs start
let activeName = ref("first");
const handleTagMessageClick = (e: any) => {
  activeName.value = e.paneName;
};
//是否通栏
const changeIsFull = (e: boolean) => {
  store.commit("setIsFull", e);
};
/**
 * 打开菜单 低于 md显示
 */
const handleshowMenu = () => {
 showMenuBool.value = true
};

const openSetting = () => {
  drawerBool.value = true;
};
const handleHide = (e: boolean) => {
  searchBool.value = !e;
};
const handleRefresh = () => {
  store.commit("setRefresh");
};
const handleSearch = () => {
  searchBool.value = true;
};
const handleCollapse = () => {
  context.emit("handleCollapse", props.isCollapse);
};
const handleClose = (e: number) => {
  store.commit("setCloseTagPages", e);
};
interface LltTags {
  index: number;
  routerItem: AppRouteModule;
}
const handleOpen = (e: LltTags) => {
  /**
   * 1. 获取数据 对比是否是当前激活 标签
   * 2. 如果是激活就不处理 不是激活标签就处理激活内容
   */
  store.commit("setMenuActiveName", e.routerItem.name);
  if (store.state.currentTag == e.index) return;
  else store.commit("setCurrentTag", e.index);
  router.push({ name: e.routerItem.name });
};

/*
基本数据类型引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const handleSelect = () => {};
</script>

<style   lang="scss" >
.llt-drawaer .el-drawer{
  width: 200px !important;
}
.header-setting-drawer {
  border-top: 1px solid #e6e6e6;
  padding: 10px 30px;
}

.header-message-tabs .el-tabs__active-bar {
  width: 44px !important;
}

.llt-header {
  .top {
    position: relative;
    // z-index: 10000;
    z-index: 3;
    border-top: solid 1px rgba(0, 0, 0, 0.1); //#e6e6e6
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    height: 54px;
  }
  .bottom {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
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
.header-message-tabs {
  padding-top: 0;
  width: 400px;

  .item {
    color: rgba(0, 0, 0, 0.9);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;
    line-height: 2rem;
  }
  .time {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 2rem;
  }
}
.header-theme-color-item {
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  color: #fff;
  margin-left: 10px;
}
#el-popper-3198 {
  z-index: 1000012 !important;
}
</style>
