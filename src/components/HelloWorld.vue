<template>
  <div class="hello">
    <h1 class="h1-text">{{ msg }}</h1>
    <h4>Benvenuto {{ name }}</h4>
    <p>
      A description of someone or something is an account which explains what they are or what they look like.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name : 'Super Mario'
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.h1-text{
  font-size: 5em;
}
</style>
