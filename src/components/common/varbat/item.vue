<!--  -->
<template>
  <div :class="{active:judge}" @click="push">
      <slot ></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props:{
      path:{
        default:""
      }
  },

  components: {},

  computed: {
        judge(){
      return this.$route.path.indexOf(this.path)!==-1;
    }
  },

  mounted(){},

  methods: {
        push(){
      this.$router.push(this.path);
    },
  }
}

</script>
<style scoped>
.active{
  color: #1abc9c;
}
</style>