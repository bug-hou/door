import base from "../base";

export default function(obj){
    return base({
        url:"hospital.php",
        params:{
            address:obj.address
        }
    })
}