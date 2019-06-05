<template>
  <div class="container">
    
    <div class="row">
      <div class="col-12">
        <h3>Drag & Drop Advanced - List New</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#key</th>
              <th scope="col">SurName</th>
              <th scope="col">Lastname</th>
              <th scope="col">Sex</th>
            </tr>
          </thead>
          <draggable
            :list="listNew"
            group="users"
            tag="tbody"
            @change="log"
          >
               <th v-if="listNew.length == 0" colspan="4" class="dragarea">
                Cols - Drag & Drop Area
              </th>
              <tr v-for="element in listNew" :key="element.key">
                <th scope="row">{{ element.key  }}</th>
                <td> {{ element.name }}</td>
                <td> {{ element.lastname }}</td>
                <td> {{ element.sex }}</td>
              </tr>
          </draggable>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-8">
          <button class="btn btn-success" @click="reset">
            Reset
          </button>
          <hr>
          <h3>Drag & Drop Area</h3>
          <draggable class="list-group" tag="ul" :list="listValues" v-bind="dragOptions" >
              <li class="list-group-item" v-for="element in listValues" :key="element.key">
                {{ element.key + ' - ' +element.name }}
              </li>
          </draggable>
       
      </div>
      <div class="col-4">
        <h3>listValues</h3>
          <code>{{ listValues }}</code>
        <hr>
        <h3>listNew</h3>
          <code>{{ listNew }}</code>
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
      listNew : [],
      listValuesBackup : []
    };
  },
  mounted(){
    this.listValuesBackup = JSON.parse(JSON.stringify(this.listValues));
  },
  methods: {
    reset() {
      this.listNew = [];
      this.listValues = JSON.parse(JSON.stringify(this.listValuesBackup))
    },
    log: function(evt) {
      window.console.log(evt);
    },
  },
  computed: {
    dragOptions() {
      return {
        disabled: false,
        ghostClass: "ghost",
        sort : false,
        group :{ name: 'users', put: true }
      };
    }
  }
};
</script>

<style>
.dragarea {
  background: #00f75259;
} 
.ghost {
  opacity: 0.1;
  background: #00f752;
} 
.list-group-item {
  text-align: left;
  cursor: move;
}
</style>
