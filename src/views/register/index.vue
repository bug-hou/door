<!--  -->
<template>
<div>
  <div id="int">
    <div v-show="show" class="show">
      该账号已经存在请重新选择
    </div>
    <img src="~@/assets/image/register.png" alt="">
    <p>欢迎注册医站通账号</p>
    <input-item :item="list1"></input-item>
    <p>
      请设置登录密码
    </p>
    <input-item :item="list2"></input-item>
    <input-item :item="list3"></input-item>
    <p>请设置用户名</p>
    <input-item :item="list4"></input-item>
    <p>绑定手机</p>
    <input-item :item="list5"></input-item>
    <div class="button" @click="button">提交</div>
  </div>
  </div>
</template>

<script>
import inputItem from './input/input'

import add from "@/network/profile/add"
export default {
  data () {
    return {
        list1:{
          text:"账号",
          type:"text",
          placeholder:"请输入账号",
          show:false,
          button:"获取验证码",
          error:"账号只能由8,13的数字组成",
          errshow:false,
          red:false,
          data:null,
          index:1
        },
        list2:{
          text:"密码",
          type:"password",
          placeholder:"请输入密码",
          show:false,
          button:"获取验证码",
          error:"密码可由数字，字母，下划线组成",
          errshow:false,
          red:false,
          data:null,
          index:2
        },
        list3:{
          text:"密码",
          type:"password",
          placeholder:"请确认密码",
          show:false,
          button:"获取验证码",
          error:"密码不一致",
          errshow:false,
          red:false,
          data:null,
          index:0
        },
        list4:{
          text:"名字",
          type:"text",
          placeholder:"请输入用户名",
          show:false,
          button:"获取验证码",
          error:"名字长度不超过5个字",
          errshow:false,
          red:false,
          data:null,
          index:3
        },
        list5:{
          text:"手机",
          type:"text",
          placeholder:"请输入手机号",
          show:false,
          button:"获取验证码",
          error:"号码格式错误",
          errshow:false,
          red:false,
          data:null,
          index:4
        },
        reg:[
          /^\d{8,13}$/,
          /^[0-9a-zA-Z_]{8,13}$/,
          /^.{2,6}$/,
          /^\d{11}$/,
        ],
        obj:{},
        pwd:false,
        show:false
    };
  },

  components: {
    inputItem
  },

  computed: {},

  mounted(){
    this.$bus.$on("blur",obj=>{
      if((obj.item.index == 0)){
        if(this.obj[1]!=obj.data&&obj.data!=null){
          obj.item.red = true;
            this.pwd = false;
          obj.item.errshow = true;
        }else{
            obj.item.red = false;
            obj.item.errshow = false;
            this.pwd = true;
        }
      }else{
         if(this.reg[obj.item.index-1].test(obj.data)){
           this.obj[obj.item.index-1] = obj.data;
            obj.item.red = false;
            obj.item.errshow = false;
         }else{
            obj.item.red = true;
            obj.item.errshow = true;
         }
      }
    });
  },

  methods: {
    button(){
       if((!this.list1.errshow)&&(!this.list2.errshow)&&(!this.list4.errshow)&&(!this.list5.errshow)&&this.pwd){
         add({
           id:this.obj[0],
           pwd:this.obj[1],
           name:this.obj[2],
           sex:null, 
           malady:null,
           allergies:null,
           age:null,
           personily:null,
           header:null,
           phone:this.obj[3]
         }).then(res=>{
           if(res.data){
             localStorage.setItem("time","");
             localStorage.setItem("foot","");
              this.$store.commit("addProfile",res.data[0])
              this.$router.push("/profile");
           }else{
              this.show = true;
              setTimeout(() => {
                this.show = false;
              }, 2000);
           }
         })
       }
    }
  }
}

</script>
<style scoped>
.show{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 200px;
  height: 100px;
  padding: 50px 0;
  background: #1abc9c;
  color: white;
  line-height: 50px;
  font-size: 25px;
  z-index: 10;
  border-radius: 15px;
}
.button{
  color: white;
  background: #1abc9c;
  font-size: 25px;
  line-height: 50px;
  width: 72%;
  height: 50px;
  margin: 20px auto;
  border-radius: 15px;
  position: relative;
}
.button:hover::after{
  filter: blur(30px);
  position: absolute;
  left: -5px;
  top: -5px;
  bottom: -5px;
  right: -5px;
  background: #1abc9c;
  content: "";
}
img{
  width: 60%;
  height: 60px;
  margin: 20px 0;
}
#int{
  width: 25%;
  margin: 140px auto;
  border: 1px solid #999;
  /* background: #aaa; */
}
#int>p{
  font-size: 18px;
  font-weight: bold;
  text-align: start;
  margin-left: 65px;
  margin-top: 5px;
}
</style>