<!--  -->
<template>
  <div class="item">
      <div class="img"><img :src="item.hint" alt=""></div>
      <div>
          <p>{{item.name}}</p>
          <p>{{item.title}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props:{
      item:{}
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
.img{
  width: 200px;
  height: 220px;
}
</style>