<template>
    <div>
        <h1>CategoryView : {{ paramKey }}</h1>
        <h1>{{ category }}</h1>
        <loader :loading="loading" loaderText="Loading..."></loader>  
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
  beforeMount() {
  
  },
  computed : {
      paramKey: function() {
          return this.$route.params.key;
      },
      ...mapGetters({
            'getCategory' : 'category/getCategory',
      }),
      category: function() {
        var c = this.getCategory(this.paramKey);
        if(c){
          return c;
        }else{
          this.$router.push('/');
        }
      },
  },
  methods : {
      /*
      ...mapActions({
          'fetchCategories' : 'category/fetchCategories',
      }),
      */
  }
}
</script>

<style lang="scss">

</style>
