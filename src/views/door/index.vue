<!--  -->
<template>
  <div id="door">
      <h2>申请医师资格证</h2>
      <div>
      <inp v-for="(item, index) in list" :key="index" :item="item"></inp>
      </div>
      <div>
      <smal v-for="(item,index) in slist" :key="index" :item="item"></smal>
      </div>
  </div>
</template>

<script>
import inp from "./input/input"
import smal from './smal/smal'
export default {
  data () {
    return {
        list:[
            {
                name:"姓名",
                data:"请保持和身份证一致"
            },{
                name:"手机号码",
                data:"请输入11位手机号"
            },{
                name:"邮箱地址",
                data:"请输入有效邮箱地址"
            },{
                name:"身份证号",
                data:"请输入15或18位身份证号"
            },{
                name:"银行卡",
                data:"请输入银行卡号以便工资打卡"
            }
        ],
        slist:[
            {
                title:"身份证照",
                img:["正面照","反面照"],
                list:["1. 身份证必须在有效期范围内","2. 证件照片上的文字需要能够清晰辨认","3. 支持 jpg、jpeg、bmp、png 格式，大小不超过 5M"]
            },{
                title:"资格证书",
                img:["执业药师资格证","医师资格证书"],
                list:["1. 医师执业证书必须在有效期范围内","2. 证件照片上的文字需要能够清晰辨认","3. 支持 jpg、jpeg、bmp、png 格式，大小不超过 5M"]
            }
        ]
    };
  },

  components: {
      inp,
      smal
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
#door>h2{
    font-size: 30px;
    color: 66px;
    text-align: start;
    margin-left: 100px;
    color: #666;
    font-weight: bold;
}
#door{
    width: 1200px;
    margin: 94px auto 0;
}
</style>