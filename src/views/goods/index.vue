<!--  -->
<template>
  <div id="goods">
      <top/>
      <first :titles="title" :type="type" v-if="header"/>
      <goods :data="data" :class="{show:show}"/>
      <div class="no" v-show="show">
          <p>内容已经没有了</p>
          <p>请看看其他药品吧</p>
          <p>你可以联系我们进行添加</p>
      </div>
      <paging/>
  </div>
</template>

<script>
import paging from '@/components/common/paging/paging'
import top from './top/top'
import first from './header/header'
import goods from "@/components/comtent/list/index"

import show from '@/network/home/home'
import title from '@/network/home/title'
import allname from '@/network/search/search2'
export default {
    name:"good",
  data () {
    return {
        page:1,
        count:12,
        type:null,
        data:[],
        title:[],
        show:false,
        name:null,
        header:true
    };
  },

  created() {
      if(this.$route.query.type){
          this.type = this.$route.query.type;
          this.network();
      }else{
          this.name = this.$route.query.name;
          this.header = false;
          this.allname();
      }
  },
  beforeMount() {
      title({
          type:this.type
      }).then(data=>{
          this.title = data.data
      })
  },

  components: {
      paging,
      top,
      first,
      goods
  },

  computed: {},

  mounted(){
      this.$bus.$on("change",current=>{
          this.page = current;
          this.network();
      })
  },

  methods: {
     network(){
        show({
            table:"medicine",
            page:this.page,
            count:this.count,
            type:this.type
        }).then(data=>{
            this.data = data.data;
            if(this.data.length == 0){
              this.show = true
          }else{
              this.show = false
          }
        }).catch(err=>{
            console.log("dafd");
        })
     },
     allname(){
        allname({
             table:"medicine",
             data:this.name
        }).then(res=>{
            this.data = data.data;
        })
     }
  }
}

</script>
<style scoped>
#goods>.show{
    height: 0;
}
.no{
  font-size: 40px;
  color: #1abc9c;
  width: 65%;
  margin: auto;
}
</style>