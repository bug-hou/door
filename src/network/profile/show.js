import base from "../base";

export default function(obj){
    return base({
        url:"/show1.php",
        params:{
           page:obj.page,
           count:obj.count,
           table:obj.table
        }
    })
}