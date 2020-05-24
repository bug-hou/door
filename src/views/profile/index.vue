<!--  -->
<template>
  <div>
    <div class="profile">
      <div class="left">
        <div class="all">服务</div>
        <ul>
          <li v-for="(item,index) in list" :key="index" @click="push(index)" :class="{active:current == index}">{{item}}</li>
        </ul>
      </div>
      <div class="main">
        <div class="header">
            <div class="head"><img :src="profile.header" alt=""></div>
            <div class="box">
          <div class="first">
            <div>{{profile.name}}</div>
            <div class="me">个人简介</div>
            <div class="iconfont icon-location1 icon" :title="address">{{address}}</div>
          </div>
          <div class="second">
            <ul>
              <li class="b">电话</li>
              <li class="b">性别</li>
              <li class="b">年龄</li>
              <li class="b">病例</li>
              <li class="b">过敏</li>
              <li class="a">{{profile.phone}}</li>
              <li class="a">{{profile.age|extis}}</li>
              <li class="a">{{profile.sex|extis}}</li>
              <li class="a">{{profile.malady|extis}}</li>
              <li class="a">{{profile.allergies|extis}}</li>
            </ul>
          </div>
          </div>
        </div>
        <div class="footer">
          <div class="title">{{list[current]}}</div>
          <div>
            <router-view class="child" :item="show[current]"></router-view>
          </div>
        </div>
        <div></div>
      </div>
      <div class="right">
        <div class="date">
          <div class="hea">我的日历</div>
          <div class="mai">
            <div>{{day}}</div>
            <div>{{"星期"+week}}</div>
            <div>{{year+" "+month}}</div>
          </div>
        </div>
        <div class="help">帮助</div>
        <div class="foot">
          <p>我要充值</p>
          <p>我要成为会员</p>
          <p>邀请好友</p>
          <p>申请成为医生</p>
          <p>骑手招募</p>
          <p>我要投诉</p>
        </div>
      </div>
    </div>
    <div class="tit">猜你喜欢</div>
    <div id="good">
      <goods :data="good"/>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

import goods from "@/components/comtent/list/index"

