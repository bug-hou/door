<!--  -->
<template>
<div>
  <top></top>
  <div id="detail">
      <first :big="big" :small="small"></first>
      <cont :data="data" class="con" :showdata="showdata"></cont>
  </div>
  <div id="foot">
    <div>
    <div class="tit">猜你喜欢</div>
    <div id="good">
      <goods :data="good"/>
    </div>
    </div>
    <div class="box2">
      <div class="price"><span>价格</span><span>{{price}}/盒</span></div>
      <div class="dan">
        <p>立即下单</p>
        <p @click.once="join">加入医疗箱</p>
      </div>
    </div>
    <div class="box1">
      <div>一小时内药必达</div>
      <div>
        <p>服务承诺</p>
        <p>医生咨询</p>
        <p>正品保证</p>
        <p>扫码验真</p>
      </div>
    </div>
  </div>
  <div class="show" v-show="showdiv">{{content}}</div>
</div>
</template>

<script>
import search1 from '@/network/search/search1'
import show from '@/network/profile/show'
import changeCar from '@/network/home/cars'

import goods from "@/components/comtent/list/index"
import top from "@/components/comtent/top/top"

import first from './header/head'
import cont from './content/content'

import {mapState} from "vuex"
export default {
    name:"detail",
  data () {
    return {
       big:[],
       small:[],
       data:{},
       image:"",
       showdata:null,
       good:[],
       showdiv:false,
       content:"已成功加载到我的医疗箱中"
    };
  },
  created() {
      const id = this.$route.params.id;
      search1({
          table:"medicine",
          id,
      }).then(data=>{
          this.data = (data.data);
          this.big = this.big.concat(this.data.big?this.img(this.data.big):this.data.hint);
          this.small = this.small.concat(this.data.small?this.img(this.data.small):this.data.hint);
          this.showdata = this.data.context?this.data.context.split(";"):null
      })
        let date = new Date();
        let minutes = date.getTime();
        let time = localStorage.getItem("time")?localStorage.getItem("time")+minutes+";":minutes+";";
        localStorage.setItem("time",time);
        let foot = localStorage.getItem("foot")?localStorage.getItem("foot")+id+";":id+";";
        localStorage.setItem("foot",foot);
  },

  components: {
      first,
      cont,
      top,
      goods
  },

  computed: {
    price(){
        return (Math.random()*101).toFixed(2);
      },
      ...mapState(["status"]),
  },

  mounted(){
  show({
      page:this.random(),
      count:2,
      table:"medicine"
    }).then(res=>{
      this.good = res.data;
      
    })
  },

  methods: {
      img(str){
          return str.split(";");
      },
      random(){
        return Math.floor(Math.random()*200);
      },
      join(){
        if(this.status){
      const date = new Date();
      const str = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+";";
      this.$store.commit("addCar",{
        id:this.data.id+";",
        str
      })
       changeCar({
        id:this.$store.state.profile.id,
        time:this.$store.state.profile.time,
        car:this.$store.state.car
      })
      this.content = "已成功加载到我的医疗箱中"
      }else{
         this.content = "你还没有登录，请登录后在进行操作"
         console.log("nihoah");
        }
      this.showdiv = true;
      setTimeout(() => {
        this.showdiv = false;
      }, 2000);
      }
  }
}

</script>
<style scoped>
.show{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  width: 300px;
  height: 200px;
  background: rgba(0, 0, 0, .5);
  color: #1abc9c;
  font-size: 35px;
  line-height: 50px;
  display: flex;
  align-items: center;
  border-radius: 15px;
}
.box1{
  width: 485px;
  margin-top: 15px;
  margin-left: 15px;
  height: 285px;
  background: #666;
  border-radius: 15px;
}
.box1>div:nth-child(2){
  width: 320px;
  margin: auto;
  display: grid;
  grid-template-rows:repeat(2,50px);
  grid-template-columns:repeat(2,160px);
  justify-items: center;
  align-items: center;
  font-size: 32px;
  color: #666;
}
.box1>div:nth-child(1){
  margin-top: 30px;
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 50px;
  color: #1abc9c;
}
.dan{
  width: 292px;
  height: 225px;
  margin-top: 10px;
  background: rgba(100, 100, 100, .3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* align-content: center; */
}
.dan>p{
  width: 200px;
  height: 75px;
  font-size: 35px;
  border-radius: 15px;
  line-height: 75px;
  font-weight: bold;
}
.dan>p:nth-child(1){
  background: #1abc9c;
  border: 1px solid rgb(172, 249, 234);
  color: white;
}
.dan>p:nth-child(2){
  background: rgb(172, 249, 234);
  color: rgb(12, 175, 160);
  border: 1px solid #1abc9c;
}
.price>span:nth-child(2){
  color: #1abc9c;
  font-size: 35px;
  line-height: 50px;
  margin-left: 30px;
}
.price>span:nth-child(1){
  font-size: 25px;
  height: 40px;
  display: inline-block;
  transform: translateY(-3px);
}
.price{
  width: 292px;
  height: 50px;
  color: rgba(100, 100, 100, .8);
  background: rgba(100, 100, 100, .5);
  border-radius: 15px;
  word-spacing: 5px;
}
.box2{
  width: 292px;
  margin-left: 8px;
  margin-top: 15px;
  height: 285px;
}
#foot{
  width: 1200px;
  margin: auto;
  display: flex;
}
#good{
  overflow: hidden;
  width: 400px;
  height: 260px;
}
.tit{
  width: 400px;
  height: 39px;
  font-size: 25px;
  line-height: 40px;
  text-align: start;
  color: #1abc9c;
  border-bottom: 1px solid rgba(100, 100, 100, .3);
}
#detail{
  width: 65%;
  margin: auto;
  display: flex;
}
.con{
  flex: 1;
}
</style>