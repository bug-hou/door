<!--  -->
<template>
  <div id="top">
      <div class="input">
          <input type="text" v-model="data" placeholder="请输入批准文号、通用名、商品名">
          <div class="iconfont icon-tubiao1" @click="dian">搜索</div>
          <ul class="list" v-show="show">
              <li v-for="(item,index) in list" :key="index" @click="push(item)">
                  <span>名字{{item.name}}</span><span>商标{{item.title}}</span>
              </li>
          </ul> 
      </div>
  </div>
</template>

<script>
import search from '@/network/search/search2'
export default {
  data () {
    return {
        data:"",
        show:true,
        list:[],
    };
  },

  components: {
  },

  watch: {
      data(){
         search({
             table:"medicine",
             data:this.data
         }).then(res=>{
            this.list = res.data;
         })
      }
  },

  computed: {},

  mounted(){},

  methods: {
      push(data){
          this.$router.push("/detail/"+data.id);
          let arr = [];
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
    height: 54px;
    line-height: 54px;
    color: white;
}
.input>input{
    flex: 1;
    padding-left: 5px;
}
.input>ul{
    position: absolute;
    left: -2px;
    background: rgba(100, 100, 100, .3);
    top: 54px;
    right: -2px;
    width: 100%;
    max-height: 156px;
    overflow: hidden;
}
.input>ul>li{
    height: 30px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: rgba(100, 100, 100, .8);
    border-bottom: 1px solid black;
    display: flex;
}
.input>ul>li>span:nth-child(2){
    font-size: 15px;
}
.input{
    position: relative;
    width: 923px;
    height: 54px;
    border: 3px solid rgb(12, 185, 95);
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50px);
}
input{
    outline: none;
    border: none;
}
@import url(//at.alicdn.com/t/font_1814765_zxopmvlc0al.css);
#top{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>