<!--  -->
<template>
  <div id="top">
      <div class="logo"><img src="~@/assets/image/logo.png" alt="">医站通</div>
        <div class="input">
          <input type="text" v-model="data" placeholder="请输入批准文号、通用名、商品名">
          <div class="iconfont icon-tubiao1" @click="dian">搜索</div>
          <ul class="list" v-show="show">
            <li v-for="(item,index) in list" :key="index" @click="push(item)">
                  <span>名字{{item.name}}</span><span>商标{{item.title}}</span>
              </li>
          </ul> 
      </div>
      <div class="guang">
        <img src="~@/assets/image/guang/guang1.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        data:"",
        show:true,
        list:[],
    };
  },

    watch: {
      data(){
         search({
             table:"medicine",
             data:this.data
         }).then(res=>{
            list = res.data;
         })
      }
  },

  components: {
  },

  computed: {},

  mounted(){}, 

  methods: {
      push(data){
          this.$router.push("/detail/"+data.id);
      },
    dian(){
          this.$router.push({
              path:"/goods",
              query:{
                  name:this.data
              }
          })
      }
  }
}

</script>
<style scoped>
.iconfont:before{
    margin-right: 10px;
}
.input>div{
    background: #1abc9c;
    outline: none;
    font-size: 28px;
    cursor: pointer;
    width: 153px;
    height: 44px;
    line-height: 44px;
    color: white;
}
.input>input{
    flex: 1;
    padding-left: 5px;
}
.input>ul{
    position: absolute;
    left: 0px;
    padding-left: 5px;
    background: rgba(100, 100, 100, .3);
    top: 44px;
    width: 100%;
}
.input>ul>li{
    height: 25px;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    color: rgba(100, 100, 100, .8);
    border-bottom: 1px solid black;
    display: flex;
}
.input>ul>li>span:nth-child(2){
    font-size: 13px;
}
.input{
    position: relative;
    width: 60%;
    height: 44px;
    border: 3px solid rgb(12, 185, 95);
    font-size: 16px;
    display: flex;
    justify-content: space-between;
}
input{
    outline: none;
    border: none;
}
@import url(//at.alicdn.com/t/font_1814765_g5tk8ckytc.css);
#top{
    width: 65%;
    height: 80px;
    display: flex;
    margin-left: 20%;
    justify-content: space-between;
    align-items: center;
}
.logo{
    height: 100%;
    font-size: 45px;
    color: rgb(21, 128, 60);
    width: 20%;
    line-height: 80px;
    text-align: center;
}
.logo>img{
    width: 40px;
    height: 40px;
}
.guang{
    flex: 1;
    height: 44px;
}
.guang>img{
    width: 100%;
    height: 100%;
}
</style>