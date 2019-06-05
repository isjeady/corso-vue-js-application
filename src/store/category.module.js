import Vue from 'vue'
import {sleep} from '@/lib/util';
import {catJson} from '@/jsonresponse';

const state = {
    categories : {},
    subCategories : {},

};

const getters = {
    getCategories(state) {
        return state.categories;
    },
    getCategory : (state,getters) => (paramKey) => {
        if(getters.getCategories){
           if((paramKey.trim() in getters.getCategories)){
               return getters.getCategories[paramKey];
            }else{
               return null;
           }
        }
        return null;
    },
    getSubCategories(state) {
        return state.subCategories;
    },
};

  
const actions = {
    fetchCategories(context, payload) {
        //axios.get...GET API
        sleep(1000)
        .then(() => {
            console.log('fetchCategories');
            console.log(catJson);
            context.commit('setCategories',catJson);
        })
        .catch((error) => {
            throw new Error(error);
        });      
    }
};

const mutations = {
    setCategories(state,payload) {
        state.categories = payload
    },
    setSubCategories(state,payload) {
        state.subCategories = payload
    },
    setCategory(state,payload) {
        Vue.set(state.categories, payload.key, payload);
    },
};

export default {
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}
