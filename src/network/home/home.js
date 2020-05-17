import base from "../base";

export default function(obj){
    const table = obj.table?obj.table:"medicine";
    return base({
        url:"/show.php",
        params:{
           table,
           page:obj.page,
           count:obj.count
        }
    })
}