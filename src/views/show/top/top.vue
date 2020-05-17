<!--  -->
<template>
  <div id="top">
      <div class="input">
          <input type="text" v-model="data" placeholder="请输入批准文号、通用名、商品名">
          <div class="iconfont icon-tubiao1">搜索</div>
          <ul class="list" v-show="show">
              <li v-for="(item,index) in list" :key="index">{{item}}</li>
          </ul> 
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

  components: {
  },

  computed: {},

  mounted(){},

  methods: {}
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
@import url(//at.alicdn.com/t/font_1814765_g5tk8ckytc.css);
#top{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>