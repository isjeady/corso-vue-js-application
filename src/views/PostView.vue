<template>
    <div v-if="post">
        <h1>PostView</h1>
        {{ post }}
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
          return this.$route.params.keypost;
      },
       post: function() {
        return this.getPost(this.paramKey);
      },
      ...mapGetters({
            'getPost' : 'post/getPost',
      }),

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
