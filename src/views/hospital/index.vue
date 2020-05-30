<!--  -->
<template>
  <div id="hospital">
   <top/>
   <goods name1="热门城市" :list="list" :data="hotdata" @change="change"></goods>
   <goods :name1="city" :list="citylist" :data="cityshow" @change="change" show="true" @rotate="rotate"></goods>
   <goods name1="等级类别" :list="otherlist" :data="otherdata" @change="change"></goods>
  </div>
</template>

<script>
import top from "@/components/comtent/top/top"

import show from "@/network/hospital/show"

import goods from "./goods/goods"
export default {
  data () {
    return {
      list:["北京","上海","深圳","重庆","武汉","南京"],
      current:0,
      hotdata:[],
      city:"",
      showhotdata:[],
      citylist:["成都","眉山","广元","绵阳","乐山","德阳"],
      citycurrent:0,
      citydata:[],
      cityshow:[],
      otherlist:["三甲","三乙","二甲","公立","民营","其它"],
      othercurrent:0,
      otherdata:[],
    };
  },

  components: {
    top,
    goods
  },

  created() {
    this.city = this.$store.state.location.addressComponent?this.$store.state.location.addressComponent.province:"四川省";
    this.gethotdata(this.list[this.current]);
    this.getcitydata(this.citylist[this.citycurrent]);
    this.getotherdata(this.otherlist[this.othercurrent]);
  },

  computed: {},

  mounted(){},

  methods: {
    gethotdata(item){
     show({
       address:item
     }).then(res=>{
       this.hotdata = res.data;
     }).catch(err=>{
       console.log("hospital error");
     })
    },
    getotherdata(item){
     show({
       address:item
     }).then(res=>{
       this.otherdata = res.data;
     }).catch(err=>{
       console.log("hospital error");
     })
    },
    getcitydata(item){
     show({
       address:item
     }).then(res=>{
       this.citydata = res.data;
       this.random();
     }).catch(err=>{
       console.log("hospital error");
     })
    },
    change(item,name){
      if(name == "热门城市")
      this.gethotdata(item);
      else if(name == this.city){
      this.getcitydata(item);
      }else if(name == "等级类别"){
      this.getotherdata(item);
      }
    },
    rotate(){
       this.random();
    },
    random(){
      this.cityshow = [];
      for(let i=0;i<12;i++){
         this.cityshow.push(this.citydata[Math.floor(Math.random()*this.citydata.length)]);
       }
    }
  }
}

</script>
<style scoped>
#hospital{
  margin: 94px auto 0;
}
</style>