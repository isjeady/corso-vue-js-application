<template>
  <div>
    {{ listSection }}
    <br>
    <button @click="addSection">Add Section</button>

    <div v-for="section in listSection" :key="section.key">
      <h1>Element : {{ section.key }}</h1>
      <input name="nome" v-model="section.nome">
      {{ section.nome}}
      {{ section.cognome}}
      <button @click="removeSection(section)">Remove Section</button>
      <hr>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Counter',
  data () {
    return {
      counter : 1, //unique id
      listSection : []
    }
  },
  methods: {
    addSection(){
      var element = { key : '',nome : '' , cognome : '' , altro : ''}
      this.counter++;
      element.key = this.counter;
      this.listSection.push(element);
    },
    removeSection(element){
      var found = this.listSection.findIndex(el => el.key == element.key);
      console.log(found);
      if(found >= 0){
        this.listSection.splice(found,1)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.count{
  font-size: 10em;
}
.btn{
  font-size: 3em;
}
</style>
