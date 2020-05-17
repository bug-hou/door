<!--  -->
<template>
  <div id="header">
     <div class="list">
         <ul v-for="item in list" :key="item.title">
             <li>{{item.title}}</li>
             <div>
                 <li v-for="it in item.content" :key="it" :class="{active:random()}">{{it}}</li>
             </div>
         </ul>
     </div>
     <div class="swiper">
       <swiper>
       </swiper>
     </div>
     <div></div>
  </div>
</template>

<script>
import swiper from "./swiper"
export default {
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
                title:"中心药品",
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
                title:"健康保健",
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
          return Math.floor(Math.random()*3);
      }
  }
}

</script>
<style scoped>
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
