import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios);

export function init(){
    console.log('Apiservice Init');
    this.setHeader();
    //VUE_APP_API_FIREBASE_KEY
    //?key=AIzaSyA_IwkA6WwtR2Px_L2AanXt5GbDn48rLBE
    //----------------------------------------------------
    Vue.axios.interceptors.request.use(function(config){
        config.params = {
            key : process.env.VUE_APP_API_FIREBASE_KEY
        };
        return config;
    },function(error){
        return Promise.reject(error);
    });
    //----------------------------------------------------
    Vue.axios.interceptors.response.use(function(config){
        return config;
    },function(error){
        return Promise.reject(error);
    });
   

}

export function setHeader(){
    console.log('Apiservice setHeader');
    
    var ambient = process.env.NODE_ENV;
    var apiUrl = process.env.VUE_APP_API_URL;

    console.log('Ambient');
    console.log(ambient);
    console.log("apiUrl:" + apiUrl);

    Vue.axios.defaults.baseURL = apiUrl;
    Vue.axios.defaults.headers.get['Accepts'] = 'application/json';


    //Gestione del Token
    const ID_TOKEN_KEY = 'token';
    var token = window.localStorage.getItem(ID_TOKEN_KEY);
    console.log('------------token');
    console.log(token);
    if(token){
        Vue.axios.defaults.headers.common['Authorization'] = token;
    }
    
}

export function query(resource,params){
    return Vue.axios.get(`${resource}`,params);
}

export function get(resource){
    return Vue.axios.get(`${resource}`);
}

export function post(resource,params){
    return Vue.axios.post(`${resource}`,params);
}

export function update(resource,params){
    return Vue.axios.put(`${resource}`,params);
}

export function del(resource){
    return Vue.axios.delete(`${resource}`);
}