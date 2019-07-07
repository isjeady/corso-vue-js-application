<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Filter & Mixins"/>
    <hr>
    <HelloWorldCopy msg="Filter & Mixins"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorldCopy from '@/components/HelloWorldCopy.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    HelloWorldCopy
  }
}
</script>
