<template>
  <div class="container">

    <div class="row">
      <div class="col-12">
        <h3>Drag & Drop Sample - List</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#key</th>
              <th scope="col">SurName</th>
              <th scope="col">Lastname</th>
              <th scope="col">Sex</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="element in listValues" :key="element.key">
              <th scope="row">{{ element.key  }}</th>
              <td> {{ element.name }}</td>
              <td> {{ element.lastname }}</td>
              <td> {{ element.sex }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script>
import draggable from "vuedraggable";
import Vue from 'vue';

export default {
  name: "drag-sample",
  components: {
    draggable
  },
  data() {
    return {
      listValues : [
        { key : '1523' , name : 'Marco', lastname : 'Verdi', sex :'M'},
        { key : '3684' , name : 'Luigi', lastname : 'Bianchi', sex :'M'},
        { key : '1845' , name : 'Laura', lastname : 'Rossi', sex :'F'},
        { key : '3695' , name : 'Sonia', lastname : 'Neri', sex :'F'},
      ],
      listClone : []
    };
  },
  mounted(){
    
  },
  methods: {
    
  },
  computed: {
    
  }
};
</script>

<style>

</style>
