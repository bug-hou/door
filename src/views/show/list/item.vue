<!--  -->
<template>
  <div class="item" @click="push">
      <div class="img"><img :src="item.hint" alt=""></div>
      <div class="main">
          <p>{{item.name|replace}}</p>
        <div>
          <p>{{item.price}}</p>
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
      item:{}
  },
  created() {
    this.price();
  },

  filters:{
    replace(item){
        return item.replace(":","");
    }
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
    price(){
      this.item.price = '￥'+(Math.random()*100).toFixed(2) + "元";
    },
    push(){
      this.$router.push("/detail/"+this.item.id);
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1814765_zxopmvlc0al.css);
img:hover{
  transform: scale(1.5);
}
.iconfont{
  color: white;
}
.img{
  width: 150px;
  height: 200px;
  margin: auto;
  overflow: hidden;
}
img{
  width: 150px;
  height: 200px;
  transition: all 1s linear;
}
.main>div{
  width: 160px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  font-size: 24px;
  color: #1abc9c; 
}
.main>p{
  color: black;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>