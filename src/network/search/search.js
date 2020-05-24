import base from "../base";

export default function(obj){
    return base({
        url:"/search.php",
        params:{
           table:obj.table,
           name:obj.name
        }
    })
}