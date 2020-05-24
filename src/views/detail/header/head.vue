<!--  -->
<template>
  <div id="image" ref="img">
      <div class="img" @mousemove="move" @mouseenter="over">
      <div class="box" v-show="true" ref="box" @mousemove="move"></div>
          <div v-for="(item,index) in big" :key="index" :class="{active:current == index}"><img :src="item" alt=""></div>
      </div>
      <div class="big" :style="{backgroundImage:image}" ref="big"></div>
      <div class="small">
          <div v-for="(item,index) in small" :key="index" @click="current = index" :class="{show:index == current}"><img :src="item" alt=""></div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        current:0
    };
  },

  created() {
      
  },

  props:{
      big:null,
      small:null
  },

  components: {},

  computed: {
      image(){
          return "url("+this.big[this.current]+")";
      }
  },

  mounted(){},

  methods: {
      over(e){
        const x = e.offsetX;
        const y = e.offsetY;
        if(x<=100){
            this.$refs.box.style.left = "0";
        }else if(x>=300){
            this.$refs.box.style.left = "200px";
        }else{
            this.$refs.box.style.left = x-100+"px";
        }
        if(y<0){
            this.$refs.box.style.top = "100px";
        }else if(y>300){
            this.$refs.box.style.top = "200px";
        }else{
            this.$refs.box.style.top = y+"px";
        }
            let prex = this.$refs.box.offsetLeft/400;
            let prey = this.$refs.box.offsetTop/400;
            let bigx = prex*800;
            let bigy = prey*800;
            this.$refs.big.style.backgroundPosition = `${-bigx}px ${-bigy}px`
      },
      move(e){
          const x = e.pageX-this.$refs.img.offsetLeft;
          const y = e.pageY-this.$refs.img.offsetTop;
            if(x<=100){
                this.$refs.box.style.left = "0";
            }else if(x>=300){
                this.$refs.box.style.left = "200px";
            }else{
                this.$refs.box.style.left = x-100+"px";
            }
            if(y<=100){
                this.$refs.box.style.top = "0px";
            }else if(y>=300){
                this.$refs.box.style.top = "200px";
            }else{
                this.$refs.box.style.top = y-100+"px";
            }
            let prex = this.$refs.box.offsetLeft/400;
            let prey = this.$refs.box.offsetTop/400;
            let bigx = prex*800;
            let bigy = prey*800;
            this.$refs.big.style.backgroundPosition = `${-bigx}px ${-bigy}px`
      }
  }
}

</script>
<style scoped>
.show{
    border: 1px solid red;
}
.img:hover>.box{
    display: block;
}
.img:hover+.big{
    display: block;
}
.big{
    width: 400px;
    height: 400px;
    position: absolute;
    left: 120%;
    top: 0;
    display: none;
    background-size: 800px;
    background-position: -100px -100px;
}
.active{
    z-index: 5;
}
.img>.box{
    width: 200px;
    height: 200px;
    position: absolute;
    background: rgba(100, 100, 100, .7);
    left: 0;
    top: 0;
    z-index: 6;
    display: none;
}
#image{
    width: 400px;
    height: 500px;
    position: relative;
}
.img{
    width: 400px;
    height: 400px;
    position: relative;
}
.img>div{
    position: absolute;
    left: 0;
    top: 0;
    width: 400px;
    height: 400px;
}
.img>div>img{
    width: 400px;
    height: 400px;
}
.small{
    width: 400px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.small>div{
    width: 80px;
    height: 80px;
}
.small>div>img{
    width: 80px;
    height: 80px;
}
</style>