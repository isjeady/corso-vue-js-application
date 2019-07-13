<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <h2>Registrati</h2>
      <hr>
      <div class="form-group" :class="{ notvalid : $v.name.$error}">
        <label for="name">Nome</label>
        <input class="form-control" type="name" id="name" @input="$v.name.$touch()" v-model="name">
      </div>
      <p class="error" v-if="$v.$dirty && !$v.name.required">Nome è un campo Obbligatorio</p>
      <p class="error" v-if="$v.$dirty && !$v.name.minLength">Lunghezza Minima del Nome è di {{ $v.name.$params.minLength.min }}</p>
      
      <div class="form-group">
        <label for="surname">Cognome</label>
        <input class="form-control" type="surname" id="surname" v-model="surname">
      </div>
      <div class="form-group" :class="{ notvalid : $v.email.$error}">
        <label for="email">Mail</label>
        <input class="form-control" type="email" id="email" @input="$v.email.$touch()" v-model="email">
      </div>
      <p class="error" v-if="$v.$dirty && !$v.email.required">Email è un campo Obbligatorio</p>
      <p class="error" v-if="$v.$dirty && !$v.email.email">Inserire una Email valida</p>
      
      <p class="error" v-if="$v.email.$pending">Validazione in corso....</p>

      <code><pre>{{ $v.email }}</pre></code>
    
      <div class="form-group" :class="{ notvalid : $v.password.$error}">
         <label for="password">Password</label>
         <input class="form-control" type="password" id="password" @input="$v.password.$touch()" v-model="password">
      </div>

      <div class="form-group" :class="{ notvalid : $v.confirmPassword.$error}">
         <label for="confirmPassword">Confirm Password</label>
         <input class="form-control" type="password" id="confirmPassword" @input="$v.confirmPassword.$touch()" v-model="confirmPassword">
      </div>

      <button type="submit" class="btn btn-dark" :disabled="$v.$invalid" >Salva</button>
  
    </form>
  </div>
</template>


<script>

import { required, email,minLength,sameAs  } from 'vuelidate/lib/validators'
import { setTimeout } from 'timers';
import axios from 'axios';


export default {
  name: 'Register',
  data () {
    return {
      name : '',
      surname : '',
      email : '',
      password : '',
      confirmPassword : '',
      condition : ''
    }
  },
  validations: {
    email: {
      required,
      email,
      unique : val => {
        if(val === '') return true;
        /*
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            resolve(val !== 'test@test.com')
          },1000)
        })
        */
       console.log(this.$v);
       return axios.get("users.json?orderBy=\"email\"&equalTo=\"" + val + "\"")
        .then(res => {
          console.log('response');
          console.log(res);
          return Object.keys(res.data).length === 0
        })
      }
    },
    name: {
      required,
      minLength : minLength(5)
    },
    password: {
      required,
      minLength : minLength(5)
    },
    confirmPassword: {
      sameAs : sameAs(val => {
        return val.password;
      })
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

.form-group.notvalid input {
    background-color: red;
}
.form-group.notvalid label {
    color: red;
}
p.error {
    text-align: left;
    font-size: 12px;
    color: red;
}
</style>
