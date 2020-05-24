import base from "../base";

export default function(obj){
    return base({
        url:"/search2.php",
        params:{
            table:obj.table,
            data:obj.data
        }
    })
}