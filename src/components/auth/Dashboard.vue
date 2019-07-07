<template>
  <div class="container">
    <template v-if="auth">
          <h1>Sei loggato </h1>
    </template>
    <template v-else>
          <h1 style="color:red;">Non sei loggato</h1>
    </template>
   
  </div>
</template>


<script>


export default {
  name: 'Login',
  data () {
    return {
    }
  },
  computed : {
    auth(){
      return this.$store.getters.isAuth;
    }
  },
  created(){
    console.log('created')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.count{
  font-size: 7em;
}
.btn{
  font-size: 3em;
}
</style>
