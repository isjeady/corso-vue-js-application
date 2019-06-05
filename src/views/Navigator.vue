<template>
  <div id="nav" >
    <router-link tag="div" class="link" :to="{ name : 'home'}">Home</router-link>
    <router-link tag="div" class="link" :to="{ name : 'counter'}">Counter</router-link>
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

  }
}
</script>

<style>
.link{
  text-align: center;
  cursor:pointer;
  font-size: 24px;
  transition: 0.3s;
}
.link:hover{
  font-size: 28px;
  color: green;
}
</style>


