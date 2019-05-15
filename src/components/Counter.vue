<template>
  <div>
    <div>
    <span class="count" v-text="count"></span>
    </div>
    <div>
    <button @click="count++" class="btn btn-dark">Counter ++</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Counter',
  data () {
    return {
      count : 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.count{
  font-size: 10em;
}
.btn{
  font-size: 3em;
}
</style>
