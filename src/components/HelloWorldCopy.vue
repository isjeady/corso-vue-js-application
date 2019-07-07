<template>
  <div class="hello">
    <h1 class="h1-text">{{ msg }}</h1>
    
    <div class="row">
      <div class="col-md-3">
        <input v-model="search">
        <ul>
          <li v-for="name in filterNames" :key="name">
            {{ name }}
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import { listMixin } from '../mixin';
export default {
  name: 'HelloWorldCopy',
  props: {
    msg: String
  },
  mixins : [listMixin],
  created(){
        console.log('3-Created by Hellowor COPY');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
