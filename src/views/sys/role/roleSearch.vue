<template>
  <!-- 搜索 start -->
  <div class="w100">
    <el-form :inline="true" class="aic w100">
      <el-form-item label="角色名称" label-width="100px">
        <el-input
        class="roleSearchItem"
          v-model="state.formSearch.user"
          placeholder="请输入角色名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态" label-width="80px">
        <el-select    class="roleSearchItem" v-model="state.formSearch.region" placeholder="请选择">
          <el-option label="启用" value="1"></el-option>
          <el-option label="停用" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button class="roleSearchBtn" type="primary" @click="searchRole">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
  <!-- 搜索 end-->
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  getCurrentInstance,
  onMounted,

} from "vue";
import { useRouter, useRoute } from "vue-router";
const internalInstance = getCurrentInstance(); //获取当前实例
// const route = internalInstance?.appContext.config.globalProperties.$route;
const router = useRouter();
const route = useRoute();
const emit =defineEmits(["searchRole"]);
onMounted(() => {});
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const count = ref(0);
const state = reactive({
  formSearch: {
    region: "",
    user: "",
  },
});

const searchRole = () => {
 emit("searchRole", state.formSearch);
};
</script>

<style  scoped lang="scss" >
.roleSearchBtn{
    width: 150px;
    margin-left: 20px;
}
.roleSearchItem{
    width: 300px;
}
</style>
