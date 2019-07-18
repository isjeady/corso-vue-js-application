import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios);

export function init(){
    console.log('Apiservice Init');
    this.setHeader();

}

export function setHeader(){
    console.log('Apiservice setHeader');
    
    var ambient = process.env.NODE_ENV;
    var apiUrl = process.env.VUE_APP_API_URL;
    console.log('Ambient');
    console.log(ambient);
    console.log("apiUrl:" + apiUrl);

    Vue.axios.defaults.baseURL = apiUrl;
    Vue.axios.defaults.headers.common['Accepts'] = 'application/json';
    
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