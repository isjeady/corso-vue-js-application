import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios-auth';
import gAxios from 'axios';

import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken : null,
    idUser : null,
    user : null
  },
  mutations: {
    authUser(state,userData){
      state.idToken = userData.token;
      state.idUser = userData.idUser;
    },
    storeUserInternal(state,user){
      state.user = user;
    },
    clearAuthData(state){
      state.idToken = null;
      state.idUser = null;
    }
  },
  actions: {
    setLogout({commit,dispatch},expireTime){
      setTimeout(() => {
        dispatch('logout');
      },expireTime * 1000);
    },
    logout({commit}){
      commit('clearAuthData');
      localStorage.removeItem('token');
      localStorage.removeItem('expireDate');
      localStorage.removeItem('idUser');
      router.push('/login');
    },
    register({commit,dispatch},formData){
      axios.post('/signupNewUser?key=AIzaSyA_IwkA6WwtR2Px_L2AanXt5GbDn48rLBE',
      {
        email : formData.email,
        password : formData.password,
        returnSecureToken : true
      })
      .then(res => {
        console.log(res);
        commit('authUser',{
          token : res.data.idToken,
          idUser : res.data.localId
        });
        commit('storeUserInternal',formData);
        dispatch('storeUser',formData);
        dispatch('setLogout',res.data.expiresIn);
      })
      .catch(error => console.log(error));
    },
    login({commit,dispatch},formData){
      axios.post('/verifyPassword?key=AIzaSyA_IwkA6WwtR2Px_L2AanXt5GbDn48rLBE',
      {
        email : formData.email,
        password : formData.password,
        returnSecureToken : true
      })
      .then(res => {
        console.log(res);
        commit('authUser',{
          token : res.data.idToken,
          idUser : res.data.localId
        });
        commit('storeUserInternal',formData);
        dispatch('setLogout',res.data.expiresIn);
        //------------------localstorage
        localStorage.setItem('token',res.data.idToken);
        const now = new Date();
        const expireDate = new Date(now.getTime() + res.data.expiresIn*1000);
        localStorage.setItem('expireDate',expireDate);
        localStorage.setItem('idUser', res.data.localId);
        //--------------------------
        router.push('/dashboard');
      })
      .catch(error => console.log(error));
    },
    storeUser({commit,state},userData){
      if(!this.state.idToken){
        return;
      }
      gAxios.post('users.json' + '?auth=' + state.idToken,userData)
      .then(res => {console.log(res);})
      .catch(error => console.log(error));
    },
    autoLogin({commit}){
      const token = localStorage.getItem('token');
      
      if(!token)
        return 
      const expireDate = localStorage.getItem('expireDate');
      const now = new Date();
      if(now >= expireDate)
        return
      const idUser = localStorage.getItem('idUser');
      commit('authUser',{
        token : token,
        idUser : idUser
      });
    }
  },
  getters : {
    user(state){
      return state.user;
    },
    isAuth(state){
      return state.idToken !== null;
    }
  }
})
