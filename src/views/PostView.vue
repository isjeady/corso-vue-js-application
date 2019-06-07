<template>
    <div v-if="post">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title"> {{ post.name }}</h5>
            <p class="card-text">{{ post.description }}</p>
            <p class="card-text"><small class="text-muted">{{ post.time }}</small></p>
          </div>
          <img class="card-img-top" :src="post.img" alt="Card image cap">
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

  }
}
</script>

<style lang="scss">

</style>
