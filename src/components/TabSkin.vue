<template>
  <div id=skin>
    <div class=header>
      <h3>Skin</h3>
      <div class='button new_skin' @click="new_skin">New</div>
      <div class='button save_skin' @click="save">Save</div>
    </div>
    <div class='box medium'>
      <div class=label>Name</div>
      <input v-model="skin_name" :placeholder="skin.name">      
    </div>
    <div class='box big'>
      <div class=label>Logo</div>
      <input v-model="skin_logo" :placeholder="skin.logo">      
    </div>
    <div class='box medium'>
      <div class=label>Gradient</div>
      <input v-model="skin_gradient" :placeholder="skin.gradient_color">      
    </div>
    <div class='box big'>
      <div class=label>Background Image</div>
      <input v-model="skin_image" :placeholder="skin.onboarding_image">      
    </div>
  </div>
</template>


<script>
export default {
  name: 'TabSkin',
  props:['skin'],
  data:function(){
    return {
      skin_name:'',
      skin_logo:'',
      skin_image:'',
      skin_gradient:''
    }
  },
  methods:{
    save:function(){
      
    },
    new_skin:function(){
      
    }
  },
  created:function(){
    
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:2rem 0 0 0;
    > h3{
      flex:1;
    }
  }

  .box{
    margin:4rem 0 0 0;
    &.big{
      input{
        width:60rem;  
      }      
    }
    &.medium{
      input{
        width:34rem;  
      }      
    }
  }
  .label{
    padding: 0 0 0 2rem;
    color:#adadad;
  }
  h3 {
    font-size: 2.5rem;
    margin:0 0 0 2rem;
  }
  .button{
    background-color: #000000;
    padding:2rem 3rem 2rem 3rem;
    border-radius:1rem;
    color:#ffffff;
    font-weight: 700;
    margin:0 2rem 0 0;
    &.new_skin{
      font-weight: 100;
      color: #000000;
      background-color: #ffffff;
      border: .1rem solid #000000;
    }
  }
  input{            
    border: 1px solid #cccccc;
    border-radius: 4px;
    color: #4b5b62;
    display: block;
    font-size: 1.6rem;    
    height: 40px;
    line-height: 1em;
    padding: 10px 12px;            
    user-select: text;
    width: 10rem;
    margin: .5rem 0 0 2rem;
  }
  input::placeholder {
    color: #bbbbbb;
  }
</style>
