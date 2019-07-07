<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <h2>Registrati</h2>
      <hr>
      <div class="form-group">
        <label for="name">Nome</label>
        <input class="form-control" type="name" id="name" v-model="name">
      </div>
      <div class="form-group">
        <label for="surname">Cognome</label>
        <input class="form-control" type="surname" id="surname" v-model="surname">
      </div>
      <div class="form-group">
        <label for="email">Mail</label>
        <input class="form-control" type="email" id="email" v-model="email">
      </div>
      <div class="form-group">
         <label for="password">Password</label>
         <input class="form-control" type="password" id="password" v-model="password">
      </div>
      <button type="submit" class="btn btn-dark">Salva</button>
    </form>
  </div>
</template>


<script>


export default {
  name: 'Register',
  data () {
    return {
      name : '',
      surname : '',
      email : '',
      password : ''
    }
  },
  methods : {
    onSubmit(){
      const formData = {
        name : this.name,
        surname : this.surname,
        email : this.email,
        password : this.password
      }
      console.log(formData);
     this.$store.dispatch('register', formData)
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
