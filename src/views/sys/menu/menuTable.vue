<template>
  <div class="menutable white-bg jcb container w100">
    <Table
      class="menutable-table "
      :tableData="dataMenu"
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
        <h3 class="mx15">菜单列表</h3>
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
           <i :class="scope.row.icon"></i>
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
        <el-button type="primary" @click="menuDrawer = true"
          >新增菜单</el-button
        >
      </template>
    </Table>
  
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
const formUser = ref({
  //角色表单
  name: "",
  region: "",
  delivery: true,
  resource: "",
  desc: "",
});
interface TreeMenu {
  routerName: string;
  name: string;
  icon?: string;
  hasChildren?: boolean;
  addressName?: string;
  children?: TreeMenu[];
}
let dataMenu:Ref<TreeMenu[]> = ref([]);

/**
 * 格式化菜单
 */
const formatMenu = () => {
  // console.log('routeMenuList :>> ', routeMenuList);
  for (let index = 0; index < routeMenuList.length; index++) {
    const element: AppRouteModule = routeMenuList[index];
    if (element.children) {
       dataMenu.value.push({
        name:  element.meta.title,
        routerName:element.name,
        icon:element.meta.icon,
        addressName:element.path,
       
        children:[]
      });
      for (let k = 0; k < element.children.length; k++) {
        const element2:AppRouteModule = element.children[k];
         dataMenu.value[index].children?.push({
          name:  element2.meta.title,
        routerName:element2.name,
        icon:element2.meta.icon,
        addressName:element2.path,
      })
      }
    } else {
      dataMenu.value.push({
            name:  element.meta.title,
        routerName:element.name,
        icon:element.meta.icon,
        addressName:element.path,
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

  ],
});


const handleEdit = (index: number, e: any) => {};
const handleCurrentChange = (num: number) => {

};
const handleSizeChange = (size: number) => {};
const getCurrentColumns = (data: LltColumn[]) => {
  console.log("data :>> ", data);
  state.columnData = data;
};
</script>

<style  scoped lang="scss" >
.menutable{
  padding: 20px;
}
.menu-add-form {
  
  padding-right: 15px;
}

</style>
