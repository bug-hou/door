import base from "../base";

export default function(obj){
    return base({
        url:"hosdata.php",
        params:{
            id : obj.id
        }
    })
}