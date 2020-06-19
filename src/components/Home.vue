<template>
  <div id=home>
    <h1>Welcome to Persona</h1>
    <div class=group>      
      <div class=box>        
          <div class=dsc>Edit an existing Persona</div>
          <router-link to="/edit"><div class=button>edit</div></router-link>
      </div>
      <div class=box>        
          <div class=dsc>Create a new Persona</div>
          <router-link to="/create"><div class=button>create</div></router-link>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {   
    other: function () {      
      return this.msg.split('').reverse().join('')
    }
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #home{
    width:100%;
    height: 100%;
  }
  h1{
    margin:4rem 0 0 0;
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
  }
  .group{
    display: flex; 
    margin:20rem 0 0 0;
  }
  .box{
    flex:.5;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .box:nth-child(2){
    border-left: .1rem solid #000000;
  }
  .dsc{
    font-size: 2rem;
    text-align: center;
  }
  .button{
    width:min-content;
    height: min-content;
    margin:5rem 0 0 0;
    border-radius:1rem;
    padding: 1rem 4rem 1rem 4rem;
    border: .1rem solid #000000;    
    text-transform: uppercase;
  }
</style>
