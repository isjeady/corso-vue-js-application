<template>
  <div class="container">

    <div class="row">
      <div class="col-12">
        <h3>Drag & Drop Sample - List Clone</h3>
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
            <tr v-for="element in listClone" :key="element.key">
              <th scope="row">{{ element.key  }}</th>
              <td> {{ element.name }}</td>
              <td> {{ element.lastname }}</td>
              <td> {{ element.sex }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <div class="row">
      <div class="col-8">
        <h3>Drag & Drop Area</h3>
          <draggable class="list-group" tag="ul" :list="listClone" v-bind="dragOptions" >
            <transition-group type="transition" name="flip-list" >
              <li @drop="dropped(element)" class="list-group-item" v-for="element in listClone" :key="element.key">
                <i class="material-icons" v-if="!element.dropped">drag_indicator</i>
                <i class="material-icons" v-if="element.dropped">access_time</i>
                {{ element.key + ' - ' +element.name }}
              </li>
            </transition-group>
          </draggable>
      </div>
      <div class="col-4">
        <h3>listValues</h3>
          <code>{{ listValues }}</code>
        <hr>
        <h3>listClone</h3>
          <code>{{ listClone }}</code>
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
    this.reset();
  },
  methods: {
    reset() {
      this.listClone = JSON.parse(JSON.stringify(this.listValues));
      this.listClone.forEach(el => Vue.set(el,'dropped',false));
    },
    dropped(element) {
      this.listClone.forEach(el => el.dropped = false);
      element.dropped = ! element.dropped;
    },
  },
  computed: {
    dragOptions() {
      return {
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style>
.ghost {
  opacity: 0.1;
  background: #00f752;
} 

.flip-list-move {
  transition: transform 0.5s;
}

.list-group-item {
  text-align: left;
  cursor: move;
}
</style>
