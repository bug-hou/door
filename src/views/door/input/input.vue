<!--  -->
<template>
  <div>
      <div class="box">
          <div class="name">{{item.name}}</div>
          <input type="text" :placeholder="item.data">
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
      item:{
          default(){
              return {}
          }
      }
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
.box{
    width: 750px;
    margin: 30px auto;
    height: 50px;
    display: flex;
    justify-content: space-between;
}
.box>.name{
    height: 50px;
    font-size: 25px;
    color: #666;
    line-height: 50px;
}
input:focus{
    outline: none;
    border: 1px solid #e6e6e6;
}
.box>input{
    width: 500px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    padding-left: 30px;
    color: #cdcdcd;
    border: 1px solid #e6e6e6;
    outline: none;
}
</style>