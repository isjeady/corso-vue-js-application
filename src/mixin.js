export const listMixin = {
    data() {
        return {
          search : '',
          names : ['Marco','Luca','Luigi','Lucia','Claudio','Francesco']
        }
    },
    computed : {
        filterNames(){
          return this.names.filter( (el) => {
            return el.match(this.search);
          }) 
        }
    },
    created(){
        console.log('2-Created by Mixin');
    }
};