<template>
  <div id="nav" >
    <router-link :to="{ name : 'home'}">Home</router-link> |
    <router-link :to="{ name : 'counter'}">Counter</router-link> |
    <router-link :to="{ name : 'todo'}">Todo</router-link> |
    <router-link :to="{ name : 'coupon'}">Coupon</router-link> |
    <router-link :to="{ name : 'question'}">Question</router-link> |
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



