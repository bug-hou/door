import base from "../base";

export default function(obj){
    return base({
        url:"/cars.php",
        params:{
           id:obj.id,
           car:obj.car,
           time:obj.time
        }
    })
}