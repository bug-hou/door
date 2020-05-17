<!--  -->
<template>
  <div id="top">
      <div class="iconfont icon-yaoshiwenshu logo">医站通</div>
      <div class="input">
          <select name="" id="" class="select">
              <option value="商品" selected>商品</option>
              <option value="医院">医院</option>
          </select>
          <input type="text" v-model="data" placeholder="请输入批准文号、通用名、商品名">
          <div>搜索</div>
          <ul class="list" v-show="show">
              <li v-for="(item,index) in list" :key="index">{{item}}</li>
          </ul> 
      </div>
      <div class="iconfont icon-zhengpin">
           <span>{{str1}}</span>
           <span>{{str2}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        str1:"资质齐全品质保证",
        str2:"药房配送放心买药",
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
.input>select,.input>div{
    width: 80px;
    height: 100%;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
}
.input>div{
    background: rgb(12, 185, 95);
    outline: none;
    font-size: 18px;
    cursor: pointer;
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
    width: 45%;
    height: 40px;
    border: 3px solid rgb(12, 185, 95);
    font-size: 16px;
    display: flex;
    justify-content: space-between;
}
input{
    outline: none;
    border: none;
}
@import url(//at.alicdn.com/t/font_1796234_6u7qnbokunm.css);
@import url(//at.alicdn.com/t/font_1814765_3qj03pdgccj.css);
#top{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo{
    height: 100%;
    font-size: 40px;
    color: rgb(21, 128, 60);
    width: 20%;
    line-height: 120px;
    text-align: center;
}
#top>div:last-child::before{
    margin-right: 10px;
}
#top>div:last-child{
    color:rgb(207, 169, 61);
    height: 100%;
    font-size: 50px;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#top>div:last-child>span{
    font-size: 20px;
}
</style>