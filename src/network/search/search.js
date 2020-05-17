import base from "../base";

export default function(obj){
    table = obj.table?obj.table:"medicine";
    return base({
        url:"/search.php",
        params:{
           table,
           name:obj.name
        }
    })
}