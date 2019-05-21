<template>
  <div>
    <input class="new-todo" v-model="todo">
    <button @click="add" class="btn btn-dark add">+</button>
    
    <ul v-if="todos.length">
      <li v-for="t in todos" :key="t">
          {{ t }}
          <button class="btn btn-dark add remove" @click="remove(t)">Delete</button>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'Counter',
  data () {
    return {
      todo : '',
      todos : []
    }
  },
  methods : {
    add(){
      this.todos.push(this.todo);
      this.todo = '';
    },
    remove(t){
      this.todos.splice(t,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.btn{
  font-size: 1em;
}
</style>
