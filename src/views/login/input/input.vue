<!--  -->
<template>
      <div id="input">
      <div class="text">{{item.text}}</div>
      <input :type="item.type" :placeholder="item.placeholder" :class="{active:item.red}" @blur="blur" value="">
      <div class="button" v-if="item.show" @click="dao">{{showdata}}</div>
      <p v-show="item.errshow">{{item.error}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
        showdata:"",
        data:60,
        dian:true
    };
  },
  created(){
   this.showdata = this.item.button
  },

  props:{
      item:{},
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
      blur(e){
          this.$emit("blur");
      },
      dao(){
          if(this.dian){
            this.dian = false
          this.showdata = this.data + "秒";
          var time = setInterval(()=>{
           if(this.data<=0){
               clearTimeout(time);
               this.showdata = this.item.button;
           }else{
            this.data--;
          this.showdata = this.data + "秒";
           }
          },1000)
          setTimeout(() => {
              this.dian = true;
          }, 100000);
          }
      }
  }
}

</script>
<style scoped>
#input>.active{
    border: 1px solid red;
}
#input{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
}
#input>input{
    width: 280px;
    height: 40px;
    margin: auto;
    border: 1px solid black;
    padding-left: 50px;
    font-size: 16px;
}
.text,.button,p{
    position: absolute;
}
.text{
    font-size: 16px;
  left: 0;
  width: 50px;
}
.button{
    right: 5px;
    font-size: 16px;
}
p{
    bottom: -10px;
    left: 50px;
}
</style>