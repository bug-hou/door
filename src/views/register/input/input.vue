<!--  -->
<template>
      <div id="input">
      <div class="text">{{item.text}}</div>
      <input :type="item.type" :placeholder="item.placeholder" :class="{active:item.red}" @blur="blur" v-model="data">
      <p v-show="item.errshow">{{item.error}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
        showdata:"",
        data:null,
        dian:true,
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
          this.$bus.$emit("blur",{
              item:this.item,
              data:this.data
          });
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
  width: 72%;
  margin: auto;
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
    padding-left: 52px;
    font-size: 18px;
}
.text,.button,p{
    position: absolute;
}
#input>.text{
font-size: 18px;
  left: 2px;
  width: 50px;
  background: #1abc9c;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
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