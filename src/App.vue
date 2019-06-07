<template>
  <div id="app">
    <div class="wrapper">

      <nav id="sidebar">

          <router-link tag="a" :to="'/'">
           <img src="https://isjeady.com/wp-content/uploads/2018/09/logoDEF.png" width="100%">
          </router-link>

          <loader :loading="loading" loaderText="Loading..."></loader>
          
          <div v-if="!loading">
              <!-- <router-link tag="div" class="link" :to="{ name : 'home'}">Home</router-link>
              <router-link tag="div" class="link" :to="{ name : 'counter'}">Counter</router-link>
               -->
              <template v-for="(rout,index) in categories">
                    <router-link tag="div" class="link" :to="'/blog/'+rout.key" :key="`menu_${index}`">
                      {{ rout.name }}
                    </router-link>
                    <hr>
              </template>

          </div>
      </nav>

      <div id="content">
        <router-view />
      </div>

    </div>
    
  </div>
</template>


<script>
import Loader from '@/components/Loader.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name : 'app',
  components : {
    Loader
  },
  data () {
    return {
      loading : true
    }
  },
  mounted() {
    console.log('beforeMount');
    this.fetchCategories().then(() => {
      console.log(this.categories);
      this.loading = false;       
    }).catch((error) => {
      this.loading = false;         
    });
  },
  computed : {
    ...mapGetters({
        'categories' : 'category/getCategories',
        'getCategory' : 'category/getCategory',
        'getPosts' : 'post/getPosts',
        'getPost' : 'post/getPost',
    }),
  },
  methods : {
      ...mapActions({
          'fetchCategories' : 'category/fetchCategories',
          'fetchPosts' : 'post/fetchPosts',
      })
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

.link{
  text-align: center;
  cursor:pointer;
  font-size: 24px;
  transition: 0.3s;
}
.link:hover{
  font-size: 28px;
  color: green;
}
</style>
