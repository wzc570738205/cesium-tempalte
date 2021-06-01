<template>
  <div class="llt-header w100">
    <div class="aic jcb top w100">
      <!-- 一级导航左边 start -->
      <div class="aic">
        <div class="" @click="handleCollapse">
          <i v-show="isCollapse" class="el-icon-s-fold llt-icon-size p10"></i>
          <i
            v-show="!isCollapse"
            class="el-icon-s-unfold llt-icon-size p10"
          ></i>
        </div>
        <div class="mx15">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <!-- 一级导航左边 end -->
      <!-- 二级导航左边 start -->
      <div class="aic">
        <div>
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
            content="全屏"
            placement="bottom"
          >
            <i class="el-icon-full-screen llt-icon-size p10"></i>
          </el-tooltip>
        </div>
        <el-dropdown :hide-on-click="false" class="mx15 cP">
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
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-tooltip
          class="item"
          effect="dark"
          content="主题配置"
          placement="bottom"
        >
          <i class="el-icon-setting llt-icon-size p10"></i>
        </el-tooltip>
      </div>
      <!-- 二级导航左边 end -->
    </div>
   
    <!-- 上下分割线 -->
    <div class="bottom w100 jcb aic">
         <LltTags
         @handleClose="handleClose"
          :currentTag="currentTag" :tagsData="state.tagsData" />
          <div class="aic">
          <el-tooltip
              class="item"
              effect="dark"
              content="刷新页面"
              placement="bottom"
            >
              <i class="el-icon-refresh llt-icon-size p10"></i>
            </el-tooltip>
               <el-dropdown :hide-on-click="false" class="mx15 cP">
           <i class="el-icon-arrow-down llt-icon-size p10"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
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
} from "vue";
import LltTags from '/@/layouts/components/llt-tags.vue'
const internalInstance = getCurrentInstance(); //获取当前实例
const route = internalInstance?.appContext.config.globalProperties;
const state = reactive({
  tagsData: [{ name: "工作台" },{ name: "分析页" }],
 
});
let currentTag = ref(0)
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
const handleClose = (e:any) => {
 state.tagsData =e
};

/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const activeIndex = ref(0);

const handleSelect = () => {};
</script>

<style  scoped lang="scss" >
.llt-header {

  .top{
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