import show from '@/network/profile/show'
export default {
  name:"profile",
  data () {
    return {
      profile:{},
      list:[
        "我的购物车",
        "我的足迹",
        "我的病史",
        "过敏情况",
        "我的信息",
        "我的钱包",
        "医闪付"
      ],
      path:[
        "/profile/car",
        "/profile/foot",
        "/profile/malady",
        "/profile/allergies",
        "/profile/count",
        "/profile/money",
        "/profile/pay"
      ],
      show:{},
      current:0,
      year:"",
      month:"",
      day:"",
      week:"",
      good:[]
    };
  },

  created(){
    if(!this.$store.state.status){
      this.$router.push("/login");
    }else{
      this.profile=this.$store.state.profile;
      this.show[0] = this.$store.state.car;
      this.show[1] = localStorage.getItem("foot")?localStorage.getItem("foot"):null;
      this.show[2] = this.profile.malady;
      this.show[3] = this.profile.allergies;
      this.show[4] = this.profile;
    }
  },

  beforeMount() {
    let date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth()+1;
    if(this.month<10){
      this.month = "0"+this.month;
    }
    this.day = date.getDate();
    if(this.day<10){
      this.day = "0"+this.day;
    }
    this.week = date.getDay();
    switch (this.week) {
      case 0:{
        this.week = "天";
        break;
      }
      case 1:{
        this.week = "一";
        break;
      }
      case 2:{
        this.week = "二";
        break;
      }
      case 3:{
        this.week = "三";
        break;
      }
      case 4:{
        this.week = "四";
        break;
      }
      case 5:{
        this.week = "五";
        break;
      }
      case 6:{
        this.week = "六";
        break;
      }
    }
    show({
      page:this.random(),
      count:6,
      table:"medicine"
    }).then(res=>{
      this.good = res.data;
    })   
  },

  components: {
    goods
  },

  filters: {
    extis(item){
      return item?"\n"+item:"\n未填写";
    }
  },

   computed: {
     ...mapState(["address"]),
     split(item){
       return item.split(";");
     },
   },

  mounted(){},

  methods: {
    push(index){
      this.current = index;
      this.$router.push(this.path[index]);
    },
    random(){
      return Math.floor(Math.random()*91);
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1814765_zxopmvlc0al.css);
#good{
  height: 260px;
  overflow: hidden;
}
.tit{
  width: 65%;
  margin: auto;
  height: 40px;
  line-height: 40px;
  color: #1abc9c;
  text-align: start;
  font-size: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, .3);
}
.right>.foot>p{
  width: 100%;
  height: 54px;
  line-height: 54px;
  text-align: start;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  font-size: 23px;
  border-right: 1px solid rgb(0, 0, 0);
}
.help{
  width: 100%;
  height: 41px;
  background: rgb(1, 171, 156);
  color: white;
  line-height: 40px;
  font-size: 20px;
}
.right{
  width: 20%;
  color: rgb(110, 200, 132);
}
.hea{
  width: 100%;
  height: 60px;
  background: rgb(110, 200, 132);
  color: white;
  font-size: 25px;
  line-height: 60px;
}
.date{
  width: 100%;
  height: 167px;
  margin-bottom: 10px;
}
.date>.mai{
  width: 100%;
  height: 105px;
  display: flex;
  /* justify-content: center; */
  color: rgb(110, 200, 132);
  /* margin-bottom: 10px; */
  box-shadow: 0 5px 10px rgb(100, 100, 100);
  font-size: 16px;
  flex-direction: column; 
}
.date>.mai>div:nth-child(1){
  font-size: 30px;
}
.footer{
  width: 100%;
  margin-top: 10px;
}
.footer>.title{
  width: 100%;
  height: 47px;
  background: #ccc;
  font-size: 20px;
  font-weight: bold;
  line-height: 47px;
}
.child{
  width: 100%;
  height: 370px;
  border-bottom: 1px solid #999;
}
.me{
  width: 50%;
  height: 40px;
  font-size: 25px;
  font-weight: bold;
  line-height: 40px;
}
.icon{
  width: 20%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.b{
  font-size: 20px;
}
.a{
  font-size: 18px;
  color: #1abc9c;
}
.box>.first{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #1abc9c;
  align-items: center;
  height: 40px;
  width: 100%;
}
.box>.second>ul{
  display: grid;
  grid-template-columns: repeat(5,20%);
  width: 100%;
  height: 80px;
  grid-template-rows: 40px;
}
.box>.second>ul>li{
  line-height: 40px;
  align-items: center;
    white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.header{
  width: 100%;
  height: 120px;
  display: flex;
  background: #ddd;
}
.header>.box{
  display: flex;
  flex-direction: column;
  width: 88%;
  height: 120px;
}
.header>.head{
  width: 12%;
  height: 40px;
}
.header>.head>img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.profile{
  width: 65%;
  margin: auto;
  display: flex;
  border-left:1px solid #999 ;
}
.left{
  width: 20%;
}
.left>ul{
  width: 100%;
  flex-direction: column;
  font-size: 25px;
  display: flex;
}
.left>ul>li{
  height: 60px;
  border-bottom: 1px dashed #999;
  text-align: start;
  padding-left: 60px;
  line-height: 60px;
}
.left>ul>li::after{
  content: "";
  height: 10px;
  width: 10px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  transform: rotate(-45deg);
  display: inline-block;
}
.active{
  color: #1abc9c;
}
.main{
  width: 60%;
}
.all{
  width: 100%;
  height: 120px;
  font-size: 40px;
  line-height: 80px;
  text-align: center;
  color: #1abc9c;
  border-bottom:1px solid #999 ;
}
</style>