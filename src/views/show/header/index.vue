<!--  -->
<template>
  <div id="header">
     <div class="list">
         <ul v-for="item in list" :key="item.title">
             <li @click="goods(item.title)">{{item.title}}</li>
             <div>
                 <li v-for="it in item.content" :key="it" :class="{active:random()}" @click="goods(it)">{{it}}</li>
             </div>
         </ul>
     </div>
     <div class="swiper">
       <swiper>
       </swiper>
     </div>
     <div class="box">
         <div class="logo">
             <img src="~@/assets/image/logo.png" alt="">
             <h2>医站通</h2>
         </div>
         <div class="icon">
             <p class="iconfont icon-zhengpin1">自营正品</p>
             <p class="iconfont icon-jiaoyi">担保交易</p>
             <p class="iconfont icon-yaoshi">药师服务</p>
         </div>
     </div>
  </div>
</template>

<script>
import swiper from "./swiper"
export default {
name:"goods",
  data () {
    return {
        list:[
            {
                title:"家廷常备",
                content:[
                    "体验套餐",
                    "计生避孕",
                    "补肾用药",
                    "养胃护胃",
                    "腰酸疼痛",
                    "男科用药",
                    "妇科用药",
                    "换季感冒",
                    "儿科用药"
                ]
            },{
                title:"中西药品",
                content:[
                    "肠胃用药",
                    "阳痿早泄",
                    "心脑血管",
                    "皮肤用药",
                    "肝胆用药",
                    "避孕药品",
                    "生发脱发",
                    "五官用药",
                    "补肾用药"
                ]
            },{
                title:"保健",
                content:[
                    "美容养颜",
                    "补肾强身",
                    "增强免疫",
                    "补维生素",
                    "调节血脂",
                    "减肥瘦身",
                    "缓解疲劳",
                    "纤体排毒",
                    "滋补养生"
                ]
            },{
                title:"医疗器械",
                content:[
                    "血压计",
                    "血糖仪",
                    "隐形眼镜",
                    "胎心仪",
                    "雾化器",
                    "助听器",
                    "避孕套",
                    "按摩器材",
                    "制氧机"
                ]
            },{
                title:"滋补养生",
                content:[
                    "蜂蜜",
                    "润肺养胃",
                    "补肾明目",
                    "美容养颜",
                    "提神醒脑",
                    "滋阴调胃",
                    "三七",
                    "冬虫夏草",
                    "提升免疫"
                ]
            }
        ],
    };
  },

  components: {
      swiper
  },

  filters:{
  },

  computed: {},

  mounted(){},

  methods: {
      random(){
          return Math.floor(Math.random()*1.5);
      },
      goods(goods){
         this.$router.push(
         {
            path:"/goods",
            query:{
                type:goods
            }
         });
      }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1814765_zxopmvlc0al.css);
.box{
    width: calc(100% - 16% - 800px);
    height: 505px;
    border-right: 1px solid #999;
}
.logo{
    width: 100%;
    height: 205px;
    font-size: 40px;
    color: #1abc9c;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px dashed #999;
}
img{
    width: 50px;
    height: 50px;
}
.icon>p{
  height: 99px;
  width: 100%;
  font-size: 25px;
  line-height: 100px;
  text-align: center;
  color: #1abc9c;
    border-bottom: 1px dashed #999;
}
.active{
    color: #1abc9c;
}
#header{
    width: 65%;
    margin: auto;
    display: flex;
}
.list{
    width: 16%;
    background: white;
    z-index: 5;
    border-left: 1px solid #666;
}
.list>ul{
    width: 100%;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid #666;
    position: relative;
    color: #666;
}
.list>ul>*{
    width: 50%;
}
.list>ul>li{
    font-size: 20px;
    text-align: center;
    font-weight: bold;
}
.list>ul>div{
    font-size: 14px;
    line-height: 50px;
    text-align: center;
    overflow: hidden;
    position: absolute;
    width: 40%;
    left: 60%;
    top: 0;
    height: 100px;
    background: white;
}
.list>ul>div>li{
    float: left;
    margin-right: 5px;
}
.list>ul:hover>div{
  width: 300px;
}
.list>ul>li{
    color: #1abc9c;
}
.list>ul>div>li:hover{
    color: #1abc9c;
    text-decoration: underline;
}
.swiper{
    width: 800px;
    height: 505px;
}
</style>
