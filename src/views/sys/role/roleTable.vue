<template>
  <div class="roletable white-bg jcb container w100">
    <Table
      class="roletable-table "
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
            <el-switch v-model="scope.row.switch"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          width="120"
         label="操作" align="right">
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
        <el-button type="primary" @click="roleDrawer = true"
          >新增角色</el-button
        >
      </template>
    </Table>
    <!-- 新增角色 start -->
    <el-drawer
      title="新增角色"
      v-model="roleDrawer"
      direction="rtl"
      :before-close="handleClose"
      destroy-on-close
    >
      <el-form class="role-add-form" :model="formUser" label-width="80px">
        <el-form-item label="角色名称">
          <el-input v-model="formUser.name"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            active-text="启用"
            inactive-text="停用"
            v-model="formUser.delivery"
          ></el-switch>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="formUser.desc"></el-input>
        </el-form-item>
        <el-tree
          class="p20"
          :data="dataMenu"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node ">
             <i :class="data.icon" class="mx5"></i>
              <span>{{ node.label }}{{node.icon}}</span>
            </span>
          </template>
        </el-tree>
        <el-form-item>
          <el-button>取消</el-button>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <!--新增角色 end -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance, onMounted, watch } from "vue";
import type{ Ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Table from "/@/components/table/table.vue";
import routeMenuList from "/@ts/router/routes/menu";
import type { LltColumn } from "./column";
import column from "./column";
import type { AppRouteModule } from "/@ts/router/types";
const internalInstance = getCurrentInstance(); //获取当前实例
// const route = internalInstance?.appContext.config.globalProperties.$route;
const router = useRouter();
const route = useRoute();
const roleDrawer = ref(false); //添加角色
const formUser = ref({
  //角色表单
  name: "",
  region: "",
  delivery: true,
  resource: "",
  desc: "",
});
interface TreeMenu {
  id: string;
  label: string;
  icon?: string;
  children?: TreeMenu[];
}
let dataMenu:Ref<TreeMenu[]> = ref([]);
const defaultProps = ref({
  children: "children",
  label: "label",
});
/**
 * 格式化菜单
 */
const formatMenu = () => {
  for (let index = 0; index < routeMenuList.length; index++) {
    const element: AppRouteModule = routeMenuList[index];
    if (element.children) {
       dataMenu.value.push({
        id: element.name,
        label: element.meta.title,
        icon:element.meta.icon,
        children:[]
      });
      for (let k = 0; k < element.children.length; k++) {
        const element2:AppRouteModule = element.children[k];
         dataMenu.value[index].children?.push({
        id: element2.name,
        label: element2.meta.title,
      })
      }
    } else {
      dataMenu.value.push({
           id: element.name,
        label: element.meta.title,
        icon:element.meta.icon,
      });
    }
  }
  console.log('dataMenu :>> ', dataMenu);
};
onMounted(() => {
  // 初始化表单
  formatMenu()
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
  tableData: [
    {
      date: "2016-05-02",
      name: "王小虎",
      switch: true,
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      switch: true,
      address: "上海市普陀区金沙江路 1517 弄",
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      switch: true,
      address: "上海市普陀区金沙江路 1519 弄",
    },
    {
      date: "2016-05-03",
      name: "王小虎",
      switch: false,
      address: "上海市普陀区金沙江路 1516 弄",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      switch: true,
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      switch: true,
      address: "上海市普陀区金沙江路 1517 弄",
    },
  ],
});
/**
 * 关闭新增角色
 */
const handleClose = () => {
  roleDrawer.value = false;
};

const handleEdit = (index: number, e: any) => {};
const handleCurrentChange = (num: number) => {
  state.tableData = [
    {
      date: "2016-05-04",
      switch: true,
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄",
    },
  ];
};
const handleSizeChange = (size: number) => {};
const getCurrentColumns = (data: LltColumn[]) => {
  console.log("data :>> ", data);
  state.columnData = data;
};
</script>

<style  scoped lang="scss" >
.roletable{
  padding: 20px;
}
.role-add-form {
  
  padding-right: 15px;
}

</style>
