<!--  -->
<template>
  <div class="index">
    <p class="title">{{titles}}</p>
    <div class="img">
   <slot></slot>
   </div>
   <div class="goods">
    <item v-for="(item,index) in data" :key="index" :item="item"></item>
   </div>
  </div>
</template>

<script>
import goods from '../../../network/home/home'
import item from './item'
export default {
  data () {
    return {
        data:null,
        page:1,
    };
  },

  props:{
    count:{
      default:10,
      type:Number
    },
    titles:{
      default:"fasfas"
    }
  },

  created() {
      goods({
          page:this.page,
          count:10,
          table:"medicine",
          type:this.titles.replace("食品","")
      }).then(data=>{
          this.data = data.data;
      })
  },

  components: {
    item,
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
.title{
  position: absolute;
  left: 0;
  bottom: 100%;
  font-size: 30px;
  color: #1abc9c;
}
.index{
  width:1200px;
  margin: 50px auto;
  height: 520px;
  display: flex;
  position: relative;
}
.img{
  height: 520px;
  height: 200px;
}
.goods{
  flex: 1;
  display: grid;
  grid-template-columns: repeat(5,200px);
  grid-template-rows: repeat(2,260px);
}
</style>