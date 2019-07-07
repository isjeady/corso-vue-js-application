<template>
  <div class="hello">
    <h1 class="h1-text">{{ msg }}</h1>
    <h2 v-text="'<b>Prova stringa</b>'"></h2>
    <hr>
    <h2 v-html="'<b>Prova stringa</b>'"></h2>
    <h2 v-evidenzia-locale="'red'">test colore rosso</h2>
    <h2 v-evidenzia-locale:sfondo.bigfont.pad="{ coloreSfondo : 'blue' , fontSize : '100px'}">sfondo rosso</h2>

    <input v-demo-input v-model="nome">
      {{ nome }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      nome : 'Prova Input'
    }
  },
  directives : {
    'demoInput' : {
        isLiteral: false,
        isEmpty: false,
        twoWay: true,
        inserted: function(el) {
          console.log('inserted input')
        },
        update: function(el, binding, vnode, oldVnode) {
          console.log('update input')
        },
        bind: function(el, binding, vnode) {
          console.log('bind input')
        }
    },
    'evidenzia-locale' : {
        bind(el,binding,vnode){
          if(binding.arg == 'sfondo'){
            if(binding.modifiers['bigfont']){
              el.style.fontSize = binding.value.fontSize;
            }
            if(binding.modifiers['pad']){
              el.style.padding = '25px';
            }
            el.style.backgroundColor = binding.value.coloreSfondo;
          }else{
            el.style.color = binding.value.coloreSfondo;
          }
          
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.h1-text{
  font-size: 5em;
}
</style>
