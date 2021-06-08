<template>
  <div class="llt-table">
    <div class="aic jcb" :class="border ? 'llt-table-header' : ''">
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
        <slot name="tableRight">
         
        </slot>
         <div class="el-icon-setting llt-icon-size-21 mx15"
         @click="handleDrawerBool"
         ></div>
      </div>
    </div>
    <el-table type=index :border="border" :data="tableData" style="width: 100%">
      <slot name="tableColumn"> </slot>
    </el-table>
    <el-drawer title="列表配置" v-model="drawerBool">
      <div class="llt-table-setting-drawer">
        <div class="aic jcc mt30">
      
<el-card class="box-card">
    <el-tree
     show-checkbox
      :default-checked-keys="checkedKeys"
  :data="column"
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
  :allow-drag="allowDrag">
</el-tree>
</el-card>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, onMounted,computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
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
    default: false,
  },
});
const  checkedKeys = computed(()=>{
    let keys:string[] = []
    props.column.forEach((element:any) => {
      keys.push(element.prop)
      return keys;
    });
    return keys;
})
const state = reactive({});
const handleDrawerBool = ()=>{
drawerBool.value = true
}
//拖拽事件 start
  const handleDragStart=(node:any, ev:any) =>{
      }
      const handleDragEnter=(draggingNode:any, dropNode:any, ev:any)=> {
      }
  const    handleDragLeave=(draggingNode:any, dropNode:any, ev:any) =>{
      }
  const    handleDragOver=(draggingNode:any, dropNode:any, ev:any) =>{
      }
    const  handleDragEnd=(draggingNode:any, dropNode:any, dropType:any, ev:any)=> {
      }
  const    handleDrop=(draggingNode:any, dropNode:any, dropType:any, ev:any)=> {
      }
    const  allowDrop=(draggingNode:any, dropNode:any, type:any)=> {
        return type !== 'inner';
      }
    const  allowDrag=(draggingNode:any) =>{
        return true;
      }
//拖拽事件 end
</script>

<style   lang="scss" >
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
  .box-card{
    width: 100%;
}
}
.el-tree-node{
   
}
.el-tree-node__content{
 padding-right: 5px;
}
.el-tree-node__expand-icon.is-leaf{
  color: #333;

}

</style>
