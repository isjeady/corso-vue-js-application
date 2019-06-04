<template>
  <div id="nav" >
    <router-link :to="{ name : 'home'}">Home</router-link> |
    <router-link :to="{ name : 'dragsample'}">DragSample</router-link> |
    <router-link :to="{ name : 'dragadvanced'}">DragAdvanced</router-link> |
<!--     <router-link :to="{ name : 'newpost'}">New Post</router-link> |
    <router-link :to="{ name : 'listpost'}">List Post</router-link> | -->
  </div>
</template>

<script>

export default {
  name: 'navigator',
  data (){
    return {
    }
  },
  computed : {

  }
}
</script>



