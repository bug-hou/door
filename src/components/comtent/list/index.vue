<!--  -->
<template>
  <div class="index">
   <div class="goods">
    <item v-for="(item,index) in data" :key="index" :item="item"></item>
   </div>
  </div>
</template>

<script>
import item from './item'
export default {
  data () {
    return {
    };
  },

  props:{
     data:null
  },

  components: {
    item,
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
.goods{
  width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(6,200px);
  grid-template-rows: repeat(2,260px);
}
</style>