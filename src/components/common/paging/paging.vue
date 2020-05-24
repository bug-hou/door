<!--  -->
<template>
  <div class="paging">
      <ul class="list">
          <li @click="jian" v-show="show">上一页</li>
          <li v-for="(item,index) in data" :key="index" :class="{active:current===item}" @click="change(item)" class="li">{{item}}</li>
          <li @click="jia">下一页</li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
        data:[1,2,3,4,5,6,7,8,9,10],
        current:1,
    };
  },

  props:{

  },

  components: {},

  computed: {
      show(){
          return this.current === 1?false:true;
      }
  },

  mounted(){},

  methods: {
      change(item){
          this.current = item;
          this.$bus.$emit("change",this.current);
          if(this.current>6){
              this.data = [];
              for(let i=item-5;i<item+4;i++){
                this.data.push(i);
              }
          }else{
              this.data = [1,2,3,4,5,6,7,8,9,10]
          }
      },
      jia(){
          this.current++;
          this.$bus.$emit("change",this.current);
          if(this.current>6){
              this.data = [];
              for(let i=this.current-5;i<this.current+4;i++){
                this.data.push(i);
              }
          }else{
              this.data = [1,2,3,4,5,6,7,8,9,10]
          }
      },
      jian(){
          this.current--;
          this.$bus.$emit("change",this.current);
            if(this.current>6){
              this.data = [];
              for(let i=this.current-5;i<this.current+4;i++){
                this.data.push(i);
              }
          }else{
              this.data = [1,2,3,4,5,6,7,8,9,10]
          }
      }
  }
}

</script>
<style scoped>
.active{
    color: black;
    font-weight: bold;
}
.paging{
    width: 50%;
    margin: 20px auto;
    height: 50px;
}
.list{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly; 
    align-items: center;

}
li:hover{
    background: #999;
    box-shadow: 1px 1px 3px rgba(100, 100, 100, .7),-1px -1px 3px rgba(200, 200, 200, .7);
}
li{
    list-style: none;
    border: 1px solid black;
    color: blueviolet;
    width: 50px;
    height: 25px;
    line-height: 25px;
    text-align: center;
}
.li{
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid black;
}
</style>