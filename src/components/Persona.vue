<template>
  <div id=persona>
    <aside>
      <h3>
        <div class=avatar :style="{ 'background-image': 'url(' + db(persona.photo) + ')' }"></div>
        <div class=info>
          <div class=name>{{persona.name}} {{persona.last_name}}</div>
          <div class=email>{{persona.email}}</div>
        </div>
      </h3>
      
      <section class=style>
        <div class=label>Style</div>            
        <div class=button @click="currentTab = 'TabSkin'" :class="{active:currentTab == 'TabSkin'}">Skin</div>        
      </section>
      <section class=profile>
        <div class=label>Profile</div>    
        <div class=button @click="currentTab = 'TabPersonal'" :class="{active:currentTab == 'TabPersonal'}">Personal</div>        
        <div class=button>Company</div>        
      </section>
      <section class=settings>
        <div class=label>Settings</div>        
        <div class=button>General</div>        
        <div class=button>Personalized for you</div>        
        <div class=button>Daily Activities</div>        
        <div class=button>Company Updates</div>        
        <div class=button>Date</div>        
        <div class=button>Points</div>        
        <div class=button>Interstitial</div>        
      </section>
    </aside>
    <main>
      <component :is="currentTab" :skin='skin' :persona='persona'></component>
    </main>
  </div>
</template>

<script>
import TabSkin from '../components/TabSkin.vue'
import TabPersonal from '../components/TabPersonal.vue'
export default {
  name: 'Persona',
  data: function (){
    return { 
      persona:{},
      skin:{},
      color:'blue',
      currentTab:'',
      isActive:false
    };
  },
  components:{
    TabSkin,
    TabPersonal
  },
  methods:{
    db: function(url) {
      return (url) ? ((url.split('https://www.dropbox.com').length > 1) ? `https://dl.dropboxusercontent.com${url.split('https://www.dropbox.com')[1]}` : url) : null;
    }
  },
  created:function(){  
    this.persona = this.$route.params.data; 
    fetch('http://castlight-db.herokuapp.com/config/skins')
      .then(data=>data.json())
      .then(data=>{
        this.skin = data.filter(d=>d.name == this.persona.skin)[0]                      
      }
     )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  #persona {
    width: 100%;
    height: 100%;
    display: flex;
  }
  aside{
    flex:.4;
    background-color: #f5f5f5;
  }
  main{
    flex:.6;
  }
  h3{
    margin:2rem 0 0 2rem;
    display: flex;
    align-items: center;
    font-weight: 100;
    .avatar{
      width:6rem;
      height: 6rem;
      background-repeat: no-repeat;
      background-size: contain;
      border-radius: 20rem;
    }
    .info{
      margin:0 0 0 2rem;
    }
    .email{
      font-weight: 700;
    }
  }
  section{
    margin: 4rem 0 0 0;
  }
  .label{
    padding:0 0 2rem 2rem;
    border-bottom: .1rem solid #cccccc;
  }
  .button{
    padding:2rem 2rem 2rem 10rem;
    &.active{
      background-color:#ffffff;
    }
  }
  
</style>
