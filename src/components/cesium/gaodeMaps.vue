<template>
  <div class="cesium1box">
    <div id="gaodecesiumContainer"></div>
    <div class="search" >
      <el-form
        @submit.prevent=""
        @keyup.enter.native="handleSearch"
        :inline="true"
        class="demo-form-inline"
      >
        <el-form-item>
          <el-input
           class="input"
           v-model="searchKey" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </el-form-item>
      </el-form>
      <div id="js-result" v-show="searchKey" class="result"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, reactive, defineEmits, onMounted } from "vue";
import * as Cesium from "cesium";
import remoteLoad from "/@ts/plugins/remoteLoad";
// 高德地图 key
const MapKey = "94ed616c43643f5cabe33ac924b61fa5";
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
//https://lbs.amap.com/demo/jsapi-v2/example/thirdlayer/custom-grid-map/
const state = reactive({});
let searchKey = ref(""); //搜索地名key
let placeSearch: any = ref(null); //搜索函数
let tabCesiumRef: any = "";
const handleSearch = () => {
  if (searchKey.value) {
    placeSearch.value.search(searchKey.value,function (status:any, result:any) {
      console.log(result, status);
    });
  }
};
const tabCesium = (el: any) => (tabCesiumRef = el);
const init = () => {
   let AMapUI = window.AMapUI;
 let AMap = window.AMap;

  // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiOTJlMzA2ZS1iYTM0LTQzOTktOGU3Yi1iYmJlMzRmNmUwNDciLCJpZCI6NjcyOTEsImlhdCI6MTYzMTY3MzY1OH0.x7V-f8_176ls-NGKWbUuR7fZXXhtjLTGdIYMCEz3uE0";
  var viewer: any = new Cesium.Viewer("gaodecesiumContainer", {
    geocoder: false, // 隐藏搜索
    homeButton: false, // 隐藏主页
    sceneModePicker: false, // 隐藏二三维转换
    baseLayerPicker: false, // 隐藏图层选择控件
    navigationHelpButton: false, // 隐藏帮助按钮
    animation: false, // 隐藏时钟
    timeline: false, // 隐藏时间轴
    fullscreenButton: false, // 隐藏全屏
    vrButton: false, // 隐藏双屏模式
    infoBox: false, // 隐藏点击 entity 信息框
    selectionIndicator: false, // 隐藏点击 entity 绿框
    // 设置底图

    //  imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
    // url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
    // })
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
      url: "http://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      // url:'https://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&size=1&scl=1&style=8&ltype=11'
    }),
  });
  // 定位到全国
  // 中国坐标
  let chinaPosition = Cesium.Cartesian3.fromDegrees(
    106.435314,
    35.960521,
    7000000.0
  );
    AMapUI.loadUI(["misc/PositionPicker"], (PositionPicker: any) => {

    // 加载地图搜索插件
    AMap.service("AMap.PlaceSearch", () => {
      placeSearch.value = new AMap.PlaceSearch({
        pageSize: 5,
        pageIndex: 1,
        citylimit: true,
        city: "郑州",
        // map: map,
        panel: "js-result",
      });
    });
        function onComplete(date:any){
      viewer.camera.flyTo({
    destination:  Cesium.Cartesian3.fromDegrees(
        date.data.location.lng,
        date.data.location.lat,
        12000000
      ),
    duration: 2, // 飞行时间
    complete:()=>{
            viewer.camera.flyTo({
    destination:  Cesium.Cartesian3.fromDegrees(
        date.data.location.lng,
        date.data.location.lat,
        2000
      ),
    duration: 3, // 飞行时间
    complete:()=>{
      console.log('object :>> 飞行结束');
    }
    //offset: new Cesium.HeadingPitchRange(0.0, Cesium.Math.toRadians(-20.0)) // 偏移量
  });
    }
    //offset: new Cesium.HeadingPitchRange(0.0, Cesium.Math.toRadians(-20.0)) // 偏移量
  });
    
}
AMap.event.addListener(placeSearch.value, 'listElementClick', onComplete);
  });
  // viewer.camera.flyTo({
  //   destination: chinaPosition,
  //   duration: 1, // 飞行时间
  //   //offset: new Cesium.HeadingPitchRange(0.0, Cesium.Math.toRadians(-20.0)) // 偏移量
  // });
};

onMounted(async () => {
 
  if (window.AMap && window.AMapUI) {
    // 未载入高德地图API，则先载入API再初始化
      setTimeout(() => {
    init();
  }, 1000);
  } else {
    // 高德  start
    await remoteLoad(
      `http://webapi.amap.com/maps?v=1.4.15&key=${MapKey}`,
      null
    );
    await remoteLoad("http://webapi.amap.com/ui/1.0/main.js", null);
    // 高德  end
      setTimeout(() => {
    init();
  }, 1000);
  }
});
</script>

<style  scoped lang="scss" >
.cesium1box {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  .search {
    position: absolute;
    top: 40%;
    right: 10px;
    transform: translate(0%, -50%);
    z-index: 999;
    .demo-form-inline{
     
    }
.input {
   width: 250px;
}
 .result {
  max-height: 300px;
  overflow: auto;
  margin-top: 10px;
}
  }
}
#gaodecesiumContainer {
  height: 100%;
}
</style>
