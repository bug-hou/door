<!--  -->
<template>
  <div>
      <div><input type="text" :placeholder="profile.name"></div>
      <div><input type="text" :placeholder="profile.id"></div>
      <div><input type="text" :placeholder="profile.pwd"></div>
      <div><input type="text" :placeholder="profile.phone"></div>
      <div><input type="radio" v-model="sex" value="男"><input type="radio" v-model="sex" value="女"></div>
      <div>地址:</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sex:"男"
    };
  },

  props:{
    profile:{
     type:Object
    }
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
</style>