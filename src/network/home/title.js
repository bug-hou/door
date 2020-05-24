import base from '../base'
 
export default function(obj){
    return base({
        url:"/distinct.php",
        params:{
            type:obj.type
        }
    })
}