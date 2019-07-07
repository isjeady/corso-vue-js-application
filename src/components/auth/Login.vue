<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <h2>Login nel sistema</h2>
      <hr>
      <div class="form-group">
        <label for="email">Mail</label>
        <input class="form-control" type="email" id="email" v-model="email">
      </div>
      <div class="form-group">
         <label for="password">Password</label>
         <input class="form-control" type="password" id="password" v-model="password">
      </div>
      <button type="submit" class="btn btn-dark">Login</button>
    </form>
  </div>
</template>


<script>


export default {
  name: 'Login',
  data () {
    return {
      email : 'info@isjeady.com',
      password : 'testtest'
    }
  },
  methods : {
    onSubmit(){
      const formData = {
        email : this.email,
        password : this.password
      }
      console.log(formData);
      this.$store.dispatch('login', {email: formData.email, password: formData.password})
    }
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
