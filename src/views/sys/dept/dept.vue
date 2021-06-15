<template>
  <div class="">
    <!-- 搜索 start -->
    <div class="searchDeptBox white-bg">
      <DeptSearch />
    </div>
    <!-- 搜索 end-->
    <!-- 部门表格 start-->
    <div class="tableDeptBox">
      <DeptTable />
    </div>
    <!-- 部门表格 end-->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import DeptSearch from "/@/views/sys/dept/deptSearch.vue";
import DeptTable from "/@/views/sys/dept/deptTable.vue";
import column from "./column";
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

const state = reactive({
  formSearch: {
    region: "",
    user: "",
  },
});

/**
 * 搜索关键词
 */
const searchDept = () => {
  console.log("state.formSearch :>> ", state.formSearch);
};
</script>

<style scoped lang="scss">
.searchDeptBox {
  margin: 20px;
  padding-top: 20px;
}
.tableDeptBox {
  padding: 20px;
  width: 100px;
  min-width: calc(100% - 0px);
  max-width: calc(100% - 0px);
}
</style>
