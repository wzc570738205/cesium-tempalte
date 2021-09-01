<template lang="">
 <div class="m-map">
    <div class="search" v-if="placeSearch">
        <el-form
        @submit.prevent=""
        @keyup.enter.native="handleSearch"
        :inline="true"
        class="demo-form-inline"
      >
        <el-form-item>
          <el-input v-model="searchKey" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </el-form-item>
      </el-form>
      <div id="js-result" v-show="searchKey" class="result"></div>
    </div>
    <div id="js-container" class="map">正在加载数据 ...</div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, nextTick, onBeforeMount } from "vue";
import remoteLoad from "/@ts/plugins/remoteLoad";
// 高德地图 key
const MapKey = "94ed616c43643f5cabe33ac924b61fa5";
const Location = {
  latitude: 113.665412,
  longitude: 34.757975,
};
//bing
const YOUR_BING_MAPS_KEY =
  "AkKcF1kUFRsFgy5ajuulG_B4Yc7O2QF7pZpLXclunOJ9DL-Z9GJm_O2mLoAyV66m";
// 地图限定城市
const MapCityName = "郑州";
let map: any = null;
let searchManager: any = null;
const emit = defineEmits(["drag"]);
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
let props = defineProps({
  msg: {
    type: String,
    required: false,
  },
});
let searchKey = ref(""); //搜索地名key
let placeSearch: any = ref(null); //搜索函数
let AMap: any = null; //地图函数
let AMapUI: any = null; //地图实例
let dragStatus = ref(false); //
let value = ref(""); //当前选择的地址
const state = reactive({
  options: [],
});

const handleSearch = () => {
  if (searchKey.value) {
    placeSearch.value.search(searchKey.value);
  }
};
// 实例化地图
const initMap = () => {
  // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
  AMapUI = window.AMapUI;
  AMap = window.AMap;
  AMapUI.loadUI(["misc/PositionPicker"], (PositionPicker: any) => {
    let mapConfig = {
      zoom: 16,
      cityName: MapCityName,
    };
    // mapConfig.center = [this.lng, this.lat] 初始化经纬度
    let map = new AMap.Map("js-container", mapConfig);
    // 加载地图搜索插件
    AMap.service("AMap.PlaceSearch", () => {
      placeSearch.value = new AMap.PlaceSearch({
        pageSize: 5,
        pageIndex: 1,
        citylimit: true,
        city: MapCityName,
        map: map,
        panel: "js-result",
      });
    });
    // 启用工具条
    AMap.plugin(["AMap.ToolBar"], function () {
      map.addControl(
        new AMap.ToolBar({
          position: "RB",
        })
      );
    });
    // 创建地图拖拽
    let positionPicker = new PositionPicker({
      mode: "dragMap", // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
      map: map, // 依赖地图对象
    });
    // 拖拽完成发送自定义 drag 事件
    positionPicker.on("success", (positionResult: any) => {
      // 过滤掉初始化地图后的第一次默认拖放
      if (!dragStatus.value) {
        dragStatus.value = true;
      } else {
        console.log("positionResult :>> ", positionResult);
        emit("drag", {
          address: positionResult.address,
          location: {
            latitude: positionResult.position.lat, //纬度
            longitude: positionResult.position.lng, //经度
          },
        });
        // emit('drag', positionResult)
      }
    });
    // 启动拖放
    positionPicker.start();
  });
};
onMounted(async () => {
  if (window.AMap && window.AMapUI) {
    initMap(); //高德 地图
    // 未载入高德地图API，则先载入API再初始化
  } else {
    // 高德  start
    await remoteLoad(
      `http://webapi.amap.com/maps?v=1.4.15&key=${MapKey}`,
      null
    );
    await remoteLoad("http://webapi.amap.com/ui/1.0/main.js", null);
    initMap();
    // 高德  end
  }
});
</script>
<style lang="scss" scoped>
.m-map {
  min-width: 500px;
  min-height: 300px;
  position: relative;
}
.m-map .map {
  width: 100%;
  height: 100%;
}
.m-map .search {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 385px;
  z-index: 444;
}
.m-map .search input {
  width: 180px;
  border: 1px solid #ccc;
  line-height: 20px;
  padding: 5px;
  outline: none;
}
/* .m-map .search button{ line-height: 26px; background: #fff; border: 1px solid #ccc; width: 50px; text-align: center; } */
.m-map .result {
  max-height: 300px;
  overflow: auto;
  margin-top: 10px;
}
</style>