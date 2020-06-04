<!--  -->
<template>
  <div>
    <top/>
    <div class="box">
      <div class="image">
        <div class="iconfont icon-yiyuan iconfo">
        </div>
        <div class="foot">
          <div class="name">
            {{data.name}}
          </div>
          <div class="first"><span>医院性质:{{data.nature}}</span><span>医院等级:{{data.type}}</span></div>
          <div class="second">
            <span>日门诊量:{{data.count}}</span><span>床位数量:{{data.bedcount}}</span>
          </div>
        </div>
        <div class="iconf">
          <div>联系我们</div>
          <div class="icon">
            <div class="iconfont icon-pinglun"><p>评论</p></div>
            <div class="iconfont icon-dianhua1"><p>电话</p></div>
            <div class="iconfont icon-youjian"><p>短信</p></div>
            <div class="iconfont icon-weixin"><p>微信</p></div>
          </div>
        </div>
      </div>
      <div class="main">
        <img src="~@/assets/image/hospital1.png" alt="">
        <div>医院详情</div>
          <div class="box1">
            <div><span>特色</span><span>{{data.special|gaibian}}</span></div>
            <div><span>设备</span><span>{{data.equip|gaibian}}</span></div>
            <div><span>网址</span><span>{{data.network|gaibian}}</span></div>
            <div><span>地址</span><span>{{data.address|gaibian}}</span></div>
            <div><span>电话</span><span>{{data.phone|gaibian}}</span></div>
            <div><span>邮箱</span><span>{{data.email|gaibian}}</span></div>
            <div><span>路线</span><span>{{data.car|gaibian}}</span></div>
          </div>
      </div>
      <div class="varbat">
        <div>
          <div class="title">相关疾病</div>
          <div class="allerage">
            <li v-for="(item, index) in showallerage" :key="index">{{item}}</li>
          </div>
        </div>
        <div>
           <div class="title">相关医生</div>
          <div class="door">
            <div v-for="(item, index) in shownum" :key="index">
                <div>
                  <img :src="imglist[item]" alt="">
                </div>
                <div>
                  <div>{{namelist[item]}}</div>
                  <div>简介:{{data.name+","+datalist[item]}}</div>
                </div>
            </div>
          </div>
        </div>
        <div>
           <div class="title">相关文章</div>
          <div class="wen">
            <li v-for="(item, index) in showwen" :key="index">{{item}}</li>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import detail from "@/network/hospital/detail"

