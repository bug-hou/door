<!--  -->
<template>
  <div id="header">
   <div class="header">{{header}}</div>
   <div class="box">
       <div class="title">品牌</div>
       <div class="list">
           <li v-for="(item,index) in titles" :key="index" @click="push(item)">{{item.title}}</li>
       </div>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props:{
    type:{
        default:""
    },
    titles:{
        default(){
            return []
        }
    }
  },

  components: {},

  computed: {
      header(){
          return "全部>"+this.type;
      },
      push(item){

      }
  },

  mounted(){},

  methods: {}
}

</script>
<style scoped>
#header{
    width: 65%;
    border-top: 1px solid #999;
    margin: auto;
}
.header{
    width: 100px;
    margin-left: 20px;
    height: 40px;
    line-height: 40px;
    color: #999;
    font-size: 18px;
}
.box{
    width: 100%;
    height: 100px;
    overflow: visible;
    position: relative;
}
.title{
    font-size: 40px;
    line-height: 100px;
    width: 20%;
    text-align: center;
    color: white;
    background: #999;
    display: block;
}
.title::after{
    content: "";
    height: 20px;
    width: 20px;
    transform: translateY(-15%) rotate(-45deg) translateX(5px);
    border-right:1px solid black ;
    border-bottom:1px solid black ;
    display: inline-block;
    transition: all .5s linear;
}
.box:hover>div{
    height: auto;
}
.title:hover::after{
    transform: translateY(-50%) rotate(45deg) translateX(5px);
}
.list{
    position: absolute;
    width: 80%;
    left: 20%;
    top: 0;
    z-index: 5;
    display: grid;
    grid-template-columns: repeat(10,10%);
    grid-template-rows: repeat(3,33px);
    color: #999;
    justify-items: center;
    align-items: center;
    height: 100px;
    overflow: hidden;
    background: white;
}
.list>li:hover{
    color: #1abc9c;
}
.list>li{
    height: 33px;
}
</style>