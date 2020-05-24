import base from "../base";

export default function(obj){
    return base({
        url:"/search1.php",
        params:{
           table:obj.table,
           id:obj.id
        }
    })
}