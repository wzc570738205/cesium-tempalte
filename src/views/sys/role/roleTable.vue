<template>
  <div class="roletable white-bg jcb container">
    <Table
      class="roletable-table"
      :tableData="state.tableData"
      :searchBool="false"
      :column="column"
      @getCurrentColumns="getCurrentColumns"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :pagination="{
        currentPage: 1,
        total: 20,
        pageSize: 10,
        pageSizes: [10, 15, 20],
      }"
    >
    <template #tableLeft>
      <h3 class="mx15">角色列表</h3> 
    </template>
      <template #tableColumn>
        <el-table-column
          v-for="(item, index) in state.columnData"
          class="animate__animated animate__fadeInUp"
          :key="index"
          :label="item.label"
          :prop="item.prop"
        >
          <template v-if="item.render" #default="scope">
          <el-switch  v-model="scope.row.switch" >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="right">
          <template #default="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </template>
      <template #tableRight>
        <el-button type="primary" @click="handleEdit(scope.$index, scope.row)"
          >新增账户</el-button
        >
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Table from "/@/components/table/table.vue";
import type { LltColumn } from "./interface";
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
const count = ref(0);
// computed(()=>{

//     return keys;
// });

const state = reactive({
  columnData: column,
  tableData: [
    {
      date: "2016-05-02",
      name: "王小虎",
      switch:true,
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      switch:true,
      address: "上海市普陀区金沙江路 1517 弄",
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      switch:true,
      address: "上海市普陀区金沙江路 1519 弄",
    },
    {
      date: "2016-05-03",
      name: "王小虎",
      switch:false,
      address: "上海市普陀区金沙江路 1516 弄",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      switch:true,
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      switch:true,
      address: "上海市普陀区金沙江路 1517 弄",
    },

 
 
  ],
});

const handleEdit = (index: number, e: any) => {};
const handleCurrentChange = (num: number) => {
  state.tableData = [
    {
      date: "2016-05-04",
       switch:true,
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄",
    }
  ];
};
const handleSizeChange = (size: number) => {};
const getCurrentColumns = (data: LltColumn[]) => {
  console.log("data :>> ", data);
  state.columnData = data;
};
</script>

<style  scoped lang="scss" >
</style>
