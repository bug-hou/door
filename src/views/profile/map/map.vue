<!--  -->
<template>
  <div class="map">
    <div class="input">
      <div class="iconfont icon-tubiao1"></div>
    <input type="text" v-model="data" placeholder="小区/写字楼/学校">
    </div>
    <div class="box">
      <li v-for="(item,index) in list" :key="index" @click="data = item.name">
        <p>{{item.name}}</p>
        <p>{{item.district}}</p>
      </li>
    </div>
    <div class="chao">
      <div @click="que" >确定</div>
      <div @click="que">保存</div>
      <div @click="$emit('back')">返回</div>
    </div>
  </div>
</template>
<script>
// {{$store.state.location.addressComponent.province.replace("省","")}}
export default {
  data () {
    return {
       data:null,
       list:[]
    };
  },

  watch: {
    data(){
      this.getaddress();
    }
  },

  components: {},

  computed: {
  },

  methods: {
    que(){
      this.$store.commit("setaddress",this.data);
      this.$emit('back');
    },
    getaddress(){
      const self = this;
      AMap.plugin('AMap.Autocomplete', function(){
        // 实例化Autocomplete
        var autoOptions = {
        //city 限定城市，默认全国
        city: self.$store.state.location.addressComponent.city
        }
        var autoComplete= new AMap.Autocomplete(autoOptions);
        autoComplete.search(self.data, function(status, result) {
        self.list = result.tips;
        })
      })
    },
    cheng(){
      this.$axios("/api/posts/cities")
        .then(res => {
          // this.cityInfo = res.data;
          console.log(res)
          })

        //   // 处理key 计算key
        //   this.keys = Object.keys(res.data);
        //   // hotcities这个key移除掉
        //   this.keys.pop();
        //   // keys 排序
        //   this.keys.sort();
        //   this.$nextTick(() => {
        //     this.$refs.allcity.initScroll();
        //   });

        //   // 存储所有城市, 用来搜索过滤
        //   this.keys.forEach(key => {
        //     // console.log(key);
        //     this.cityInfo[key].forEach(city => {
        //       // console.log(city);
        //       this.allCities.push(city);
        //     });
        //   });
        // })
        // .catch(err => {
        //   console.log(err);
        // });
    },
  }
}
</script>
<style scoped>
.chao{
  margin: 35px auto;
  width: 360px;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.chao>div{
  width: 87px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  line-height: 40px;
  background: white;
}
.box{
  width: 360px;
  height: 430px;
  border-radius: 15px;
  background: white;
  margin: 15px auto 0;
}
.box>li{
  width: 300px;
  height: 42px;
  border-bottom: 1px solid #e5e5e5;
  margin: auto;
  text-align: start;
}
.box>li>p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box>li>p:nth-child(1){
  font-size: 18px;
  color: #666;
}
.box>li>p:nth-child(2){
  font-size: 14px;
  color: black;
}
.input{
  position: relative;
}
.input>div{
  position: absolute;
  left: 30px;
  top: 0;
  width: 50px;
  height: 40px;
  font-size: 30px;
  line-height: 40px;
  color: black;
}
.input>input{
  width: 360px;
  height: 40px;
  font-size: 23px;
  line-height: 40px;
  border: none;
  border-radius: 15px;
  padding-left: 50px;
  box-sizing: border-box;
}
input:focus{
  border: none;
  outline: none;
}
.map{
  padding-top: 30px;
  box-sizing: border-box;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  background: rgb(233, 233, 233);
  color: #666;
  width: 420px;
  height: 620px;
  border-radius: 15px;
}
</style>