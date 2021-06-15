<template>
  <div class="menutable white-bg jcb container w100">
    <Table
      class="menutable-table"
      :tableData="dataDept"
      rowKey="routerName"
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
        <h3 class="mx15">部门列表</h3>
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
            <el-tag
            :type="scope.row.status?'success':'danger'"
            >
            {{scope.row.status?'启用':'停用'}}
          </el-tag>
          </template>
        </el-table-column>
        <el-table-column width="120" label="操作" align="right">
          <template #default="scope">
            <i
              @click="handleEdit(scope.$index, scope.row)"
              class="llt-edit-icon el-icon-edit mx15"
            ></i>
            <i
              @click="handleEdit(scope.$index, scope.row)"
              class="llt-edit-icon el-icon-delete mx15 red"
            ></i>
          </template>
        </el-table-column>
      </template>
      <template #tableRight>
        <el-button type="primary" @click="menuDrawer = true">新增部门</el-button>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance, onMounted, watch } from "vue";
import type { Ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Table from "/@/components/table/table.vue";
import type { LltColumn } from "./column";
import column from "./column";
import type { AppRouteModule } from "/@ts/router/types";
const internalInstance = getCurrentInstance(); //获取当前实例
// const route = internalInstance?.appContext.config.globalProperties.$route;
const router = useRouter();
const route = useRoute();
const formUser = ref({
  //角色表单
  deptName: "",
  region: "",
  delivery: true,
  resource: "",
  desc: "",
});
interface TreeDept {
  create_start: string;
  deptName: string;
  status?: boolean;
  remark?: string;
  children?: TreeDept[];
}
let dataDept: Ref<TreeDept[]> = ref([]);
let datatest:TreeDept[] = [
  {
    deptName: "销售部",
    status: true,
    remark: "text",
    create_start: "2020-1-1",
    children: [
      {
        deptName: "运营部",
        status: true,
        remark: "text",
        create_start: "2020-1-1",
        children: [
          {
            deptName: "市场部",
            status: false,
            create_start: "2020-1-1",
            remark: "text",
            children: [
              {
                deptName: "人事部",
                create_start: "2020-1-1",
                status: true,
                remark: "text",
                children: [],
              },
              {
                create_start: "2020-1-1",
                deptName: "市场部",
                status: true,
                remark: "text",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    deptName: "市场部",
    create_start: "2020-1-1",
    remark: "text",
    status: true,
  },
  {
    deptName: "人事部",
    create_start: "2020-1-1",
    remark: "text",
    status: false,
  },
  {
    deptName: "运营部",
    create_start: "2020-1-1",
    remark: "text",
    status: false,
  },
];
/**
 * 格式化菜单
 */
const formatDept = () => {
  dataDept.value = datatest
};
onMounted(() => {
  // 初始化表单
  formatDept();
});
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/

// computed(()=>{

//     return keys;
// });

const state = reactive({
  columnData: column,
  tableData: [],
});

const handleEdit = (index: number, e: any) => {};
const handleCurrentChange = (num: number) => {};
const handleSizeChange = (size: number) => {};
const getCurrentColumns = (data: LltColumn[]) => {
  console.log("data :>> ", data);
  state.columnData = data;
};
</script>

<style scoped lang="scss">
.menutable {
  padding: 20px;
}
.menu-add-form {
  padding-right: 15px;
}
</style>
