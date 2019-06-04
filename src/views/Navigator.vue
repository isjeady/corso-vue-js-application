<template>
  <div id="nav" >
    <router-link :to="{ name : 'home'}">Home</router-link> |
    <router-link :to="{ name : 'counter'}">Counter</router-link> |

    <select class="form-control" v-model="$i18n.locale" >
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.key">{{ lang.name }}</option>
    </select>

    <br>
    <span>Selected: {{ selectedLang }}</span>
    <br>
    <span>browLang: {{ browLang }}</span>

    <div style="font-size:70px">
        <flag :iso="selectedLang.flag" :squared="false"/>
    </div>

    <hr>
<!--     <router-link :to="{ name : 'newpost'}">New Post</router-link> |
    <router-link :to="{ name : 'listpost'}">List Post</router-link> | -->
  </div>
</template>

<script>

export default {
  name: 'navigator',
  data (){
    return {
      langs: [
          {name: 'Italiano', key: 'it', flag : 'it'}, 
          {name: 'English' , key: 'en' , flag : 'gb'}
      ]
    }
  },
  computed : {
      selectedLang: function(){
          return this.langs.find(el => el.key == this.$i18n.locale);
      },
      browLang: function(){
          return (navigator.language).substr(0,2);
      }
  }
}
</script>



