<template>
  <div id="nav" >
    <router-link :to="{ name : 'home'}">Home</router-link> |
    <router-link :to="{ name : 'counter'}">Counter</router-link> |

    <select v-model="selected">
      <option value="it">Italiano</option>
      <option value='gb'>English</option>
      <option value="es">Spagnolo</option>
    </select>
    <br>
    <span>Selected: {{ selected }}</span>

    <div style="font-size:70px">
        <flag :iso="selected" :squared="false"/>
    </div>

    <hr>
<!--     <router-link :to="{ name : 'newpost'}">New Post</router-link> |
    <router-link :to="{ name : 'listpost'}">List Post</router-link> | -->
  </div>
</template>

<script>

export default {
  name: 'navigator',
  data (){
    return {
      selected : 'A'
    }
  },
  computed : {

  }
}
</script>



