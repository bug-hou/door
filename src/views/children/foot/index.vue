<!--  -->
<template>
  <div id="car">
    <div v-if="show" class="no">
      你还没有浏览过商品
    </div>
    <div v-else class="all">
        <goods v-for="(item,index) in showdata" :key="item.id" :item="item" :time="changeTime(time[getindex(index)])"></goods>
    </div>
    <paging class="paging" v-show="!show"/>
</div>
</template>

<script>
import paging from '@/components/common/paging/paging'

import goods from "@/components/comtent/goods/goods"

import request from '@/network/search/search1'
export default {
  data () {
    return {
      list:[],
      show:true,
      data:[],
      pag:4,
      time:[],
      current:0,
    };
  },

  created(){
    this.list = localStorage.getItem("foot")?localStorage.getItem("foot").split(";"):[];
    this.time = localStorage.getItem("time")?localStorage.getItem("time").split(";"):[];
    if(localStorage.getItem("foot")){
      this.list.pop();
      this.show = false;
      for(let i=0;i<this.list.length;i++){
            request({
              table:"medicine",
              id:this.list[i]
            }).then(data=>{
              this.data.push(data.data);
            })
        }
    }
  },

  components: {
    paging,
    goods
  },

  computed: {
    showdata(){
      if(this.data.length>this.current*4+4)
      return this.data.slice(this.current*4,this.current*4+4)
      else
      return this.data.slice(this.current*4,this.data.length)
      }
  },

  mounted(){
    this.$bus.$on("change1",item=>{
      let i = this.list.indexOf(item);
      this.list.splice(i,1)
      this.data.splice(i,1);
      let time = localStorage.getItem("time")?localStorage.getItem("time").replace(this.time[i]+";",""):"";
      let foot = localStorage.getItem("foot")?localStorage.getItem("foot").replace(item+";",""):"";
      localStorage.setItem("foot",foot);
      localStorage.setItem("time",time);
      if(this.data.length==0){
          this.show = true;
      }
    })
    this.$bus.$on("change",item=>{
      this.current = item-1;
    })
  },

  methods: {
    changeTime(time){
      let time1 = new Date(parseInt(time));
      return time1.getFullYear()+"-"+(time1.getMonth()+1)+"-"+time1.getDate()+" "+time1.getHours()+":"+time1.getMinutes()+":"+time1.getSeconds()
    },
    getindex(index){
      return index+this.current*this.pag;
    },
  }
}

</script>
<style scoped>
#car>.paging{
  width: 70%;
  margin: 0 auto;
}
#car>.all{
  width: 100%;
  height: 320px;
}
.no{
  font-size: 25px;
  color: #1abc9c;
  line-height: 200px;
}
</style>