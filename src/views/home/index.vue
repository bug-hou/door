<!--  -->
<template>
  <div id="home" ref="home">
    <div class="img"><img src="../../assets/image/home1.png" alt=""></div>
    <div class="img"><img src="../../assets/image/home2.png" alt=""></div>
    <div class="img"><img src="../../assets/image/home3.png" alt=""></div>
    <div class="inputbox">
       <div class="title">
         <p>联系方式</p>
         <p>GET IN TOUCH</p>
       </div>
       <div class="box">
         <div class="input">
         <input type="text" placeholder="你的名字">
         <input type="text" placeholder="你的电话">
         <input type="text" placeholder="你的邮箱">
         <input type="text" placeholder="最佳预约时间">
         <textarea placeholder="留言"></textarea>
         </div>
         <div class="text">
           <div class="iconfont icon-dianhua">18783477145</div>
           <div class="iconfont icon-youjian">2510596084@qq.com</div>
           <div class="iconfont icon-weizhi">四川省眉山市彭山县锦江学院</div>
         </div>
       </div>
       <div class="footer">发送信息</div>
    </div>
    <div class="end"></div>
  </div>
</template>

<script>
export default {
  name:"home",
  data () {
    return {
    };
  },

  mounted() {
  if(this.$store.state.scroll){
    document.documentElement.scrollTop = 1300;
       this.$store.state.scroll = false;
     }
  },

  components: {
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1814765_8140s2ht7rk.css);
#home{
  margin-top: 94px;
  width: 100%;
  overflow-x: hidden;
}
.img{
  width: 100%;
  overflow-x: hidden;
}
img{
  width: 100%;
  font-size: 0;
}
.inputbox{
  width: 70%;
  margin: auto;
}
.title{
   width: 100%;
   line-height: 60px;
   height: 60px;
   font-size: 45px;
   color: #1abc9c;
}
.title>p:nth-child(2){
  font-size: 30px;
  text-decoration: underline;
}
.box{
  display: flex;
  margin-top: 30px;
}
.input{
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  height: 200px;
  align-content: space-around;
}
input{
  border: 1px solid #1abc9c;
  width: 47%;
  height: 40px;
  font-size: 18px;
  padding-left: 5px;
}
input:focus,textarea:focus{
  border: 1px solid #1abc9c;
}
textarea{
  height: 80px;
  width: 80%;
  border: 1px solid #1abc9c;
  line-height: 40px;
  font-size: 18px;
}
.text{
  margin-top: 30px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-items: start;
  justify-content: space-evenly;
  height: 200px;
  color: #1abc9c;
}
.text>div{
  font-size: 25px;
}
.footer{
  width: 200px;
  height: 40px;
  font-size: 20px;
  background: #1abc9c;
  color: white;
  border-radius:15px ;
  line-height: 40px;
  text-align: center;
}
.end{
  margin-top: 50px;
  width: 100%;
  height: 140px;
  background: #1abc9c;
}
</style>