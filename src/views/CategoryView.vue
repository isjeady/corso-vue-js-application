<template>
    <div v-if="category">
        <h1>{{ category.name }}</h1>
        <h4>{{ category.description }}</h4>
        <loader :loading="loading" loaderText="Loading..."></loader>  
        <div v-if="!loading">
          
          <nav class="nav">
            <a class="nav-link disabled" href="#">Posts</a>
            <template v-for="(post,index) in getPosts">
                <router-link tag="a" class="nav-link" :to="{ name : 'post' , params : { keypost : post.key}}" :key="'menu' + index" >
                    {{ post.name }}
                </router-link>
            </template>
          </nav>

          <router-view></router-view>
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
      loading : true,
    }
  },
  mounted() {
        this.checkPost();
  },
  updated() {
        this.checkPost();
  },
  computed : {
      paramKey: function() {
          return this.$route.params.key;
      },
      ...mapGetters({
            'getCategory' : 'category/getCategory',
            'getPosts' : 'post/getPosts',
      }),
      category: function() {
        return this.getCategory(this.paramKey);
      },
  },
  methods : {
      ...mapActions({
          'fetchPosts' : 'post/fetchPosts',
      }),
      checkPost(){
        if(!this.getCategory(this.paramKey)){
          this.$router.push('/');
        }else{
          var category = this.getCategory(this.paramKey);
          this.fetchPosts({cat: category.id}).then(() => {
                  this.loading = false;       
          }).catch((error) => {
                this.loading = false;         
          })
        }
      }
  }
}
</script>

<style lang="scss">

</style>