import top from "./top/top"
export default {
  name:"hosdetail",
  data () {
    return {
        data:{},
        alleragelist:["早产","流产","早孕","甲亢","脚气","痔疮","近视","鼻炎","胃病","风湿","结石","皮炎","洁癖","贫血","流感","乙肝","冻疮"],
        imglist:["http://odk-server-pro.bj.bcebos.com/image/1561358449935-19899-1c929c00-158b-4a01-8a35-aa46f0dff7d6.jpg@!nature",
                 "http://odk-server-pro.bj.bcebos.com/image/1557453852296-19895-25c92f4c-a1cf-4b2b-9fac-356a34ccfdac.jpg@!nature",
                 "http://odk-server-pro.bj.bcebos.com/image/1561018243241-23273-624b1be3-7715-4a65-ba89-f4726eea0376.jpg@!nature",
                 "http://odk-server-pro.bj.bcebos.com/image/1557299041412-19898-8e2801e7-3b32-4143-b609-d58e1d3da9c5.jpg@!nature",
                 "http://odk-server-pro.bj.bcebos.com/image/1560936899098-23415-fd349176-0bac-4973-8bc0-fc575e72aa1b.jpg@!nature",
                 "http://odk-server-pro.bj.bcebos.com/image/1560852269773-23281-c345ceee-de40-4ffe-8bf8-c03f53281180.jpg@!nature",
                 "http://odk-server-pro.bj.bcebos.com/image/1560852660900-23282-5f94881a-1d4e-4321-959c-a9b746fba56e.jpg@!nature",
                 "http://odk-server-pro.bj.bcebos.com/image/1560766083341-23285-7948b5d8-0550-4885-a318-13587317707e.jpg@!nature"],
        datalist:[
          "对围产期疾病、产科分娩、产科门诊颇有研究，临床经验丰富。",
          "对产科常见疾病颇有研究，擅长产科疑难手术，微创手术等，临床经验丰富。",
          "对新生儿疾病颇有研究，擅长各种新生儿疾病的危急重症临床处置，临床经验丰富。",
          "对产科常见疾病颇有研究，擅长异常妊娠状态处理，围产期健康问题。对产科的各种常见疾病，临床经验丰富。",
          "对医学影像学诊断、各类超声诊断颇有研究，擅长产科超声诊断、四维彩超、多普勒超声诊断等，临床经验丰富。",
          "对临床各种手术麻醉、分娩疼痛管理颇有研究，擅长无痛分娩、疼痛管理等疾病，临床经验丰富。",
          "对临床各种麻醉处置颇有研究，擅长无痛分娩麻醉和疼痛管理，临床经验丰富。",
          "对围产期疾病、早孕评估等疾病颇有研究，擅长围产期疾病的临床处置，临床经验丰富。"
        ],
        namelist:["钟华","袁守红","陈佩","王代燕","屛开凤","张杰","张青松","邱婷"],
        wenzhang:[
          "某些传染病和寄生虫病",
          "内分泌、营养和代谢疾病",
          "内分泌、营养和代谢疾病",
          "先天性畸形、变形和染色体异常",
          "肌肉骨骼系统和结缔组织疾病",
          "耳和乳突疾病",
          "黑素瘤和其它的皮肤恶性肿瘤",
          "妊娠、分娩和产褥期",
          "黑素瘤和其它的皮肤恶性肿瘤",
          "情感性精神障碍(心境障碍)",
          "脑瘫和其它的瘫痪综合症",
          "视觉障碍和失明",
          "视觉障碍和失明"
        ]
    };
  },

  created() {
      let id = this.$route.params.id;
      detail({
          id
      }).then(res=>{
         this.data = res.data;
      })
  },

  components: {
    top
  },

  filters:{
     gaibian(item){
       return item != ""? item:"当前暂无该信息";
     }
  },

  computed: {
    showwen(){
      let arr = [];
      for(let a=0;a<3;a++){
           arr.push(this.wenzhang[Math.floor(Math.random()*this.wenzhang.length)]);
      }
      return arr;
    },
    showallerage(){
      let arr = [];
      for(let a=0;a<6;a++){
           arr.push(this.alleragelist[Math.floor(Math.random()*this.alleragelist.length)]);
      }
      return arr;
    },
    shownum(){
      let arr = [];
      for(let a=0;a<2;a++){
        let num = Math.floor(Math.random()*8);
        arr[a] = num;
      }
      return arr;
    },
  },

  mounted(){},

  methods: {

    }
}
</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1814765_mu60izl7vmf.css);
.varbat>div:nth-of-type(1)>.title{
  transform: translateX(-15px);
}
.icon>div:nth-child(1){
  color: rgb(248, 135, 97);
}
.icon>div:nth-child(2){
  color: rgb(52, 165, 224);
}
.icon>div:nth-child(3){
  color: rgb(89, 214, 160);
}
.icon>div:nth-child(4){
  color: rgb(9, 187, 7);
}
.iconf>.icon{
  display: flex;
  font-size: 50px;
  justify-content: space-between;
  display: flex;
  height: 120px;
  align-items: center;
}
.icon>div{
  font-size: 40px;
}
.icon>div>p{
  font-size: 20px;
  color: black;
}
.iconf{
  width: 100%;
}
.iconf>div:nth-child(1){
  font-size: 25px;
  background: #1abc9c;
  color: white;
  border-radius: 10px;
}
.wen>li{
  margin-left: 60px;
  list-style: square;
  color: #2cb978;
}
.wen{
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3,33.3%);
  font-size: 20px;
  height: calc(100% - 40px);
  text-align: start;
}
.door>div>div>div:nth-child(1){
  font-size: 18px;
  text-align: start;
  color: #3b5441;
}
.door>div img{
  height: 80px;
  width: 80px;
  margin-right: 10px;
}
.door>div{
  height: 50%;
  width: 95%;
  display: flex;
  margin: auto;
  text-align: start;
}
.door{
    height: calc(100% - 40px);
    width: 100%;
}
.allerage{
  width: 100%;
  display: grid;
  height: calc(100% - 40px);
  grid-template-columns: repeat(4,18%);
  justify-content: space-around;
  grid-template-rows: 35px 35px;
  align-content: space-around;
  font-size: 18px;
  line-height: 35px;
}
.allerage>li:hover{
  background: #1abc9c;
}
.allerage>li{
  border: 1px solid #666;
  border-radius: 15px;
}
.varbat>div>div:nth-child(1)::after{
  content: "查看全部>";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 18px;
  color: #666;
}
.varbat>div>div:nth-child(1){
  width: 80%;
  margin: auto;
  font-size: 30px;
  color: #333;
  height: 40px;
  text-align: start;
  position: relative;
}
.varbat{
  width: 400px;
  display: flex;
  flex-direction: column;
}
.varbat>div{
  flex: 1;
}
.main>img{
  width: 100%;
}
.box1>div>span:nth-of-type(1){
  width: 20%;
  display: flex;
    justify-content: center;
  align-items: center;
}
.box1>div>span:nth-child(2){
  width: 80%;
  display: flex;
  align-items: center;
  text-align: start;
  font-size: 16px;
}
.box1>div{
  display: flex;
  min-height: 60px;
  width: 100%;
  border-bottom: 1px dashed #666;
  font-size: 25px;
}
.box1>div:last-child{
  border-bottom: none;
}
.box1{
  width: 100%;
  margin-top: 20px;
  background: #aaa;
  border-radius: 15px;
}
.main>div:nth-of-type(1){
  width: 90%;
  margin: auto;
  background: #1abc9c;
  color: white;
  font-size: 25px;
  height: 40px;
  line-height: 40px;
  border-radius: 15px;
}
.main{
  width: 500px;
  padding-top: 1px;
}
.first,.second{
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  font-size: 18px;
}
.name{
  font-size: 25px;
  color: #88bef5;
  width: 100%;
  height: 70px;
  text-align: start;
}
.box{
  display: flex;
  margin: auto;
  width: 1200px;
}
.image{
  width: 300px;
}
.iconfo{
  font-size: 250px;
  color: #1abc9c;
  height: 300px;
  width: 300px;
}
</style>