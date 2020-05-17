<!--  -->
<template>
  <div>
   
  </div>
</template>

<script>
import goods from '../../../network/home/home'
export default {
  data () {
    return {
        page:1,
        count:20,
        data:null
    };
  },

  created() {
      goods({
          page:this.page,
          count:this.count,
          table:"medicine"
      }).then(data=>{
          this.data = data.data;
      })
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
</style>