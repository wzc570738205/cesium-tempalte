<template>
  <div class="account white-bg">
   <Table :tableData="state.tableData" :column="columnData">
       <template #tableColumn>
        
          <!-- <el-table-column
            type="selection"
          ></el-table-column> -->
   <el-table-column
   v-for="item,index in columnData"
   :key="index"
      :label="item.label"
      :prop="item.prop">
    </el-table-column>
    <el-table-column
    label="操作"
      align="right">
      <template #default="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </template>
       
   </Table>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,getCurrentInstance,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router'
import Table from '/@/components/table/table.vue';
import column from './column'
    const internalInstance = getCurrentInstance();//获取当前实例
    // const route = internalInstance?.appContext.config.globalProperties.$route;
   const router = useRouter()
   const route = useRoute()
    onMounted(()=>{
    })
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
 const count =ref(0);
  const columnData =ref(column);
 const state = reactive({
    tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
 })
const handleEdit = (index:number,e:any)=>{
console.log('index,e :>> ', index,e);
}

</script>

<style  scoped lang="scss" >
.account{
  padding: 20px;
  margin: 10px;
}
</style>
