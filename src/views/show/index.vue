<!--  -->
<template>
  <div id="show">
      <top class="top"></top>
      <first></first>
      <goods titles="中西药品">
        <img src="~@/assets/image/show/show1.png" alt="">
      </goods>
        <goods titles="滋补养生">
        <img src="~@/assets/image/show/show2.png" alt="">
      </goods>
        <goods titles="医疗器械">
        <img src="~@/assets/image/show/show3.png" alt="">
      </goods>
        <goods titles="保健食品">
        <img src="~@/assets/image/show/show4.png" alt="">
      </goods>
        <goods titles="家中常备">
        <img src="~@/assets/image/show/show5.png" alt="">
      </goods>
      <div class="footer"><img src="~@/assets/image/show/footer.png" alt=""></div>
  </div>
</template>

<script>
import top from "./top/top"
import first from './header/index'
import goods from './list/index'
export default {
  data () {
    return {
    };
  },

  components: {
    top,
    first,
    goods
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
.top{
  background: url("~@/assets/image/show.png");
  height: 315px;
  background-position-y: -50px;
  background-size: 100%;
}
img{
  width: 200px;
  height: 520px;
}
.footer{
  width: 100%;
}
.footer>img{
  width: 100%;
  height: 220px;
}
</style>