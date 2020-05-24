<!--  -->
<template>
  <div id="varbat">
    <!-- <div class="loca iconfont icon-location1" :title="$store.state.address">
      {{$store.state.address}}
    </div> -->
    <div class="logo">
      <img src="~@/assets/image/register.png" alt="">
    </div>
    <div class="box">
    <item path="/home">
    <div class="a">首页</div>
    </item>
    <item path="/show">
    <div class="a">推荐</div>
    </item>
    <item path="/hospital">
    <div class="a">医院</div>
    </item>
    <div class="a">联系医生</div>
    <item path="/cars">
    <div class="a">收藏夹</div>
    </item>
    <item path="/profile">
    <div class="a">个人中心</div>
    </item>
      <item path="/login">
    <div class="a">登录/注册</div>
    </item>
    <div class="a" @click="lian">联系</div>
    </div>
    <div v-if="show" class="me a">
      <div class="img">未登录</div>
      <p>请登录</p>
    </div>
    <div v-else class="me">
      <div class="img"><img :src="me.header" alt=""></div>
      <p>{{me.name}}</p>
    </div>
  </div>
</template>

<script>
import item from './item'
export default {
  data () {
    return {
      me:{}
    };
  },

  components: {
    item
  },

  computed: {
    show(){
      if(this.$store.state.status){
        this.me = this.$store.state.profile;
        return false
      }else
      return true
    }
  },

  mounted(){},

  methods: {
    lian(){
       this.$store.state.scroll = true;
      this.$router.push("/home");
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1814765_zxopmvlc0al.css);
.a:hover{
  color: #1abc9c;
}
#varbat{
  overflow-x: hidden;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 94px;
  background: white;
    display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.logo{
   position: absolute;
   left: 50px;
   top: 0;
   bottom: 0;
   line-height: 94px;
   font-size: 61px;
   color: #1abc9c;
   cursor: pointer;
}
.logo>img{
  width: 200px;
  height: 50px;
}
.box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 57%;
  height: 35px;
  margin: 30px 0 29px;
  font-size: 25px;
   color: #999;
}
.me{
  position: absolute;
  right: 30px;
  top: 10px;
  height: 74px;
  width: 100px;
}
.img{
  width: 60px;
  height: 60px;
  background: #999;
  font-size: 14px;
  line-height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
img{
  width: 100%;
  height: 100%;
}
p{
  color: #1abc9c;
  font-size: 16px;
  margin-left: -37px;
  text-align: center;
}
</style>