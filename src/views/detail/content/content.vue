<!--  -->
<template>
  <div id="content">
      <div class="header">
          <div class="name">{{data.name}}</div>
          <div class="price">
              <span>商标:{{data.title}}</span><span>药品类型:{{data.type}}</span>
          </div>
      </div>
      <div class="content">
          <div class="title">
              <span :class="{active:show}" @click="show=true">商品详情</span><span :class="{active:!show}" @click="show=false">评价</span>
          </div>
          <div>
              <div v-if="sfshow" class="no">暂无商品详情</div>
              <div v-else class="yes" @click="big=true">
                  <ul class="box">
                      <li v-for="(item,index) in showdata" :key="index">{{item}}</li>
                  </ul>
              </div>
          </div>
      </div>
      <div v-if="big" class="big">
          <div class="iconfont icon-guanbi" @click="close"></div>
         <li v-for="(item,index) in showdata" :key="index">{{item}}</li>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        show:true,
        big:false,
        sfshow:false
    };
  },

  mounted() {
    //  this.sfshow = this.showdata.length<2?true:false;
     console.log(this.showdata);
  },

  props:{
      data:{
          default(){
              return Object;
          }
      },
      showdata:{
          default(){
              return [];
          },
          type:Array
      },
  },
  
  filters:{
  },

  components: {},

  computed: {
    //   sfshow(){
    //       console.log(this.showdata.length);
    //      return this.showdata.length<2?true:false;
    //   }
  },

  methods: {
      close(){
          this.big = false;
      }
  },
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1814765_x2rurwiqq5.css);
.iconfont{
    position: absolute;
    right: 30px;
    top: 30px;
    width: 50px;
    height: 50px;
    color: white;
    font-size: 35px;
    line-height: 50px;
}
.big>li:nth-child(odd){
  text-align: start;
  color: rgba(200, 200, 200, .8);
  justify-self: center;
  align-self: center;
  /* border-bottom: 1px dashed rgba(150, 150, 150, .8); */
  border-bottom: 1px solid rgba(150, 150, 150, .8);
}
.big>li{
    width: 100%;
    color: white;
    text-align: center;
    /* text-align: start; */
    line-height: 30px;
}
.big{
    display: grid;
    position: absolute;
    top: 20%;
    left: 50%;
    width: 1000px;
    transform: translateX(-50%);
    grid-template-columns: 200px 800px;
    grid-template-rows: repeat(2,auto);
    min-height: 600px;
    background: rgba(10, 10, 10, .7);
    z-index: 10;
    align-items: center;
    border-radius: 15px;
}
.no{
    font-size: 30px;
    color: #1abc9c;
    line-height: 100px;
}
.box{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: repeat(5,68px);
    justify-items: center;
    align-items: center;
    font-size: 16px;
    overflow: hidden;
}
.box>li:nth-child(odd){
  text-align: center;
  color: #666;
  font-size: 20px;
}
.box>li{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  height: 68px;
  line-height: 68px;
  text-align: start;
}
.yes,.no{
  width: 100%;
  height: 340px;
}
.title>.active{
  color: #1abc9c;
}
.title>span{
    width: 49%;
    color: #666;
    border-right: 1px solid #e1e1e1;
}
.title{
    width: 30%;
    font-size: 20px;
    height: 29px;
    display: flex;
    justify-content: space-around;
    color: white;
    line-height: 30px;
    border-bottom: 1px solid #e1e1e1;
}
.content{
    width: 100%;
    height: 370px;
    background: #f6f6f6;
    border-radius: 12px;
}
#content{
    padding-left: 15px;
    padding-top: 50px;
}
.name{
  width: 100%;
  height: 40px;
}
.price{
    display: flex;
    width: 60%;
    font-size: 20px;
    color: #1abc9c;
    justify-content: space-between;
    font-weight: bold;
}
.header{
    width: 100%;
    height: 80px;
    font-size: 25px;
    line-height: 40px;
    text-align: start;
}
</style>