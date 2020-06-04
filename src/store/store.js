import Vue from "vue"
import vuex from "vuex"

Vue.use(vuex);

export default new vuex.Store({
    state:{
        address:"",
        location:{},
        profile:{},
        status:false,
        scroll:false,
        star:"",
        car:""
    },
    mutations:{
        addLocation(state,item){
            state.location = item;
            state.address = item.formattedAddress;
        },
        addProfile(state,item){
            state.profile = item;
            state.star = item.star;
            state.car = item.car?item.car:"";
            state.status = true;
        },
        delete(state){
           state.profile = {};
           state.status = false;
        },
        setaddress(state,item){
            state.address = item
        },
        setprofile(state,obj){
            for(let i in obj){
                state.profile[i] = obj[i];
            }
        },
        addStar(state,item){
            state.star.push(item);
        },
        deleteStar(state,item){
            state.star.splice(state.star.indexOf(item),1);
        },
        change(state,item){
            state.car = state.car.replace(item.id+";","");
            state.profile.time = state.profile.time.replace(state.profile.time.split(";")[item.i]+";","");
        },
        addCar(state,obj){
            state.car += obj.id;
            state.profile.time += obj.str;
        }
    },
})