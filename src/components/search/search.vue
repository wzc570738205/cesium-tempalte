<template>
  <teleport to="body">
      <div class="w100 h100 search-bg animate__animated animate__fadeIn" v-if="show"
       @click="handleHide">
            <el-card class="box-card" @click.stop="">
  <div class="text item">
    <el-input
                placeholder="请输菜单关键词"
                v-model="key"
                class="input-with-select"
                @change="seacrh"
                @input="seacrh"
            >
    <template #prepend>
      <el-button icon="el-icon-search"></el-button>
    </template>
  </el-input>
  <el-scrollbar height="220px" class="scrollbar" v-if="state.routeMenuListdata.length>0">
  <div class="item aic jcb cP " v-for="item,index in state.routeMenuListdata" :key="index"
  @click="openUrl(item)"
  >
      <div v-if="item.children" class="aic">
          <div :class="item.meta.icon" class="mx15"></div>
             <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item><span class="light"> {{item.meta.title}}</span></el-breadcrumb-item>
            <el-breadcrumb-item
            v-for="(item1,index) in item.children" :key="index">
           <span class="light"> {{item1.meta.title}}</span>
            </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
      <div v-else class="aic">
         <div :class="item.meta.icon" class="mx15"></div>
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item><span class="light"> {{item.meta.title}}</span></el-breadcrumb-item>
                </el-breadcrumb>
      </div>
    <div class="el-icon-s-promotion searchPromotion"></div>
  </div>
</el-scrollbar>
<el-empty v-else description="请搜索菜单关键字，获取菜单导航"></el-empty>
  </div>
</el-card>
      </div>
  </teleport>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,

} from "vue";
import routeMenuList from "/@ts/router/routes/menu";
import { useSearchTool } from "/@ts/components/search/data";
import type { AppRouteRecordRaw } from "/@ts/router/types";
import { useRouter } from "vue-router";
const emit = defineEmits(['handleHide']);
const router = useRouter();
const { searchChange } = useSearchTool(routeMenuList);
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
let key = ref("");
interface State {
  routeMenuListdata: AppRouteRecordRaw[];
}
const state: State = reactive({
  routeMenuListdata: [],
});

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});


const handleHide = () => {
  emit("handleHide",props.show);
};
const openUrl = (item: AppRouteRecordRaw) => {
  if (item.children !== undefined) {
    router.push({ name: item.children[0].name });
  } else {
    router.push({ name: item.name });
  }
  handleHide()
};

const seacrh = () => {
  state.routeMenuListdata = searchChange(key.value);
};
</script>

<style  scoped lang="scss" >
.searchPromotion {
  font-size: 20px;
}
.scrollbar {
  margin-top: 15px;
  padding-bottom: 15px;
  .item {
    color: #fff;
    background-color: #0960bd;
    margin-top: 15px;
    border-radius: 5px;
    overflow: hidden;
    padding: 15px;
  }
  .item .light {
    color: #fff;
  }
}
.search-bg {
  position: fixed;
  top: 0;
  left: 0;
  animation-delay: 10ms;
  z-index: 10000;
  background-color: rgba($color: #000000, $alpha: 0.3);
  .box-card {
    position: absolute;
    left: 50%;
    right: 0;
    top: 15%;
    border-radius: 10px;
    transform: translateX(-50%);

    width: 500px;
    height: auto;
  }
}
</style>

