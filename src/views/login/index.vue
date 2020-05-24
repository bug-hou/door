<!--  -->
<template>
  <div id="logIn">
    <div class="input">
      <div class="head">
        <div :class="{active:show}" @click="mainshow=true,show=true">账号登录</div>
        <div :class="{active:!show}" @click="mainshow=false,show=false">短信登录</div>
      </div>
      <div class="title">
        <div>欢迎登录医站通</div>
        <div @click="register">没有账号?立即注册</div>
      </div>
      <div v-if="mainshow" ref="reg1">
    <input-item v-for="(item,index) in list1" :key="item.text" :item="item" @blur="regexp1(index)"></input-item>
    </div>
    <div v-else>
    <input-item v-for="(item,index) in list2" :key="item.text" :item="item" @blur.native="regexp2(index)"></input-item>
    </div>
    <div class="yanbox">
    <input class="yanzheng" type="text" placeholder="请输入验证码" v-model="yan"><div :style="{background:color}" class="div" @click="change">{{data}}</div>
    </div>
    <div class="login" @click="login">登录
      <p v-show="logshow">账号\密码\验证码错误\勾选规则</p>
    </div>

    <input type="checkbox" v-model="check" id="radio">
    <label for="radio">我同意<span>《药房网商城用户服务协议》</span></label>
    <div class="icon">
      <div class="iconfont icon-QQ"></div>
      <div class="iconfont icon-weixin"></div>
      <div class="iconfont icon-umidd17"></div>
      <div class="iconfont icon-iconfontweibowukuang-copy"></div>
    </div>
    </div>
  </div>
</template>

<script>
import inputItem from './input/input'

import request from '../../network/profile/user'
export default {
  name:"login",
  data () {
    return {
      list1:[
        {
          text:"账号",
          type:"text",
          placeholder:"请输入账号",
          show:false,
          button:"获取验证码",
          error:"账号格式错误",
          errshow:false,
          red:false
        },{
          text:"密码",
          type:"password",
          placeholder:"请输入密码",
          show:false,
          button:"获取验证码",
          error:"密码格式错误",
          errshow:false,
          red:false
        }
      ],
      list2:[
        {
          text:"手机号",
          type:"text",
          placeholder:"请输入手机号",
          show:true,
          button:"获取验证码",
          error:"手机号格式错误",
          errshow:false,
          red:false
        },{
          text:"验证码",
          type:"text",
          placeholder:"请输入验证码",
          show:false,
          button:"获取验证码",
          error:"密码格式错误",
          errshow:false,
          red:false
        }
      ],
      show:true,
      mainshow:true,
      id:false,
      pwd:false,
      yan:null,
      data:"",
      logshow:false,
      iid:null,
      ppwd:null,
      check:null,
      color:null
    };
  },

  created() {
    if(this.$store.state.status){
      this.$router.push("/profile");
    }else{
      this.data = this.random(false);
      this.color = this.random();
    }
  },

  components: {
    inputItem
  },

  computed: {
    
  },

  mounted(){},

  methods: {
    regexp1(index){
       const reg1 = /^\d{8,13}$/
       const reg2 = /^[0-9a-zA-Z_]{8,13}$/;
       var value = (this.$refs.reg1.children[index].children[1].value);
       if(index==0){
         if(reg1.test(value)){
           this.list1[index].errshow = false;
           this.list1[index].red = false;
           this.id=true;
           this.iid = value
         }else{
           this.id = false;
           this.list1[index].errshow = true;
           this.list1[index].red = true;
         }
       }
       else if(index==1){
         if(reg2.test(value)){
           this.list1[index].errshow = false;
           this.list1[index].red = false;
           this.pwd=true;
           this.ppwd = value;
         }else{
           this.pwd = false;
           this.list1[index].errshow = true;
           this.list1[index].red = true;
         }
       }
    },
    regexp2(index){
       const reg1 = /\d{11}/
       const reg2 = /^[0-9]{4}$/;
       var value = (this.$refs.reg1.children[index].children[1].value);
       if(index==0){
         if(reg1.test(value)){
           this.list1[index].errshow = false;
           this.list1[index].red = false;
           this.id=true;
         }else{
           this.id = false;
           this.list1[index].errshow = true;
           this.list1[index].red = true;
         }
       }
       else if(index==1){
         if(reg2.test(value)){
           this.list1[index].errshow = false;
           this.list1[index].red = false;
           this.id=true;
         }else{
           this.id = false;
           this.list1[index].errshow = true;
           this.list1[index].red = true;
         }
       }
    },
    random(boo=true){
        if(boo){
          return "rgb("+Math.floor(Math.random()*266)+","+Math.floor(Math.random()*266)+","+Math.floor(Math.random()*266)+")";
        }else{
          const str = "abcdefghijklmnopqrstuvwxyzt0123456789ABCDEFGHIJKLMNOPQRSTUWRXYZ";
          return str.charAt(Math.floor(Math.random()*str.length))+str.charAt(Math.floor(Math.random()*str.length))+str.charAt(Math.floor(Math.random()*str.length))+str.charAt(Math.floor(Math.random()*str.length));
        }
    },
    change(){
      this.data = this.random(false);
      this.color = this.random();
    },
    login(){
      if(this.id&&this.pwd&&this.yan==this.data&&this.check){
        request({
          id:this.iid,
          pwd:this.ppwd
        }).then(data=>{
          if(data.data){
             localStorage.setItem("time","");
             localStorage.setItem("foot","");
            this.$store.commit("addProfile",data.data);
            this.$router.push("/profile");
          }else{
        this.logshow = true;
        setTimeout(() => {
          this.logshow = false;
        }, 2000);
          }
        })
      }else{
        this.logshow = true;
        setTimeout(() => {
          this.logshow = false;
        }, 2000);
      }
    },
    register(){
      this.$router.push("/register");
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1814765_zxopmvlc0al.css);
span{
  color: rgb(21,128, 60);
  cursor: pointer;
}
.icon{
  width: 100%;
  height: 40px;
  margin: 10px 0;
}
.icon>div{
  display: inline-block;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  font-size: 30px;
  line-height: 40px;
  border-radius: 50%;
  color: white;
}
.icon>div:nth-child(1){
  background: #3ab1f7;
}
.icon>div:nth-child(2){
  background: #3baf34;
}
.icon>div:nth-child(3){
  background: #1abc9c
}
.icon>div:nth-child(4){
  background: #d72829;
}
.login{
  margin: 10px 0;
  width: 100%;
  height: 40px;
  background: #1abc9c;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  position: relative;
}
.login>p{
  position: absolute;
  bottom: 75%;
  font-size: 14px;
  left: 100px;
  color: red;
}
.yanbox{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
}
.yanzheng{
  width: 50%;
  height: 40px;
  font-size: 20px;
}
.div{
  width: 30%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  margin-right: 30px;
}
.title{
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  align-items: center;
  position: relative;
}
.title>div:nth-child(2):hover{
  cursor: pointer;
  text-decoration: underline;
  color: rgb(21,128, 60);
}
.active{
  border-bottom: 3px solid rgb(21,128, 60);
  color: rgb(21,128, 60);
}
.head>div:nth-child(1)::before{
  content: "";
  position: absolute;
  width: 1px;
  height: 20px;
  border-left: 1px solid #999;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
}
.head{
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  font-size: 25px;
  align-items: center;
  position: relative;
}
.input{
  position: absolute;
  left: 80%;
  top: 10%;
  background: white;
  transform: translate(-50%);
  padding: 10px 20px;
}
#logIn{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: calc(100% - 94px);
  background-image: url(~@/assets/image/login1.png);
}
</style>