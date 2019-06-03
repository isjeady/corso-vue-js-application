<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Test Jest"/>

    <question :dataQuestion="{ title : 'titolo' , body : 'descrizione....'}"></question>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Question from '@/components/Question.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Question
  }
}
</script>
