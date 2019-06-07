<template>
    <div v-if="category">
        <h1>{{ category.name }}</h1>
        <h4>{{ category.description }}</h4>
        <div v-if="getPosts.length > 0">
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
        <loader :loading="getPosts.length == 0" loaderText="Loading..."></loader>  
    </div>
</template>


<script>
import Loader from '@/components/Loader.vue'
import {mapGetters, mapActions} from 'vuex'
import store from '../store'

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
    this.fetchBeforeRoute(this.$route.params.key,this.$route.params.keypost);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchBeforeRoute(to.params.key,to.params.keypost);
    next();
  },
  computed : {
      paramKey: function() {
          return this.$route.params.key;
      },
      ...mapGetters({
            'getCategory' : 'category/getCategory',
            'getPosts' : 'post/getPosts',
            'getPost' : 'post/getPost',
      }),
      category: function() {
        return this.getCategory(this.paramKey);
      },
  },
  methods : {
      ...mapActions({
          'fetchPosts' : 'post/fetchPosts',
           'fetchCategories' : 'category/fetchCategories',
      }),
      fetchBeforeRoute(catKey,postKey){
          console.log('fetchBeforeRoute:' + catKey);
          this.fetchCategories().then(() => {
            let category = this.getCategory(catKey);
            if(!category){
              console.log('category NOT FOUND');
              this.$router.push('/');
            }else{
              //fetch dei post per la categoria
              this.fetchPosts({cat: category.id}).then(() => {
                let post = this.getPosts[0]; 
                if(postKey)post = this.getPost(postKey);
                  if(post)
                    this.$router.replace(`/blog/${category.key}/${post.key}`);    
                  else
                    this.$router.push('/');
              });
            }
          });
      }
  }
}
</script>

<style lang="scss">

</style>
