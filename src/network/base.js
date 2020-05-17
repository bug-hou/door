import axios from 'axios';

export default function(config){
    const install = axios.create({
        baseURL:"http://www.door.com",
        timeout:5000
    });
    return install(config);
}