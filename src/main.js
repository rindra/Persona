import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Edit from './components/Edit.vue'
import Create from './components/Create.vue'
import Persona from './components/Persona.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/edit', component: Edit },
  { path: '/create', component: Create },
  { name:'persona', path: '/persona/:email', component: Persona }
]
const router = new VueRouter({
  routes 
})

Vue.config.productionTip = false

Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
router.push('home')
