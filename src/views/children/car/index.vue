<!--  -->
<template>
  <div id="car">
    <div v-if="show" class="no">
      你的购物车空空如也
    </div>
    <div v-else class="all">
        <goods v-for="(item,index) in data" :key="index" :item="item" :time="time[index]" :index="index"></goods>
    </div>
    <paging class="paging" v-show="!show"/>
</div>
</template>

<script>
import paging from '@/components/common/paging/paging'

import goods from "./goods/goods"

import request  from '@/network/search/search1'
import changeCar from '@/network/home/cars'
export default {
  data () {
    return {
      list:[],
      show:true,
      data:[],
      pag:4,
      time:null
    };
  },
  beforeMount() {
    
  },

  created(){
    if(this.$store.state.status){
    this.list = this.item?this.item.split(";"):[];
    this.time = this.$store.state.profile.time.split(";")?this.$store.state.profile.time.split(";"):[];
    if(this.item){
      this.list.pop();
      this.show = false;
      if(this.list.length>=4){
        for(let i=0;i<4;i++){
            request({
              table:"medicine",
              id:this.list[i]
            }).then(data=>{
              this.data.push(data.data);
            })
        }
      }else{
        this.list.forEach(item => {
          request({
              table:"medicine",
              id:item
            }).then(data=>{
              this.data.push(data.data);
            })
        });
      }
    }
    }
  },

  props:{
    item:null
  },

  components: {
    paging,
    goods
  },

  computed: {},

  mounted(){
    this.$bus.$on("change1",item=>{
      let i = this.list.indexOf(item);
      const id = item;
      this.data.splice(i,1);
      this.list.splice(i,1);
      changeCar({
        id:this.$store.state.profile.id,
        time:this.$store.state.profile.time,
        car:this.$store.state.car
      })
      if(this.data.length==0){
          this.show = true;
      }
    });
    this.$bus.$on("change",item=>{
      console.log(item);
    })
  },

  methods: {}
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