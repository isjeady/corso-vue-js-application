import Vue from 'vue'
import {sleep} from '@/lib/util';
import {catJson} from '@/jsonresponse';

const state = {
    categories : {},
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
};

  
const actions = {
    fetchCategories(context, payload) {
        //axios.get...GET API
        return sleep(2000)
        .then(() => {
            console.log('fetchCategories');
            context.commit('setCategories',catJson);
        });      
    }
};

const mutations = {
    setCategories(state,payload) {
        state.categories = payload
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
