<template>
  <div class="llt-table w100">
    <div class="aic jcb w100" :class="border ? 'llt-table-header' : ''">
      <div class="llt-table-left">
        <slot name="tableLeft">
          <div class="aic">
            <el-input
              v-model="search"
              class="mx15"
              size="mini"
              placeholder="输入关键字搜索"
            />
            <el-button icon="el-icon-search" size="mini" type="primary"
              >搜索</el-button
            >
          </div>
        </slot>
      </div>

      <div class="llt-table-right">
        <slot name="tableRight"> </slot>
        <div
          class="el-icon-setting llt-icon-size-21 mx15"
          @click="handleDrawerBool"
        ></div>
      </div>
    </div>
    <el-table
      type="index"
      :border="border"
      :data="tableData"
      style="width: 100%"
    >
      <slot name="tableColumn"> </slot>
    </el-table>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="pagination.currentPage"
      :page-sizes="pagination.pageSizes"
      :page-size="pagination.pageSize"

      layout=" prev, pager, next,sizes"
      :total="pagination.total">
    </el-pagination>
    <el-drawer title="列表配置" v-model="drawerBool">
      <div class="llt-table-setting-drawer">
        <div class="aic jcc fdc mt30">
          <div>
            <el-checkbox
              :indeterminate="state.isIndeterminate"
              v-model="state.checkAll"
              @change="handleCheckAllChange"
              >全选</el-checkbox
            >
            <div style="margin: 15px 0"></div>
            <el-checkbox-group
              v-model="state.checkedCities"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox
                v-for="city in state.cities"
                :label="city.prop"
                :key="city.prop"
                >{{ city.label }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <el-card class="box-card mt30">
            <el-tree
              :data="state.treeCties"
              node-key="prop"
              default-expand-all
              @node-drag-start="handleDragStart"
              @node-drag-enter="handleDragEnter"
              @node-drag-leave="handleDragLeave"
              @node-drag-over="handleDragOver"
              @node-drag-end="handleDragEnd"
              @node-drop="handleDrop"
              draggable
              icon-class="el-icon-rank"
              :allow-drop="allowDrop"
              :allow-drag="allowDrag"
            >
            </el-tree>
          </el-card>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  defineProps,
  onMounted,
  computed,
  useContext,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import type { LltColumn } from "/@ts/views/sys/account/column";
const router = useRouter();
const context = useContext();
const route = useRoute();
onMounted(() => {});
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const search = ref("");

let drawerBool = ref(false);

const props = defineProps({
  pagination:{
    type: Object,
    default: {
      currentPage:1,
      total:0,
      pageSize:10,
      pageSizes:[10, 15, 20]
    },
  },
  tableData: {
    type: Array,
    default: [],
  },
  column: {
    //列数据
    type: Array,
    default: [],
  },
  border: {
    //列数据
    type: Boolean,
    default: true,
  },
});
interface TableState {
  cities: LltColumn[];//上部勾选check数据
  treeCties: LltColumn[];//树形结构check数据
  checkedCities: string[];//当前勾选
  isIndeterminate: boolean;
  checkAll: boolean;
}
const state: TableState = reactive({
  cities: props.column as LltColumn[],
   treeCties: props.column as LltColumn[],
  checkedCities: [],
  isIndeterminate: true,
  checkAll: false,
});
// 执行一次 start
props.column.forEach((element: any) => {
  if (element.show) {
    state.checkedCities.push(element.prop);
  }
});
// 执行一次 end
/**
 * 触发column全选事件
 */
const handleCheckAllChange = (val: boolean) => {
  let keys: string[] = [];
  props.column.forEach((res: any) => {
    keys.push(res.prop);
  });
  state.checkedCities = val ? keys : [];
  state.isIndeterminate = false;
};
/**
 * 勾选
 */
const handleCheckedCitiesChange = (value: string[]) => {
  let checkedCount = value.length;
  let keys: LltColumn[] = [];
  for (let index = 0; index < value.length; index++) {
    const element = value[index];
    for (let index = 0; index < state.cities.length; index++) {
      const element2: LltColumn = state.cities[index];
      if (element == element2.prop) {
        keys.push(element2);
      }
    }
  }
  state.treeCties = (keys as any)
   context.emit("getCurrentColumns", keys);
  state.checkAll = checkedCount === state.cities.length;
  state.isIndeterminate =
    checkedCount > 0 && checkedCount < state.cities.length;
};

const handleDrawerBool = () => {
  drawerBool.value = true;
};
// 分页 start
const handleCurrentChange = (num:number)=>{
   context.emit("current-change", num);
}
const handleSizeChange = (size:number)=>{

   context.emit("size-change", size);
}

//、分页 end
//拖拽事件 start

const handleDragStart = (node: any, ev: any) => {};
const handleDragEnter = (draggingNode: any, dropNode: any, ev: any) => {};
const handleDragLeave = (draggingNode: any, dropNode: any, ev: any) => {};
const handleDragOver = (draggingNode: any, dropNode: any, ev: any) => {};
const handleDragEnd = (
  draggingNode: any,
  dropNode: any,
  dropType: any,
  ev: any
) => {
  //拖拽结束最新顺序返回 treeCtise是响应式数据所以与tree是同一个数据所以拖拽后自动更新
  context.emit("getCurrentColumns", state.treeCties);
};
const handleDrop = (
  draggingNode: any,
  dropNode: any,
  dropType: any,
  ev: any
) => {};
const allowDrop = (draggingNode: any, dropNode: any, type: any) => {
  return type !== "inner";
};
const allowDrag = (draggingNode: any) => {
  return true;
};
//拖拽事件 end
</script>

<style   lang="scss" >
.llt-table{
}
.llt-table-header {
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  padding-top: 10px;
  padding-bottom: 10px;
}
.llt-table-setting-drawer {
  border-top: 1px solid #e6e6e6;
  padding: 10px 30px;
  .box-card {
    width: 100%;
  }
}
.el-tree-node {
}
.el-tree-node__content {
  padding-right: 5px;
}
.el-tree-node__expand-icon.is-leaf {
  color: #333;
}
</style>
