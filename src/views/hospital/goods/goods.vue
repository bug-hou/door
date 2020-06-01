<!--  -->
<template>
  <div class="hot">
    <div class="box">
     <p class="city">{{name1}}</p>
     <div class="iconfont icon-f30 icon" :class="{rotate:rotate}" @click="change" v-if="show"></div>
     <div class="title">
       <li class="a" v-for="(item,index) in list" :key="index" :class="{active:current==index}" @click="current = index,$emit('change',item,name1)">{{item}}</li>
     </div>
     </div>
     <div class="show">
        <div @click="$router.push('/hosdetail/'+item.id)" v-for="(item,index) in data" :key="index" :title="item.name">{{item.name}}</div>
     </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      current:0,
      rotate:false,
      sfdian:true
    };
  },

  props:{
      name1:null,
      list:{
          default(){
              return [];
          }
      },
      data:{
        default(){
          return []
        }
      },
      show:{
        default:false
      }
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
    change(){
       if(this.sfdian){
         this.rotate = true;
         this.sfdian = false;
         setTimeout(()=>{
          this.rotate = false;
         },1000)
         this.$emit("rotate");
         setTimeout(()=>{
           this.sfdian = true
         },5000)
       }
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1814765_l0d3h4x2c6.css);
@keyframes move{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.show>div:hover{
  color: #1abc9c;
}
.rotate{
  animation: move 1s linear forwards;
}
.icon{
  position: absolute;
  bottom: 10px;
  right: 170px;
  font-size: 25px;
  color: #1abc9c;
}
.show{
 width: 100%;
 display: grid;
 grid-template-columns: repeat(3,33.3%);
 grid-template-rows: repeat(4,25%);
 overflow: hidden;
 font-size: 16px;
 align-items: center;
 justify-items: start;
 height:160px;
 margin: 20px 0 19px;
}
.show>div{
   width: 100%;
   height: 100%;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   text-align: start;
}
.active{
  color: #1abc9c;
}
.city{
  width: 100%;
  font-size: 30px;
  color: #666;
  height: 60px;
  line-height: 60px;
  text-align: start;
}
.a{
  font-weight: bold;
}
.title{
  display: flex;
  height: 39px;
  width: 60%;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
  color: #666;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.hot{
  width: 1200px;
  margin: auto;
  /* border-top: 1px solid #1abc9c; */
  border-top: 1px solid rgba(177, 177, 177,.5);
  height: 299px;
}
.box{
  width: 100%;
  height: 99px;
  color: #666;
  border-bottom: 1px solid rgba(177, 177, 177,.5);
  position: relative;
}
</style>