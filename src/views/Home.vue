<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="10%">
    
    
    <HelloWorld msg="i18n"/>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
