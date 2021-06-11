<template>
  <div class="account white-bg jcb container">
    <AccountFiliter class="account-filiter-box hidden-md-and-down" />
   <Table class="account-table" :tableData="state.tableData" :column="column"
   @getCurrentColumns="getCurrentColumns"
       @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
   :pagination="{
      currentPage:1,
      total:20,
      pageSize:10,
      pageSizes:[10, 15, 20]
   }"
   >
       <template #tableColumn>
   <el-table-column
   v-for="(item,index) in state.columnData"
   class="animate__animated animate__fadeInUp"
   :key="index"
   
      :label="item.label"
      :prop="item.prop">
    </el-table-column>
    <el-table-column
    label="操作"
       width="120"
      align="right">
      <template #default="scope">
        <i 
         @click="handleEdit(scope.$index, scope.row)"
        class="llt-edit-icon el-icon-edit mx15"></i>
          <i 
           @click="handleEdit(scope.$index, scope.row)"
          class="llt-edit-icon el-icon-delete mx15 red"></i>
      </template>
    </el-table-column>
  </template>
      <template #tableRight>
         <el-button
          @click="addUserVisible = true"
           type="primary"
         >新增账户</el-button>
      </template>
   </Table>
   <!-- 新增用户 start -->
   <el-dialog
  title="提示"
  v-model="addUserVisible"
  width="40%"
  :before-close="handleClose">
  <el-form ref="form" :model="formUser" label-width="80px">
  <el-form-item label="用户名称">
    <el-input v-model="formUser.name"></el-input>
  </el-form-item>
  <el-form-item label="角色">
    <el-select v-model="formUser.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="所属部门">
    <el-select v-model="formUser.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="昵称">
    <el-input v-model="formUser.desc"></el-input>
  </el-form-item>
    <el-form-item label="邮箱">
    <el-input  v-model="formUser.desc"></el-input>
  </el-form-item>
      <el-form-item label="备注">
    <el-input type="textarea" v-model="formUser.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button>取消</el-button>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
</el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="addUserVisible = false">取 消</el-button>
      <el-button type="primary" @click="addUserVisible = false">确 定</el-button>
    </span>
  </template>
</el-dialog>
   <!-- 新增用户 end -->
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,getCurrentInstance,onMounted, watch} from 'vue';
import {useRouter,useRoute} from 'vue-router'
import Table from '/@/components/table/table.vue';
import AccountFiliter from '/@/views/sys/account/accountFiliter.vue';

import type { LltColumn } from './column'
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
 const addUserVisible =ref(false);
 const formUser =ref({
          name: '',
          region: '',
          resource: '',
          desc: ''
        });
// computed(()=>{

//     return keys;
// });

 const state = reactive({
   columnData:column,
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
        },{
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
        },{
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
        }],
 })

/**
 * 关闭弹窗
 */

const handleClose = (index:number,e:any)=>{
  addUserVisible.value = false
}
const handleEdit = (index:number,e:any)=>{
}
/**
 * 获取当前页数
 */
const handleCurrentChange = (num:number)=>{
   state.tableData = [ {
       date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
   }]
   }
/**
 * 获取当前分页大小
 */
const handleSizeChange = (size:number)=>{
}
const getCurrentColumns = (data:LltColumn[])=>{
    state.columnData = data;
}

</script>

<style  scoped lang="scss" >

.account{
  padding: 20px;
  margin: 10px;

  .account-filiter-box{
    margin-right: 20px;
   min-width: 300px;
  max-width: 400px;
}


  

}
// .account-table{
  
// }
@media only screen and (max-width:1200px)
{.account-table{
   max-width: 100% ;
}
}
@media only screen and (min-width:1200px)
{.account-table{
 width: 1px;
 padding-right: 20px;
   min-width: calc(100% - 300px);
  max-width: calc(100% - 400px);
}
}
</style>
