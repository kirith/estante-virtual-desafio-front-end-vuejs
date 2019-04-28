import Vue from 'vue'
import Router from 'vue-router'
import AddressManager from '@/components/templates/AddressManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Desafio FrontEnd',
      component: AddressManager
    }
  ]
})
