<template>
  <div id="app">
    <div class="wrapper">

      <nav id="sidebar">
          <a href="https://isjeady.com" target="_blank"><img src="https://isjeady.com/wp-content/uploads/2018/09/logoDEF.png" width="100%"></a>
          <navigator></navigator>
      </nav>

      <div id="content">
        <router-view/>
      </div>

    </div>
    
  </div>
</template>


<script>
import Navigator from '@/views/Navigator.vue'
export default {
  name : 'app',
  components : {
    Navigator
  }
}
</script>

<style lang="scss">
.wrapper {
    display: flex;
    width: 100%;
}

#sidebar {
    width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: rgb(94, 236, 177);
    padding:60px 60px 100px 60px;
    color: #fff;
}

#content {
    width: calc(100% - 300px);
    max-width:none;
    margin-left: 300px;
    padding:60px 60px 100px 60px;
    min-height: 50vh;
    box-sizing: border-box;
}
</style>
