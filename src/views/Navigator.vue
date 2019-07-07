<template>
  <div id="nav" >
    <router-link :to="{ name : 'home'}">Home</router-link> |
    <router-link v-if="!auth" :to="{ name : 'register'}">Register</router-link> |
    <router-link v-if="!auth" :to="{ name : 'login'}">Login</router-link> |
    <router-link v-if="auth" :to="{ name : 'dashboard'}">Dashboard</router-link> |
    <a href="#" @click="logout" v-if="auth">Logout</a> |
    <router-link :to="{ name : 'counter'}">Counter</router-link> |
<!--     <router-link :to="{ name : 'newpost'}">New Post</router-link> |
    <router-link :to="{ name : 'listpost'}">List Post</router-link> | -->
  </div>
</template>

<script>

export default {
  name: 'navigator',
  data (){
    return {
    }
  },
  computed : {
    auth(){
      return this.$store.getters.isAuth;
    }
  },
  methods : {
    logout(){
      this.$store.dispatch('logout');
    }
  }
}
</script>



