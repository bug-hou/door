<!--  -->
<template>
  <div>profile</div>
</template>

<script>
export default {
  data () {
    return {
      profile:{}
    };
  },

  created() {
    if(!this.$store.state.profile.name){
      this.$router.push("/login");
    }else{
      this.profile=this.$store.state.profile;
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