<!--  -->
<template>
  <div class="box">
      <div class="title">{{item.title}}</div>
      <div class="main">
          <div class="img">
              <div v-for="(it, index) in item.img" :key="index">
                  <div>{{it}}</div>
                  <img src="~@/assets/image/door1.png" alt="">
              </div>
          </div>
          <div class="list">
              <div v-for="(it, index) in item.list" :key="index">{{it}}</div>
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
      item:{
          default(){
              return {};
          }
      }
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
.list{
    color: #666;
    font-size: 14px;
}
.list>div{
    height: 18px;
}
.img{
    width: 400px;
    display: flex;
    margin-bottom: 8px;
}
.img>div>div:nth-child(1){
    font-size: 18px;
    margin-bottom: 21px;
    color: #666;
    text-align: start;
}
.img>div{
    flex:1;
}
img{
    width: 150px;
    height: 120px;
}
.main{
    width: 400px;
}
.title{
    width: 200px;
    font-size: 25px;
    color: #666;
}
.box{
    width: 750px;
    margin: 30px auto;
    display: flex;
    text-align: start;
}
</style>