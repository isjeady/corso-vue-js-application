<template>
  <div class="hello">
    <h1 class="h1-text">{{ msg }}</h1>
    <h4>{{ $t('msg.welcome',{ username : name }) }}</h4>
    <p>
      {{ $t('msg.description') }}
    </p>
    <hr>
      <h3>Plurali</h3>
      <h4> {{ $tc('msg.car') }}</h4>
      <h4> {{ $tc('msg.car',5) }}</h4>
      <h4> {{ $tc('msg.apple',5) }}</h4>
      <h4> {{ $tc('msg.apple',0) }}</h4>
      <h4> {{ $tc('msg.apple',1) }}</h4>
      <hr>
      <h3>DateTime</h3>
      <p>{{ $d(new Date(), 'short') }}</p>
      <p>{{ $d(new Date(), 'long' ) }}</p>
      <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name : 'Marco Verdi'
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
