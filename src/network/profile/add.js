import base from "../base";

export default function(obj){
    const name = obj.name?obj.name:"小侯";
    const sex = obj.sex?obj.sex:"男";
    const malady = obj.malady?obj.malady:"无";
    const allergies = obj.allergies?obj.allergies:"无";
    const age = obj.age?obj.age:18;
    const personily = obj.personily?obj.personily:"该用户很懒什么也没有";
    const header = obj.header?obj.header:"http://img.52z.com/upload/news/image/20180317/20180317080026_56120.jpg";
    return base({
        url:"/add.php",
        params:{
           id:obj.id,
           pwd:obj.pwd,
           name,
           sex, 
           malady,
           allergies,
           age,
           personily,
           header
        }
    })
}