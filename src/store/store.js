import Vue from "vue"
import vuex from "vuex"

Vue.use(vuex);

export default new vuex.Store({
    state:{
        address:"",
        location:{},
        profile:{},
        status:false,
        scroll:false
    },
    mutations:{
        addLocation(state,item){
            state.location = item;
            state.address = item.formattedAddress;
        },
        addProfile(state,item){
            state.profile = item;
            state.status = true;
        }
    }
})