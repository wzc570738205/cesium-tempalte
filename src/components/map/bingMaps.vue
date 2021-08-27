<template lang="">
   <div class="m-map">
    <div class="search" v-if="true">
      <el-select
        v-model="value"
        filterable
        remote
        reserve-keyword
        @change="handleMaps"
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in state.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div id="js-container" class="map">正在加载数据 ...</div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from "vue";
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
let loading = ref(false); //远程搜索地址 状态
let value = ref(""); //当前选择的地址
const state = reactive({
  options: [],
});
const remoteMethod = (query: any) => {
  if (query !== "") {
    loading.value = true;

    var requestOptions = {
      bounds: map.getBounds(),
      where: query,
      callback: function (answer: any, userData: any) {
        let dataMap = answer.results;
        //
        state.options = dataMap.map((res: any) => {
          let val = {
            label: res.name,
            value: res,
          };
          return val;
        });
        loading.value = false;
      },
    };
    searchManager.geocode(requestOptions);
  } else {
    state.options = [];
  }
};
const handleMaps = (e: any) => {
  //选择地址出发函数
  map.setView({ bounds: e.bestView });
  emit("drag", {
    address: e.name,
    location:e.location
  });
};
const initMapBing = () => {
  //地图初始化
  map = Microsoft.Maps.Map("#js-container", {
    credentials: YOUR_BING_MAPS_KEY,
    showSearchBar: false, //官方搜索
    // center: new Microsoft.Maps.Location(),
    // center: new Microsoft.Maps.Location(47.606209, -122.332071),
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 12,
  });
  var center = map.getCenter();
  //初始化拖拽模块
  var redPin = new Microsoft.Maps.Pushpin(
    new Microsoft.Maps.Location(center.latitude, center.longitude - 0.1),
    { color: "#f00", draggable: true }
  );

  map.entities.push(redPin);
  Microsoft.Maps.Events.addHandler(redPin, "drag", function (e) {});
  Microsoft.Maps.Events.addHandler(redPin, "dragend", function (e) {
    var searchRequest = {
      location: e.target.getLocation(),
      callback: function (r: any) {
        //Tell the user the name of the result.
   
         emit("drag", {
    address:r.name,
    location:e.location
  });
      },
      errorCallback: function (e: any) {
        //If there is an error, alert the user about it.
        alert("无法解析地址");
      },
    };
    //Make the reverse geocode request.
    searchManager.reverseGeocode(searchRequest);
  });
  Microsoft.Maps.Events.addHandler(redPin, "dragstart", function (e) {
    // highlight("pushpinDragStart", e);
  });
  //初始化 搜索
  Microsoft.Maps.loadModule("Microsoft.Maps.Search", function () {
    searchManager = new Microsoft.Maps.Search.SearchManager(map);
  });
};
onMounted(async () => {
  await nextTick();
  initMapBing();
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
  width: 285px;
  z-index: 444;
}
/* .m-map .search input {
  width: 180px;
  border: 1px solid #ccc;
  line-height: 20px;
  padding: 5px;
  outline: none;
} */
/* .m-map .search button{ line-height: 26px; background: #fff; border: 1px solid #ccc; width: 50px; text-align: center; } */
.m-map .result {
  max-height: 300px;
  overflow: auto;
  margin-top: 10px;
}
</style>