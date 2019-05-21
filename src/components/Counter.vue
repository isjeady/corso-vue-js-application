<template>
  <div>
    <div>
    <span class="count" v-text="count"></span>
    </div>
    <div class="row">
      <div class="col-6">
        <button @click="count++" class="btn btn-dark increment">Counter ++</button>
      </div>
      <div class="col-6">
       <button @click="count > 0 && count-- " v-show="count > 0" class="btn btn-dark decrement">Counter --</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Counter',
  data () {
    return {
      count : 5
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
