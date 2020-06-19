<template>
  <div id=edit>
    <h3>Select a Persona to edit</h3>
    <div class=personas>
      <div class=persona v-for="persona in personas">            
        <router-link v-bind:to="{name:'persona', params:{email:persona.email, data:persona}}"><div class=email>{{persona.email}}</div></router-link>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Edit',
  data: function(){
    return {personas:[]}
  },
  methods:{
    compare:function(a, b) {      
      const genreA = a.email.toUpperCase();
      const genreB = b.email.toUpperCase();

      let comparison = 0;
      if (genreA > genreB) {
        comparison = 1;
      } else if (genreA < genreB) {
        comparison = -1;
      }
      return comparison;
    },
    populate:function(v){      
      this.personas = this.personas.filter(p=>p.email.includes('alex'))
      console.log(this.personas)
    }
  },
  created:function(){        
    fetch('http://castlight-db.herokuapp.com/config/personas')
      .then(data=>data.json())
      .then(data=>this.personas = data.sort(this.compare))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #edit{
    width:100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;  
  }
  h3{
margin:2rem 0 0 2rem;
  }
  .personas{
    flex:.9;  
    display: flex;
    flex-wrap: wrap;
    margin:0 0 2rem 1rem;
  }
  .persona{
    width:20rem;
    height: min-content;
    border:.1rem solid #000000;
    padding:1rem 2rem 1rem 2rem;
    margin:1rem 0 0 1rem;
  }
</style>
