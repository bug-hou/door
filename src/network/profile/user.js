import base from "../base";

export default function(obj){
    return base({
        url:"/user.php",
        params:{
           id:obj.id,
           pwd:obj.pwd
        }
    })
}