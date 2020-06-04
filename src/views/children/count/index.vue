<!--  -->
<template>
  <div class="count">
    <div class="image">
      <div class="img"><img :src="item.header" alt=""></div>
      <div class="chao">
          <div class="bao">
            保存
          </div>
          <div class="xu">
            <input type="file" id="file">
            <label for="file">
              <div class="xuan">
                选择
              </div>
            </label>
        </div>
      </div>
    </div>
    <div class="main">
      <div>名字<input type="text" v-model="name" :placeholder="item.name"></div>
      <div>账号<input type="text" v-model="id" :placeholder="item.id"></div>
      <div>电话<input type="text" v-model="phone" :placeholder="item.phone"></div>
      <div>年龄<input type="text" v-model="age" :placeholder="item.age"></div>
      <div class="duo">性别<input type="radio" v-model="sex" value="男" checked id="nan">
            <label for="nan">
             <div class="nan">男</div>
            </label>
            <input type="radio" v-model="sex" value="女" id="nv">
            <label for="nv">
             <div class="nv">女</div>
            </label>
      </div>
    </div>
    <div class="que" @click="ding">确定</div>
    <div class="close" @click="close">退出账号</div>
    <div class="qu" @click="qu">
      取消
    </div>
    <div class="ti" v-show="show">{{data}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sex:"男",
      name:"",
      id:"",
      phone:"",
      age:"",
      item:null,
      show:false,
      data:null
    };
  },

  created() {
    this.item = this.$store.state.profile
  },
  

  components: {},

  computed: {},

  mounted(){},

  methods: {
    qu(){
      this.name = this.item.name;
      this.id = this.item.id;
      this.phone = this.item.phone;
      this.age = this.item.age;
    },
    ding(){
      this.show = true;
      this.data = "修改成功";
      let obj = {
        name:this.item.name,
        id:this.item.id,
        phone:this.item.phone,
        age:this.item.age
      };
      this.$store.commit("setprofile",obj);
      for(let i in this.obj){
        this.item[i] = obj[i];
      }
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
    close(){
      this.show = true;
      this.data = "退出成功";
      setTimeout(() => {
        this.show = false;
        this.$store.commit("delete");
        this.$router.push("/login");
      }, 1000);
    }
  }
}

</script>
<style scoped>
.ti{
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: rgba(100, 100, 100, .3);
  color: #1abc9c;
  font-size: 30px;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
}
.que,.qu{
    width: 100px;
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  position: absolute;
  bottom: 5px;
  transform: translateX(-50%);
  border-radius: 15px;
}
.que{
  background: #cabbe9;
  color: white;
  left: 20%;
}
.qu{
  background: #a1eafb;
  color: white;
  left: 80%;
}
.close{
  width: 200px;
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  background: #ffcef3;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 15px;
  color: white;
}
.duo{
  transform: translateX(-30px);
}
.main>div>input[type="radio"]{
  width: 0;
  height: 0;
  opacity: 0;
}
input[type="radio"]:checked+label>div::before{
  background: #cabbe9;
}
.nan::before,.nv::before{
  width: 20px;
  height: 20px;
  content: "";
  display: inline-block;
  border-radius: 50%;
  border: 2px solid #278ea5;
  transform: translateY(2px);
  margin-right: 10px;
}
.main>*{
  flex:1;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.main>div>input{
  width: 260px;
  height: 40px;
  font-size: 25px;
  color: white;
}
.xuan{
  transform: translateY(-40px);
}
.chao>div{
  width:  80px;
  border-radius: 15px;
  font-size: 25px;
  line-height: 40px;
  text-align: center;
  height: 40px;
  background: #775ada;
}
.xu>input{
  opacity: 0;
  width: 0;
  height: 0;
}
.chao{
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.img{
  width: 80%;
  height: 280px;
  margin: auto;
}
.img>img{
  width: 100%;
  height: 100%;
}
.image{
  width: 45%;
  height: 340px;
}
.main{
    width: 45%;
  height: 340px;
  display: flex;
  flex-direction: column;
}
input:focus{
  outline: none;
  border: none;
  border-bottom: 1px solid #574b90;
}
input{
  border: none;
  outline: none;
  border-bottom: 1px solid #574b90;
  color: #ba53de;
  background: transparent;
}
.count{
  background: linear-gradient(to right, rgb(131, 96, 195), rgb(46, 191, 145));
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
}
</style>