<!--  -->
<template>
  <div class="item" @click="push">
      <div class="image"><img :src="item.hint" alt=""></div>
      <div class="content">
          <div class="main">
              <div class="name">名字:{{item.name}}</div>
              <div>{{time}}</div>
          </div>
          <div class="type">
              <div>类型:{{item.type}}</div>
              <div>商标:{{item.title}}</div>
          </div>
          <div class="icon">
              <div class="iconfont icon-lajitong" ref="delete"></div>
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
      item:null,
      time:null
  },
  filters:{
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
      push(e){
          const target = e.target||e.srcElement;
          if(target == this.$refs.delete){
            this.$bus.$emit('change1',this.item.id)
          }else{
              this.$router.push("/detail/"+this.item.id);
          }
      }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1814765_zxopmvlc0al.css);
.type{
    height: 50px;
    margin-top: 15px;
    width: 200px;
    text-align: start;
}
.type>div:nth-child(1){
    margin-bottom: 5px;
}
.name{
    color: #1abc9c;
    font-size: 18px;
}
.item{
    width: 90%;
    margin: auto;
    height: 80px;
    display: flex;
    align-items: center;
    background: #f5f5f5;
}
.image{
    width: 100px;
    height: 70px;
    margin-left: 10px;
}
img{
    width: 110px;
    height: 70px;
}
.content{
    flex: 1;
    padding: 0 30px 0 20px;
    font-size: 16px;
    height: 80px;
    justify-content: space-between;
    display: flex;
}
.main{
    display: flex;
    height: 80px;
    flex-direction: column;
    justify-content: space-around;
    text-align: start;
}
.content>.icon{
    width: 20%;
    height: 80px;
    font-size: 25px;
    color: #999;
    line-height: 80px;
}
</style>