<template>
  <div id="app">
    <varbat></varbat>
    <keep-alive exclude="home,detail,goods,profile,login,good,hosdetail">
    <router-view  class="view"/>
    </keep-alive>
  </div>
</template>
<script>
import varbat from '@/components/common/varbat/varbat'
export default {
  name:"app",
  components:{
    varbat
  },
  created(){
    this.getLocation();
  },
  methods: {
    getLocation(){
      const self = this;
      AMap.plugin('AMap.Geolocation', function() {
      var geolocation = new AMap.Geolocation({
    // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
    // 设置定位超时时间，默认：无穷大
        timeout: 10000,
  })

  geolocation.getCurrentPosition()
  AMap.event.addListener(geolocation, 'complete', onComplete)
  AMap.event.addListener(geolocation, 'error', onError)

  function onComplete (data) {
    // data是具体的定位信息
    self.$store.commit("addLocation",data);
  }

  function onError (data) {
    // 定位出错
    self.getlonlat();
  }
})
    },
    getlonlat(){
      const self = this;
      AMap.plugin('AMap.CitySearch', function () {
      var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
      // 查询成功，result即为当前所在城市信息
        AMap.plugin('AMap.Geocoder', function() {
        var geocoder = new AMap.Geocoder({
        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
        city: result.adcode
      })
 
      var lnglat = result.rectangle.split(";")[0].split(",");

        geocoder.getAddress(lnglat, function(status, data) {
          if (status === 'complete' && data.info === 'OK') {
              // data为对应的地理位置详细信息
              self.$store.commit("addLocation",data.regeocode);
              }
            })
          })
        }
      })
    })
    }
  },
}
</script>
<style>
@import url(./assets/css/base.css);
@import url(//at.alicdn.com/t/font_1814765_zxopmvlc0al.css);
.view{
  margin-top: 94px;
  overflow-x: hidden;
}
#app{
  overflow-x: hidden;
}
</style>
