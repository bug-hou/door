<!--  -->
<template>
  <div id="show">
      <top class="top"></top>
      <first></first>
      <goods></goods>
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
</style>