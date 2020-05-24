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
              <div v-if="!showdata" class="no">暂无商品详情</div>
              <div v-else class="yes" @click="big=true">
                  <ul class="box">
                      <li v-for="(item,index) in showdata" :key="index">{{item}}</li>
                  </ul>
              </div>
          </div>
      </div>
      <div v-if="big" class="big">
         <li v-for="(item,index) in showdata" :key="index">{{item}}</li>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        show:true,
        big:false
    };
  },

  mounted() {
  },

  props:{
      data:{
          default(){
              return Object;
          }
      },
      showdata:{
          default:null
      },
  },
  
  filters:{
  },

  components: {},

  computed: {
      
  },

  methods: {
  },
}

</script>
<style scoped>
.big>li:nth-child(odd){
  text-align: center;
  color: rgba(100, 100, 100, .8);
  justify-self: center;
  align-self: center;
}
.big>li{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  height: 68px;
  line-height: 68px;
  text-align: start;
}
.big{
    display: grid;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 1000px;
    transform: translateX(-50%) translateX(-50%);
    grid-template-columns: 200px 800px;
    grid-template-rows: repeat(2,auto);
    background: rgba(10, 10, 10, .7);
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
  color: rgba(100, 100, 100, .8);
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
.active{
  color: #1abc9c;
}
.title>span{
    width: 49%;
    border-right: 1px solid rgba(100, 100, 100, .5);
}
.title{
    width: 30%;
    font-size: 20px;
    height: 29px;
    display: flex;
    justify-content: space-around;
    color: white;
    line-height: 30px;
    border-bottom: 1px solid rgba(100, 100, 100, .5);
}
.content{
    width: 100%;
    height: 370px;
    background: rgb(189, 187, 187);
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